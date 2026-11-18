// Gera as imagens de prévia de links (1200×630) de cada idioma em src/assets/og/<idioma>.jpg.
//
// As imagens trazem o cargo e a frase de abertura, então precisam ser geradas de novo quando eles mudam
// (ou uma vez por ano, por causa dos anos de experiência na frase):
//
//   npm run og        → build das páginas e, em seguida, as 4 imagens
//
// Os textos vêm das páginas já geradas no build (dist/curriculum/browser/<idioma>/index.html: og:title e
// og:description), ou seja, são exatamente os do site. Usa o Chrome ou o Edge instalado no computador
// (ou o caminho em CHROME_PATH), sem dependência nova no projeto.
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const DIST = 'dist/curriculum/browser';
const OUT = 'src/assets/og';
const LOCALES = ['pt', 'en', 'es', 'it'];
const PHOTO = 'https://pub-51456c379d4c4f7ba854a6e3e4b02278.r2.dev/professional/Ayslla_Caroline.webp';
const SITE = 'aysllagomes.github.io/curriculum';
const WIDTH = 1200;
const HEIGHT = 630;

const BROWSERS = [
    process.env.CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
];

const font = (pkg, file) => pathToFileURL(resolve(`node_modules/@fontsource-variable/${pkg}/files/${file}`)).href;

/** Lê o conteúdo de uma <meta property="…"> da página gerada. */
function meta(html, property) {
    const tag = html.match(new RegExp(`<meta[^>]+property="${property}"[^>]*>`))?.[0];
    const content = tag?.match(/content="([^"]*)"/)?.[1];
    if (!content) throw new Error(`${property} não encontrado`);
    return content.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#39;', '\'');
}

const escape = (text) => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;');

/** Mesmo visual da abertura do site (tema escuro). */
function page({ lang, name, role, headline }) {
    return `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8"><style>
@font-face { font-family: 'Space Grotesk'; src: url('${font('space-grotesk', 'space-grotesk-latin-wght-normal.woff2')}') format('woff2'); font-weight: 300 700; }
@font-face { font-family: 'Inter'; src: url('${font('inter', 'inter-latin-wght-normal.woff2')}') format('woff2'); font-weight: 100 900; }
* { box-sizing: border-box; margin: 0; }
html, body { width: ${WIDTH}px; height: ${HEIGHT}px; overflow: hidden; }
body {
    background: radial-gradient(circle at 100% 0%, #1f2638 0%, #0d1117 55%);
    color: #e6edf3; font-family: 'Inter', sans-serif;
    display: grid; grid-template-columns: 1fr 340px; align-items: center; gap: 60px; padding: 0 80px;
}
.badge {
    display: inline-flex; align-items: center; gap: 12px; padding: 12px 22px;
    border: 1px solid #343d49; border-radius: 999px; font-size: 22px; color: #b7c1cc;
}
.badge::before { content: ''; width: 10px; height: 10px; border-radius: 50%; background: #8aa4ff; }
h1 { font-family: 'Space Grotesk', sans-serif; font-size: 92px; font-weight: 700; letter-spacing: -0.02em; margin: 28px 0 22px; line-height: 1; }
p { font-size: 30px; line-height: 1.45; color: #b7c1cc; max-width: 600px; }
.photo { position: relative; width: 340px; height: 340px; }
.photo::before { content: ''; position: absolute; inset: 0; transform: translate(18px, 18px); background: #8aa4ff; border-radius: 22px; }
.photo img { position: relative; width: 100%; height: 100%; object-fit: cover; border-radius: 22px; }
footer { position: absolute; left: 80px; bottom: 44px; font-size: 21px; color: #9aa6b2; display: flex; gap: 14px; }
footer b { font-family: 'Space Grotesk', sans-serif; color: #e6edf3; }
footer b span { color: #8aa4ff; }
</style></head><body>
<div><span class="badge">${escape(role)}</span><h1>${escape(name)}</h1><p>${escape(headline)}</p></div>
<div class="photo"><img src="${PHOTO}" alt=""></div>
<footer><b>ayslla<span>.</span></b>${SITE}</footer>
</body></html>`;
}

