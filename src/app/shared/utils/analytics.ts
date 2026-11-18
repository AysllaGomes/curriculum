import { InjectionToken, PLATFORM_ID, inject, provideAppInitializer } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

/**
 * Estatísticas de visita com o GoatCounter (https://www.goatcounter.com): gratuito para uso pessoal,
 * sem cookies e sem banner de consentimento. Conta as visitas a cada página e os cliques no botão do PDF.
 *
 * Para ligar: crie a conta (o "código" é o começo do endereço do painel: <código>.goatcounter.com)
 * e coloque-o em GOATCOUNTER_CODE. Vazio = desligado: o site não carrega nada de terceiros.
 * Visitas a partir de localhost não são contadas (padrão do GoatCounter).
 */
export const GOATCOUNTER_CODE = 'ayslla-gomes';

export const ANALYTICS_CODE = new InjectionToken<string>('ANALYTICS_CODE', {
    providedIn: 'root',
    factory: () => GOATCOUNTER_CODE,
});

interface GoatCounter {
    count(vars: { path: string; title?: string; event?: boolean }): void;
}

/** Carrega o contador só no navegador (nunca no pré-render do build) e só com o código preenchido. */
export function provideAnalytics() {
    return provideAppInitializer(() => {
        const code = inject(ANALYTICS_CODE);
        if (!code || !isPlatformBrowser(inject(PLATFORM_ID))) return;

        const doc = inject(DOCUMENT);
        const script = doc.createElement('script');
        script.async = true;
        script.src = 'https://gc.zgo.at/count.js';
        script.dataset['goatcounter'] = `https://${code}.goatcounter.com/count`;
        doc.head.appendChild(script);
    });
}

/**
 * Registra um evento (ex.: `pdf-pt` quando alguém baixa o currículo em português).
 * Sem o contador carregado (desligado, bloqueado pelo navegador ou ainda carregando), não faz nada.
 */
export function trackEvent(doc: Document, path: string, title?: string): void {
    const counter = (doc.defaultView as (Window & { goatcounter?: Partial<GoatCounter> }) | null)?.goatcounter;
    try {
        counter?.count?.({ path, title, event: true });
    } catch {
        // estatística nunca atrapalha o download
    }
}
