import { test as base, expect } from '@playwright/test';

/**
 * Base de todos os testes:
 * - o contador de visitas (GoatCounter) é trocado por um arquivo vazio: os testes nunca contam como visita;
 * - erros de JavaScript e do console são guardados em `errors` (cada teste confere que não houve nenhum).
 */
export const test = base.extend<{ errors: string[] }>({
    errors: async ({ page }, use) => {
        const errors: string[] = [];
        await page.route('**/gc.zgo.at/**', route => route.fulfill({ contentType: 'text/javascript', body: '' }));
        page.on('pageerror', e => errors.push(e.message));
        page.on('console', msg => {
            // Falha de rede de imagem externa (sem internet) não é erro do site
            if (msg.type() === 'error' && !msg.text().startsWith('Failed to load resource')) errors.push(msg.text());
        });
        await use(errors);
    },
});

export { expect };

/** Os 4 idiomas: caminho, `lang` da página e o título da seção "Sobre". */
export const LOCALES = [
    { path: 'pt', lang: 'pt-BR', about: 'Sobre mim', role: 'Arquiteta Front-end', cvFile: 'Ayslla Gomes - Currículo.pdf' },
    { path: 'en', lang: 'en', about: 'About me', role: 'Front-end Architect', cvFile: 'Ayslla Gomes - Resume.pdf' },
    { path: 'es', lang: 'es', about: 'Sobre mí', role: 'Arquitecta Front-end', cvFile: 'Ayslla Gomes - CV.pdf' },
    { path: 'it', lang: 'it', about: 'Chi sono', role: 'Architetta Front-end', cvFile: 'Ayslla Gomes - CV.pdf' },
] as const;
