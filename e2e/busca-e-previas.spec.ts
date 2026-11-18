import { LOCALES, expect, test } from './fixtures';

const SITE = 'https://aysllagomes.dev/';

test.describe('Google e prévia de links', () => {
    for (const locale of LOCALES) {
        test(`${locale.path}: descrição, canonical, hreflang, Open Graph e dados estruturados`, async ({ page, request }) => {
            await page.goto(`/${locale.path}/`);
            const head = page.locator('head');

            const description = await head.locator('meta[name="description"]').getAttribute('content') ?? '';
            expect(description.length).toBeGreaterThanOrEqual(100);
            expect(description.length).toBeLessThanOrEqual(160);

            await expect(head.locator('link[rel="canonical"]')).toHaveAttribute('href', `${SITE}${locale.path}/`);
            await expect(head.locator('link[rel="alternate"][hreflang]')).toHaveCount(LOCALES.length + 1);
            await expect(head.locator('meta[name="google-site-verification"]')).toHaveCount(1);

            // A imagem de prévia do idioma existe no build
            const ogImage = await head.locator('meta[property="og:image"]').getAttribute('content') ?? '';
            expect(ogImage).toBe(`${SITE}assets/og/${locale.path}.jpg`);
            expect((await request.get(ogImage.replace(SITE, '/'))).status()).toBe(200);

            // Um único bloco de dados estruturados, JSON válido, no idioma da página
            const blocos = head.locator('script[type="application/ld+json"]');
            await expect(blocos).toHaveCount(1);
            const dados = JSON.parse(await blocos.textContent() ?? '');
            expect(dados['@type']).toBe('ProfilePage');
            expect(dados.inLanguage).toBe(locale.lang);
            expect(dados.mainEntity.jobTitle).toBe(locale.role);
        });
    }

    test('o sitemap lista as 4 páginas', async ({ request }) => {
        const xml = await (await request.get('/sitemap.xml')).text();
        for (const locale of LOCALES) expect(xml).toContain(`<loc>${SITE}${locale.path}/</loc>`);
    });

    test('estatísticas: o contador é carregado no navegador, mas não vem no HTML do build', async ({ page, request }) => {
        const html = await (await request.get('/pt/')).text();
        expect(html).not.toContain('goatcounter');

        await page.route('**/gc.zgo.at/**', route => route.fulfill({ contentType: 'text/javascript', body: '' }));
        await page.goto('/pt/');
        await expect(page.locator('script[data-goatcounter]')).toHaveAttribute('data-goatcounter', 'https://ayslla-gomes.goatcounter.com/count');
    });
});
