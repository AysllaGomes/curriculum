import { LOCALES, expect, test } from './fixtures';

test.describe('Navegação e aparência', () => {
    test('os links do menu levam às seções', async ({ page, isMobile }) => {
        await page.goto('/pt/');
        const toggle = page.locator('.menu-toggle');

        if (isMobile) {
            // No celular, o menu fica atrás do botão "Menu" e fecha depois do clique
            await expect(toggle).toBeVisible();
            await toggle.click();
            await expect(toggle).toHaveAttribute('aria-expanded', 'true');
        } else {
            await expect(toggle).toBeHidden();
        }

        await page.locator('#menu-principal').getByRole('link', { name: 'Experiência' }).click();
        await expect(page).toHaveURL(/#experiencia$/);
        await expect(page.getByRole('heading', { name: 'Experiência', level: 2 })).toBeInViewport();
        if (isMobile) await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    });

    test('o tema muda no botão e continua escolhido ao voltar', async ({ browser }) => {
        const context = await browser.newContext({ colorScheme: 'dark' });
        const page = await context.newPage();
        await page.route('**/gc.zgo.at/**', route => route.fulfill({ contentType: 'text/javascript', body: '' }));
        await page.goto('/pt/');
        const html = page.locator('html');
        const fundo = () => page.evaluate(() => getComputedStyle(document.body).backgroundColor);

        const escuro = await fundo();
        await page.locator('.theme-toggle').click();
        await expect(html).toHaveAttribute('data-theme', 'light');
        expect(await fundo()).not.toBe(escuro);

        await page.reload();
        await expect(html).toHaveAttribute('data-theme', 'light');
        await context.close();
    });

    for (const locale of LOCALES) {
        test(`nada sai da tela na largura da página (${locale.path})`, async ({ page }) => {
            await page.goto(`/${locale.path}/`);
            const sobra = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
            expect(sobra).toBe(0);
        });
    }

    test('experiências com resumo, destaques e a empresa anterior no mesmo cartão', async ({ page }) => {
        await page.goto('/pt/');
        const cartoes = page.locator('.experience');

        await expect(cartoes).toHaveCount(4);
        await expect(cartoes.first()).toHaveClass(/current/);
        await expect(cartoes.nth(1).locator('.earlier')).toContainText('EngeSoftware Tecnologia');
        await expect(cartoes.first().locator('.highlights li')).toHaveCount(4);
    });
});
