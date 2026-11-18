// Serve o build (dist/curriculum/browser) como o GitHub Pages, em http://127.0.0.1:<porta>/
// Usado pelos testes de ponta a ponta (playwright.config.ts) e para conferir o site antes de publicar:
//
//   npm run build:pages && node scripts/serve.mjs        → http://127.0.0.1:4300/
import { readFile } from 'node:fs/promises';

import { serve } from './lib/browser.mjs';

const DIST = 'dist/curriculum/browser';
const port = Number(process.argv[2] ?? process.env.PORT ?? 4300);

const html = await readFile(`${DIST}/index.html`, 'utf8').catch(() => {
    console.error(`${DIST} não existe: rode npm run build:pages antes`);
    process.exit(1);
});
const base = /<base href="([^"]+)"/.exec(html)?.[1] ?? '/';

const server = await serve(DIST, base, port);
console.log(`Site em ${server.url}`);