/** Conversa com o navegador pelo protocolo do DevTools (WebSocket nativo do Node). */
function connect(url) {
    const ws = new WebSocket(url);
    let id = 0;
    const pending = new Map();
    ws.addEventListener('message', ({ data }) => {
        const msg = JSON.parse(data);
        const p = pending.get(msg.id);
        if (!p) return;
        pending.delete(msg.id);
        if (msg.error) p.reject(new Error(msg.error.message));
        else p.resolve(msg.result);
    });
    const send = (method, params = {}) => new Promise((resolve, reject) => {
        pending.set(++id, { resolve, reject });
        ws.send(JSON.stringify({ id, method, params }));
    });
    return new Promise((ok, fail) => {
        ws.addEventListener('open', () => ok({ send, close: () => ws.close() }));
        ws.addEventListener('error', fail);
    });
}

async function launch(executable, profile) {
    const browser = spawn(executable, [
        '--headless=new', '--remote-debugging-port=0', `--user-data-dir=${profile}`, '--no-first-run', '--hide-scrollbars',
        '--allow-file-access-from-files', 'about:blank',
    ]);
    const endpoint = await new Promise((ok, fail) => {
        let log = '';
        browser.stderr.on('data', chunk => {
            log += chunk;
            const match = /DevTools listening on (ws:\/\/\S+)/.exec(log);
            if (match) ok(match[1]);
        });
        browser.on('exit', code => fail(new Error(`o navegador fechou (código ${code})\n${log}`)));
    });
    return { browser, port: new URL(endpoint).port };
}

const executable = BROWSERS.find(p => p && existsSync(p));
if (!executable) {
    console.error('Chrome ou Edge não encontrado. Informe o caminho em CHROME_PATH.');
    process.exit(1);
}

const profile = await mkdtemp(join(tmpdir(), 'og-'));
const { browser, port } = await launch(executable, profile);
try {
    for (const locale of LOCALES) {
        const html = await readFile(`${DIST}/${locale}/index.html`, 'utf8').catch(() => {
            throw new Error(`${DIST}/${locale}/index.html não existe: rode o build antes (npm run og faz os dois)`);
        });
        const [name, role] = meta(html, 'og:title').split(' · ');
        const headline = meta(html, 'og:description');
        const lang = /<html[^>]+lang="([^"]+)"/.exec(html)?.[1] ?? locale;

        const file = join(profile, `${locale}.html`);
        await writeFile(file, page({ lang, name, role, headline }));

        const target = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' })).json();
        const tab = await connect(target.webSocketDebuggerUrl);
        await tab.send('Emulation.setDeviceMetricsOverride', { width: WIDTH, height: HEIGHT, deviceScaleFactor: 1, mobile: false });
        await tab.send('Page.navigate', { url: pathToFileURL(file).href });
        // Espera as fontes e a foto: sem isso a imagem sai com a fonte padrão ou sem a foto
        await tab.send('Runtime.evaluate', {
            awaitPromise: true,
            expression: `new Promise(r => { const go = () => Promise.all([document.fonts.ready,
                ...[...document.images].map(i => i.complete ? 0 : new Promise(d => { i.onload = i.onerror = d; }))]).then(() => r(true));
                document.readyState === 'complete' ? go() : addEventListener('load', go); })`,
        });
        const { data } = await tab.send('Page.captureScreenshot', { format: 'jpeg', quality: 90 });
        await writeFile(`${OUT}/${locale}.jpg`, Buffer.from(data, 'base64'));
        tab.close();
        console.log(`${OUT}/${locale}.jpg — ${role} · ${headline}`);
    }
} finally {
    browser.kill();
    await rm(profile, { recursive: true, force: true }).catch(() => {});
}
