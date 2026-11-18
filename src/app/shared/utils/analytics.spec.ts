import { ApplicationInitStatus, PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ANALYTICS_CODE, GOATCOUNTER_CODE, provideAnalytics, trackEvent } from './analytics';

describe('Estatísticas de visita (GoatCounter)', () => {
    const contador = () => document.head.querySelector<HTMLScriptElement>('script[src="https://gc.zgo.at/count.js"]');

    async function iniciar(code: string, platform = 'browser') {
        TestBed.configureTestingModule({
            providers: [provideAnalytics(), { provide: ANALYTICS_CODE, useValue: code }, { provide: PLATFORM_ID, useValue: platform }],
        });
        await TestBed.inject(ApplicationInitStatus).donePromise;
    }

    afterEach(() => contador()?.remove());

    it('ligadas na conta do site', () => {
        expect(GOATCOUNTER_CODE).toBe('ayslla-gomes');
    });

    it('sem código, desligadas: nada de terceiros é carregado', async () => {
        await iniciar('');
        expect(contador()).toBeNull();
    });

    it('com o código, carrega o contador apontando para o painel da conta', async () => {
        await iniciar('ayslla');
        expect(contador()?.dataset['goatcounter']).toBe('https://ayslla.goatcounter.com/count');
        expect(contador()?.async).toBe(true);
    });

    it('nunca no pré-render do build', async () => {
        await iniciar('ayslla', 'server');
        expect(contador()).toBeNull();
    });

    it('conta o evento quando o contador existe e não quebra quando não existe', () => {
        const count = vi.fn();
        const doc = { defaultView: { goatcounter: { count } } } as unknown as Document;

        trackEvent(doc, 'pdf-pt', 'Baixar currículo (PDF)');
        expect(count).toHaveBeenCalledWith({ path: 'pdf-pt', title: 'Baixar currículo (PDF)', event: true });

        expect(() => trackEvent({ defaultView: {} } as unknown as Document, 'pdf-pt')).not.toThrow();
        expect(() => trackEvent({ defaultView: { goatcounter: { count: () => { throw new Error('x'); } } } } as unknown as Document, 'pdf-pt'))
            .not.toThrow();
    });
});
