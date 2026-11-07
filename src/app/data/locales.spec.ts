import { TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { LOCALES, LOCALE_STORAGE, preferredLocale } from './locales';
import { ALL_LABELS } from './labels';
import { routes } from '../app.routes';

describe('Idioma de quem chega sem idioma no endereço', () => {
    it('a escolha guardada no seletor vale mais que o navegador', () => {
        expect(preferredLocale('it', ['en-US']).path).toBe('it');
    });

    it('senão, o primeiro idioma do navegador que o site tem', () => {
        expect(preferredLocale(null, ['de-DE', 'es-AR', 'en']).path).toBe('es');
        expect(preferredLocale(null, ['pt-PT']).path).toBe('pt');
        expect(preferredLocale(null, ['EN-gb']).path).toBe('en');
    });

    it('senão (ou com valor guardado inválido), português', () => {
        expect(preferredLocale(null, ['de', 'fr']).path).toBe('pt');
        expect(preferredLocale('xx', []).path).toBe('pt');
    });
});

describe('Rotas por idioma', () => {
    async function navegar(url: string, guardado: string | null = null) {
        TestBed.configureTestingModule({
            providers: [
                provideRouter(routes),
                { provide: LOCALE_STORAGE, useValue: { getItem: () => guardado, setItem: () => undefined } },
            ],
        });
        const harness = await RouterTestingHarness.create();
        await harness.navigateByUrl(url);
        return { harness };
    }

    it.each(LOCALES.map(o => [o.path, o.locale] as const))('/%s mostra a página em %s', async (path, locale) => {
        const { harness } = await navegar(`/${path}`);
        expect(harness.routeNativeElement?.textContent).toContain(ALL_LABELS[locale].about.title);
    });

    it('/ e endereços desconhecidos vão para o idioma preferido', async () => {
        const { harness } = await navegar('/', 'es');
        expect(TestBed.inject(Location).path()).toBe('/es');
        expect(harness.routeNativeElement?.textContent).toContain('Sobre mí');

        await harness.navigateByUrl('/fr/qualquer-coisa');
        expect(TestBed.inject(Location).path()).toBe('/es');
    });
});
