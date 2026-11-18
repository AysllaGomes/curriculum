// Gera as imagens de prévia de links (1200×630) de cada idioma em src/assets/og/<idioma>.jpg.
//
// As imagens trazem o cargo e a frase de abertura, então precisam ser geradas de novo quando eles mudam
// (ou uma vez por ano, por causa dos anos de experiência na frase):
//
//   npm run og        → build das páginas e, em seguida, as 4 imagens
//
// Os textos vêm das páginas já geradas no build (dist/curriculum/browser/<idioma>/index.html: og:title e
// a frase da abertura), ou seja, são exatamente os do site. Usa o Chrome ou o Edge instalado no computador
// (ou o caminho em CHROME_PATH), sem dependência nova no projeto (ver scripts/lib/browser.mjs).
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

import { openBrowser } from './lib/browser.mjs';

const DIST = 'dist/curriculum/browser';
const OUT = 'src/assets/og';
const LOCALES = ['pt', 'en', 'es', 'it'];
const PHOTO = 'https://pub-51456c379d4c4f7ba854a6e3e4b02278.r2.dev/professional/Ayslla_Caroline.webp';
const SITE = 'aysllagomes.github.io/curriculum';
const WIDTH = 1200;
const HEIGHT = 630;

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

const dir = await mkdtemp(join(tmpdir(), 'og-'));
const browser = await openBrowser();
try {
    for (const locale of LOCALES) {
        const html = await readFile(`${DIST}/${locale}/index.html`, 'utf8').catch(() => {
            throw new Error(`${DIST}/${locale}/index.html não existe: rode o build antes (npm run og faz os dois)`);
        });
        const [name, role] = meta(html, 'og:title').split(' · ');
        // A frase da abertura, sem as tecnologias que completam a descrição da página: na arte, a frase curta lê melhor
        const headline = /class="headline"[^>]*>([^<]+)</.exec(html)?.[1]?.trim();
        if (!headline) throw new Error(`frase da abertura não encontrada em ${locale}/index.html`);
        const lang = /<html[^>]+lang="([^"]+)"/.exec(html)?.[1] ?? locale;

        const file = join(dir, `${locale}.html`);
        await writeFile(file, page({ lang, name, role, headline }));

        const tab = await browser.page();
        await tab.send('Emulation.setDeviceMetricsOverride', { width: WIDTH, height: HEIGHT, deviceScaleFactor: 1, mobile: false });
        await tab.open(pathToFileURL(file).href);
        const { data } = await tab.send('Page.captureScreenshot', { format: 'jpeg', quality: 90 });
        await writeFile(`${OUT}/${locale}.jpg`, Buffer.from(data, 'base64'));
        tab.close();
        console.log(`${OUT}/${locale}.jpg — ${role} · ${headline}`);
    }
} finally {
    await browser.close();
    await rm(dir, { recursive: true, force: true }).catch(() => {});
}
