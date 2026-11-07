import { RenderMode, ServerRoute } from '@angular/ssr';

import { LOCALES } from './data/locales';

/**
 * Páginas geradas no build: uma por idioma (pt/index.html, en/index.html…), já com o conteúdo.
 * O resto (a raiz, que depende do idioma de quem visita) é resolvido no navegador.
 */
export const serverRoutes: ServerRoute[] = [
    ...LOCALES.map(({ path }) => ({ path, renderMode: RenderMode.Prerender as const })),
    { path: '**', renderMode: RenderMode.Client },
];
