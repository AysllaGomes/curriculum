import { InjectionToken, Provider, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Locale } from '../shared/models/resume.model';
import { LOCALE, RESUME, RESUMES } from './resume';
import { ALL_LABELS, LABELS } from './labels';

export interface LocaleOption {
    locale: Locale;
    /** Caminho da página: /curriculum/pt, /curriculum/en… */
    path: string;
    /** Sigla mostrada no botão do seletor */
    code: string;
    /** Nome do idioma escrito no próprio idioma */
    name: string;
    /** Formato do Open Graph (prévia de links no LinkedIn, WhatsApp…) */
    ogLocale: string;
}

/** Idiomas do site, na ordem do seletor. O primeiro é o padrão. */
export const LOCALES: readonly LocaleOption[] = [
    { locale: 'pt-BR', path: 'pt', code: 'PT', name: 'Português', ogLocale: 'pt_BR' },
    { locale: 'en', path: 'en', code: 'EN', name: 'English', ogLocale: 'en_US' },
    { locale: 'es', path: 'es', code: 'ES', name: 'Español', ogLocale: 'es_ES' },
    { locale: 'it', path: 'it', code: 'IT', name: 'Italiano', ogLocale: 'it_IT' },
];

/**
 * Endereço público do site. Buscadores e prévias de links exigem endereços completos.
 * Ao trocar de domínio, mude aqui e em src/sitemap.xml.
 */
export const SITE_URL = 'https://aysllagomes.github.io/curriculum/';

/**
 * Endereço público da página de um idioma. Com barra no fim: é o endereço que o GitHub Pages
 * serve (pt/index.html) — sem a barra ele responde com um redirecionamento.
 */
export function localeUrl(option: LocaleOption): string {
    return `${SITE_URL}${option.path}/`;
}

/** Troca idioma, conteúdo e textos da interface para tudo que estiver dentro da rota. */
export function provideLocale(locale: Locale): Provider[] {
    return [
        { provide: LOCALE, useValue: locale },
        { provide: RESUME, useValue: RESUMES[locale] },
        { provide: LABELS, useValue: ALL_LABELS[locale] },
    ];
}

const STORAGE_KEY = 'idioma';

/**
 * Onde a escolha do seletor fica guardada (localStorage do navegador).
 * Nulo quando o navegador bloqueia o armazenamento: aí a escolha só não é lembrada.
 */
export const LOCALE_STORAGE = new InjectionToken<Pick<Storage, 'getItem' | 'setItem'> | null>('LOCALE_STORAGE', {
    providedIn: 'root',
    factory: () => {
        try {
            return inject(DOCUMENT).defaultView?.localStorage ?? null;
        } catch {
            return null;
        }
    },
});

/**
 * Idioma de quem chega pelo endereço sem idioma (/curriculum/):
 * o escolhido antes no seletor; senão o primeiro idioma do navegador que o site tem; senão português.
 */
export function preferredLocale(saved: string | null, browserLanguages: readonly string[]): LocaleOption {
    const bySaved = LOCALES.find(o => o.locale === saved);
    const byBrowser = browserLanguages
        .map(tag => LOCALES.find(o => o.path === tag.toLowerCase().split('-')[0]))
        .find(o => !!o);
    return bySaved ?? byBrowser ?? LOCALES[0];
}

/** Usado pelas rotas: `/` e endereços desconhecidos vão para a página do idioma preferido. */
export function redirectToPreferredLocale(): string {
    const saved = safely(() => inject(LOCALE_STORAGE)?.getItem(STORAGE_KEY) ?? null);
    const browserLanguages = inject(DOCUMENT).defaultView?.navigator.languages ?? [];
    return `/${preferredLocale(saved, browserLanguages).path}`;
}

/** Guarda a escolha feita no seletor para as próximas visitas. */
export function rememberLocale(storage: Pick<Storage, 'setItem'> | null, locale: Locale): void {
    safely(() => storage?.setItem(STORAGE_KEY, locale));
}

/** O navegador pode recusar o acesso ao armazenamento a qualquer momento (cota, modo privado) */
function safely<T>(fn: () => T): T | null {
    try {
        return fn();
    } catch {
        return null;
    }
}

/**
 * Caminho da página atual (ex.: /curriculum/en). Links para seções usam `${PAGE_PATH}#id`:
 * um `#id` sozinho seria resolvido a partir do <base href> e levaria para /curriculum/#id, outra página.
 */
export const PAGE_PATH = new InjectionToken<string>('PAGE_PATH', {
    providedIn: 'root',
    factory: () => inject(DOCUMENT).location.pathname,
});
