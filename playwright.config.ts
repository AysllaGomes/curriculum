import { defineConfig, devices } from '@playwright/test';

/**
 * Testes de ponta a ponta: o site já gerado pelo build (npm run build:pages), servido como no GitHub Pages
 * (scripts/serve.mjs), num Chrome de verdade — no computador e no celular.
 * Usa o Chrome instalado (no GitHub Actions, o que já vem no ubuntu-latest): nada de navegador baixado.
 *
 *   npm run build:pages   → gera o site como vai para o ar
 *   npm run e2e           → roda os testes (relatório em playwright-report/ se algo falhar)
 */
const PORT = 4300;

export default defineConfig({
    testDir: 'e2e',
    fullyParallel: true,
    forbidOnly: !!process.env['CI'],
    retries: process.env['CI'] ? 1 : 0,
    reporter: process.env['CI'] ? [['list'], ['html', { open: 'never' }]] : [['list']],
    use: {
        baseURL: `http://127.0.0.1:${PORT}`,
        channel: 'chrome',
        locale: 'pt-BR',
        trace: 'retain-on-failure',
    },
    projects: [
        { name: 'computador', use: { ...devices['Desktop Chrome'], channel: 'chrome' } },
        { name: 'celular', use: { ...devices['Pixel 7'], channel: 'chrome' } },
    ],
    webServer: {
        command: `node scripts/serve.mjs ${PORT}`,
        url: `http://127.0.0.1:${PORT}/`,
        reuseExistingServer: !process.env['CI'],
    },
});
