import { LOCALES, expect, test } from './fixtures';

test.describe('Idiomas', () => {
    for (const locale of LOCALES) {
        test(`/${locale.path}/ abre em ${locale.lang}, sem erros`, async ({ page, errors }) => {
            await page.goto(`/curriculum/${locale.path}/`);

            await expect(page.locator('html')).toHaveAttribute('lang', locale.lang);
            await expect(page).toHaveTitle(`Ayslla Gomes · ${locale.role}`);
            await expect(page.getByRole('heading', { level: 1 })).toHaveText('Ayslla Gomes');
            await expect(page.getByRole('heading', { name: locale.about })).toBeVisible();
            // O Angular assumiu a página gerada no build (hidratação) sem reclamar
            await expect(page.locator('app-root')).toHaveAttribute('ng-version', /.+/);
            expect(errors).toEqual([]);
        });
    }

    test('a raiz leva ao idioma do navegador', async ({ browser }) => {
        const context = await browser.newContext({ locale: 'es-AR' });
        const page = await context.newPage();
        await page.goto('/curriculum/');

        await expect(page).toHaveURL(/\/curriculum\/es\/?$/);
        await expect(page.locator('html')).toHaveAttribute('lang', 'es');
        await context.close();
    });

    test('o seletor troca de idioma e a escolha vale nas próximas visitas', async ({ page }) => {
        await page.goto('/curriculum/pt/');
        await page.locator('.lang-toggle').click();
        await page.locator('#menu-idiomas a[hreflang="it"]').click();

        await expect(page).toHaveURL(/\/curriculum\/it\/?$/);
        await expect(page.locator('html')).toHaveAttribute('lang', 'it');

        // Navegador em português, mas a escolha guardada vale mais
        await page.goto('/curriculum/');
        await expect(page).toHaveURL(/\/curriculum\/it\/?$/);
    });

    test('endereço sem a barra final é redirecionado para a página do idioma (como no GitHub Pages)', async ({ page }) => {
        const response = await page.goto('/curriculum/en');

        // O servidor manda para /curriculum/en/ (a página gerada no build); depois o Angular mostra o endereço sem a barra
        expect(response?.request().redirectedFrom()?.url()).toMatch(/\/curriculum\/en$/);
        expect(response?.url()).toMatch(/\/curriculum\/en\/$/);
        await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    });

    test('endereço que não existe responde 404 e leva ao idioma preferido', async ({ page }) => {
        const response = await page.goto('/curriculum/pagina-que-nao-existe');

        expect(response?.status()).toBe(404);
        await expect(page).toHaveURL(/\/curriculum\/pt\/?$/);
        await expect(page.getByRole('heading', { name: 'Sobre mim' })).toBeVisible();
    });
});
