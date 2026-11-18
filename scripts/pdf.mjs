// Gera o currículo em PDF de cada idioma a partir das páginas do build, com o CSS de impressão do próprio site
// (@media print em src/styles.scss e nos componentes): dist/curriculum/browser/cv/ayslla-gomes-<idioma>.pdf
//
// Roda depois do build (npm run build:pages já chama). Como sai do mesmo HTML, o PDF nunca fica diferente do site:
// cargo, anos de experiência e durações se atualizam a cada deploy, inclusive no build semanal.
import { mkdir, readFile, writeFile } from 'node:fs/promises';

import { openBrowser, serve } from './lib/browser.mjs';

const DIST = 'dist/curriculum/browser';
const LOCALES = ['pt', 'en', 'es', 'it'];

/** Mesmo endereço base do build (`<base href>`; `/` com o domínio próprio). */
const html = await readFile(`${DIST}/${LOCALES[0]}/index.html`, 'utf8').catch(() => {
    throw new Error(`${DIST}/${LOCALES[0]}/index.html não existe: rode o build antes`);
});
const base = /<base href="([^"]+)"/.exec(html)?.[1] ?? '/';

await mkdir(`${DIST}/cv`, { recursive: true });
const server = await serve(DIST, base);
const browser = await openBrowser();
try {
    for (const locale of LOCALES) {
        const page = await browser.page();
        await page.open(`${server.url}${locale}/`);
        const { data } = await page.send('Page.printToPDF', {
            preferCSSPageSize: true,
            printBackground: true,
            generateTaggedPDF: true,
            generateDocumentOutline: true,
        });
        const file = `${DIST}/cv/ayslla-gomes-${locale}.pdf`;
        await writeFile(file, Buffer.from(data, 'base64'));
        page.close();

        const pages = (Buffer.from(data, 'base64').toString('latin1').match(/\/Type\s*\/Page[^s]/g) ?? []).length;
        console.log(`${file} — ${pages} ${pages === 1 ? 'página' : 'páginas'}`);
    }
} finally {
    await browser.close();
    await server.close();
}
