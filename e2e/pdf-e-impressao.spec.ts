import { LOCALES, expect, test } from './fixtures';

test.describe('Currículo em PDF e impressão', () => {
    for (const locale of LOCALES) {
        test(`o botão baixa o PDF de ${locale.path} com nome legível`, async ({ page, request }) => {
            await page.goto(`/curriculum/${locale.path}/`);
            const botao = page.locator('a.btn-cv');

            // O arquivo existe e é um PDF de verdade
            const href = await botao.getAttribute('href');
            expect(href).toBe(`cv/ayslla-gomes-${locale.path}.pdf`);
            const resposta = await request.get(`/curriculum/${href}`);
            expect(resposta.status()).toBe(200);
            expect(resposta.headers()['content-type']).toBe('application/pdf');
            expect((await resposta.body()).subarray(0, 5).toString()).toBe('%PDF-');

            // O clique baixa com o nome do idioma
            const [download] = await Promise.all([page.waitForEvent('download'), botao.click()]);
            expect(download.suggestedFilename()).toBe(locale.cvFile);
        });
    }

    test('na impressão: sem menu e botões, com o contato escrito e 2 projetos', async ({ page }) => {
        await page.goto('/curriculum/pt/');
        await page.emulateMedia({ media: 'print' });

        await expect(page.locator('.site-header')).toBeHidden();
        await expect(page.locator('.hero .actions')).toBeHidden();
        await expect(page.locator('#contato')).toBeHidden();
        await expect(page.locator('.contact-line')).toBeVisible();
        await expect(page.locator('.contact-line')).toContainText('linkedin.com/in/ayslla-gomes');
        await expect(page.locator('.project:visible')).toHaveCount(2);
        await expect(page.locator('.full-list')).toBeVisible();
        await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(255, 255, 255)');
    });

    test('foto no papel conforme o idioma: com foto em português, sem foto em inglês', async ({ page }) => {
        await page.emulateMedia({ media: 'print' });

        await page.goto('/curriculum/pt/');
        await expect(page.locator('.photo-wrap')).toBeVisible();

        await page.goto('/curriculum/en/');
        await expect(page.locator('.photo-wrap')).toBeHidden();
    });
});
