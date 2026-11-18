import AxeBuilder from '@axe-core/playwright';
import type { Page } from '@playwright/test';
import { expect, LOCALES, test } from './fixtures';

/**
 * Acessibilidade com o axe-core (o mesmo motor do Lighthouse e do DevTools): regras WCAG 2.2 A e AA,
 * em cada idioma, nos temas claro e escuro, no computador e no celular. Contraste de cores entra aqui:
 * uma cor nova que fique ilegível em um dos temas quebra o build.
 */
async function analisar(page: Page) {
    const { violations } = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'])
        .analyze();
    // Mensagem legível no relatório: regra, o que diz e onde aparece
    return violations.map(v => `${v.id} (${v.impact}): ${v.help}\n${v.nodes.map(n => `  ${n.target.join(' ')}`).join('\n')}`);
}

test.describe('acessibilidade', () => {
    for (const locale of LOCALES) {
        for (const tema of ['light', 'dark'] as const) {
            test(`${locale.path}, tema ${tema === 'light' ? 'claro' : 'escuro'}`, async ({ page, errors }) => {
                await page.emulateMedia({ colorScheme: tema });
                await page.goto(`/${locale.path}/`);
                await expect(page.locator('html')).toHaveAttribute('lang', locale.lang);
                expect(await analisar(page)).toEqual([]);
                expect(errors).toEqual([]);
            });
        }
    }

    test('menu aberto no celular', async ({ page, isMobile }) => {
        test.skip(!isMobile, 'o menu só fica atrás de um botão no celular');
        await page.goto('/pt/');
        await page.locator('.menu-toggle').click();
        await expect(page.locator('.menu-toggle')).toHaveAttribute('aria-expanded', 'true');
        expect(await analisar(page)).toEqual([]);
    });

    test('página não encontrada', async ({ page }) => {
        await page.goto('/pt/nao-existe');
        expect(await analisar(page)).toEqual([]);
    });
});
