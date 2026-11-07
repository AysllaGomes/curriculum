import { inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

import { LOCALE, RESUME } from './resume';
import { LOCALES, SITE_URL, localeUrl } from './locales';

/**
 * Preenche o <head> da página do idioma atual. Roda no build (pré-render), então tudo isso
 * já chega pronto no HTML para buscadores e para a prévia de links (LinkedIn, WhatsApp, Slack…):
 * - `lang`, título da aba e descrição;
 * - Open Graph / Twitter: título, descrição, imagem 1200×630 do idioma;
 * - `canonical` e `hreflang` ligando as 4 versões (e a raiz como `x-default`).
 * Precisa ser chamada dentro de um construtor (usa `inject`).
 */
export function updateHead(): void {
    const doc = inject(DOCUMENT);
    const meta = inject(Meta);
    const locale = inject(LOCALE);
    const profile = inject(RESUME).profile;
    const current = LOCALES.find(o => o.locale === locale) ?? LOCALES[0];
    const title = `${profile.shortName} · ${profile.role}`;
    const url = localeUrl(current);

    doc.documentElement.lang = locale;
    inject(Title).setTitle(title);

    meta.updateTag({ name: 'description', content: profile.headline });
    meta.updateTag({ property: 'og:type', content: 'profile' });
    meta.updateTag({ property: 'og:site_name', content: profile.shortName });
    meta.updateTag({ property: 'og:title', content: title });
    meta.updateTag({ property: 'og:description', content: profile.headline });
    meta.updateTag({ property: 'og:url', content: url });
    meta.updateTag({ property: 'og:locale', content: current.ogLocale });
    meta.updateTag({ property: 'og:image', content: `${SITE_URL}assets/og/${current.path}.jpg` });
    meta.updateTag({ property: 'og:image:width', content: '1200' });
    meta.updateTag({ property: 'og:image:height', content: '630' });
    meta.updateTag({ property: 'og:image:alt', content: title });
    meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

    doc.head.querySelectorAll('link[rel="canonical"], link[rel="alternate"][hreflang]').forEach(l => l.remove());
    const link = (attrs: Record<string, string>) => {
        const el = doc.createElement('link');
        for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
        doc.head.appendChild(el);
    };
    link({ rel: 'canonical', href: url });
    for (const option of LOCALES) link({ rel: 'alternate', hreflang: option.locale, href: localeUrl(option) });
    link({ rel: 'alternate', hreflang: 'x-default', href: SITE_URL });
}
