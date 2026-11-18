// Chrome/Edge sem janela, controlado pelo protocolo do DevTools (WebSocket nativo do Node).
// Usado pelos scripts que geram as imagens de prévia (og-images.mjs) e os PDFs do currículo (pdf.mjs).
// Sem dependência nova: usa o navegador instalado (no GitHub Actions, o Chrome que já vem no ubuntu-latest).
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { createServer } from 'node:http';
import { tmpdir } from 'node:os';
import { extname, join, normalize } from 'node:path';

const CANDIDATES = [
    process.env.CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
];

/** Abre o navegador; `page()` cria uma aba nova. Feche com `close()`. */
export async function openBrowser() {
    const executable = CANDIDATES.find(p => p && existsSync(p));
    if (!executable) throw new Error('Chrome ou Edge não encontrado. Informe o caminho em CHROME_PATH.');

    const profile = await mkdtemp(join(tmpdir(), 'curriculum-browser-'));
    const proc = spawn(executable, [
        '--headless=new', '--remote-debugging-port=0', `--user-data-dir=${profile}`, '--no-first-run',
        '--hide-scrollbars', '--allow-file-access-from-files', '--no-sandbox', 'about:blank',
    ]);
    const endpoint = await new Promise((ok, fail) => {
        let log = '';
        proc.stderr.on('data', chunk => {
            log += chunk;
            const match = /DevTools listening on (ws:\/\/\S+)/.exec(log);
            if (match) ok(match[1]);
        });
        proc.on('exit', code => fail(new Error(`o navegador fechou (código ${code})\n${log}`)));
    });
    const port = new URL(endpoint).port;

    return {
        async page() {
            const target = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' })).json();
            return connect(target.webSocketDebuggerUrl);
        },
        async close() {
            proc.kill();
            await rm(profile, { recursive: true, force: true }).catch(() => {});
        },
    };
}

async function connect(url) {
    const ws = new WebSocket(url);
    let id = 0;
    const pending = new Map();
    const listeners = new Map();
    ws.addEventListener('message', ({ data }) => {
        const msg = JSON.parse(data);
        if (msg.method) listeners.get(msg.method)?.forEach(fn => fn(msg.params));
        const p = pending.get(msg.id);
        if (!p) return;
        pending.delete(msg.id);
        if (msg.error) p.reject(new Error(`${p.method}: ${msg.error.message}`));
        else p.resolve(msg.result);
    });
    await new Promise((ok, fail) => {
        ws.addEventListener('open', ok);
        ws.addEventListener('error', fail);
    });

    const send = (method, params = {}) => new Promise((resolve, reject) => {
        pending.set(++id, { resolve, reject, method });
        ws.send(JSON.stringify({ id, method, params }));
    });
    const once = (method) => new Promise(resolve => {
        const fn = (params) => { listeners.get(method).delete(fn); resolve(params); };
        listeners.set(method, (listeners.get(method) ?? new Set()).add(fn));
    });

    await send('Page.enable');
    return {
        send,
        /**
         * Abre o endereço e espera a página, as fontes e as imagens carregarem (no máximo 15 s).
         * Imagens com carregamento preguiçoso (loading="lazy") fora da tela nunca carregariam: passam a carregar já.
         */
        async open(address) {
            const loaded = once('Page.loadEventFired');
            await send('Page.navigate', { url: address });
            await loaded;
            await send('Runtime.evaluate', {
                awaitPromise: true,
                expression: `(() => {
                    const images = [...document.images];
                    images.forEach(i => { i.loading = 'eager'; });
                    const ready = Promise.all([document.fonts.ready, ...images.map(i => i.complete ? 0
                        : new Promise(done => { i.addEventListener('load', done); i.addEventListener('error', done); }))]);
                    return Promise.race([ready, new Promise(done => setTimeout(done, 15000))]).then(() => true);
                })()`,
            });
        },
        close: () => ws.close(),
    };
}

const TYPES = {
    '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json',
    '.woff2': 'font/woff2', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
    '.xml': 'application/xml', '.pdf': 'application/pdf',
};

/**
 * Serve uma pasta como o GitHub Pages: `/pt/` → `<pasta>/pt/index.html`; `/pt` (pasta sem a
 * barra) → redireciona para `/pt/`; endereço que não existe → status 404 com o `404.html` da pasta.
 * Necessário porque as páginas usam endereços a partir da raiz (`<base href="/">`) e não abrem direto do disco.
 */
export async function serve(dir, base = '/', port = 0) {
    const read = (path) => readFile(join(dir, path));
    const send = (res, status, path, body) => {
        res.writeHead(status, { 'content-type': TYPES[extname(path)] ?? 'application/octet-stream' });
        res.end(body);
    };
    const server = createServer(async (req, res) => {
        const pathname = decodeURIComponent(new URL(req.url, 'http://x').pathname);
        if (!pathname.startsWith(base)) {
            res.writeHead(302, { location: base });
            return res.end();
        }
        // Endereço de pasta (vazio ou com barra no fim) → o index.html dela; normalize() impede sair da pasta com "../"
        let relative = pathname.slice(base.length);
        if (relative === '' || relative.endsWith('/')) relative += 'index.html';
        const path = normalize(relative).replace(/^([/\\])+/, '');
        try {
            return send(res, 200, path, await read(path));
        } catch {
            // Pasta pedida sem a barra final: o Pages redireciona para a versão com barra
            const isDir = await read(join(path, 'index.html')).then(() => true, () => false);
            if (isDir) {
                res.writeHead(301, { location: `${pathname}/` });
                return res.end();
            }
            const notFound = await read('404.html').catch(() => null);
            return notFound ? send(res, 404, '404.html', notFound) : send(res, 404, '.txt', '');
        }
    });
    await new Promise(ok => server.listen(port, '127.0.0.1', ok));
    return {
        url: `http://127.0.0.1:${server.address().port}${base}`,
        close: () => new Promise(ok => server.close(ok)),
    };
}
