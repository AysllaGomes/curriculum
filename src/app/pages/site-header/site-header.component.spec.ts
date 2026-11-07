import { TestBed } from '@angular/core/testing';

import { SiteHeaderComponent } from './site-header.component';
import { LOCALE_STORAGE, provideLocale } from '../../data/locales';

describe('SiteHeaderComponent', () => {
    it('botão "Menu" abre e fecha o menu no celular, e clicar num link fecha', async () => {
        const fixture = TestBed.createComponent(SiteHeaderComponent);
        await fixture.whenStable();
        const el: HTMLElement = fixture.nativeElement;

        const botao = el.querySelector<HTMLButtonElement>('.menu-toggle')!;
        const nav = el.querySelector<HTMLElement>('#' + botao.getAttribute('aria-controls'))!;
        expect(botao.getAttribute('aria-expanded')).toBe('false');
        expect(nav.classList).not.toContain('open');

        botao.click();
        await fixture.whenStable();
        expect(botao.getAttribute('aria-expanded')).toBe('true');
        expect(nav.classList).toContain('open');

        nav.querySelector('a')!.dispatchEvent(new MouseEvent('click', { cancelable: true }));
        await fixture.whenStable();
        expect(nav.classList).not.toContain('open');
    });

    it('tem o link "Pular para o conteúdo" como primeiro elemento', async () => {
        const fixture = TestBed.createComponent(SiteHeaderComponent);
        await fixture.whenStable();

        const primeiro = (fixture.nativeElement as HTMLElement).querySelector('a');
        expect(primeiro?.textContent?.trim()).toBe('Pular para o conteúdo');
        expect(primeiro?.getAttribute('href')).toMatch(/\/#conteudo$/);
    });

    it('seletor de idioma: 4 idiomas, cada um com seu endereço, e o atual marcado', async () => {
        const fixture = TestBed.createComponent(SiteHeaderComponent);
        await fixture.whenStable();
        const el: HTMLElement = fixture.nativeElement;

        const botao = el.querySelector<HTMLButtonElement>('.lang-toggle')!;
        expect(botao.textContent?.replace(/\s+/g, ' ').trim()).toBe('Idioma: PT');
        expect(el.querySelector('#' + botao.getAttribute('popovertarget'))).not.toBeNull();

        const opcoes = Array.from(el.querySelectorAll<HTMLAnchorElement>('.lang-menu a'));
        expect(opcoes.map(a => a.getAttribute('href'))).toEqual(['pt', 'en', 'es', 'it']);
        expect(opcoes.map(a => a.getAttribute('lang'))).toEqual(['pt-BR', 'en', 'es', 'it']);
        expect(opcoes.filter(a => a.getAttribute('aria-current') === 'page').map(a => a.getAttribute('lang'))).toEqual(['pt-BR']);
    });

    it('em outro idioma, botão, menu e marcação acompanham', async () => {
        TestBed.configureTestingModule({ providers: provideLocale('it') });
        const fixture = TestBed.createComponent(SiteHeaderComponent);
        await fixture.whenStable();
        const el: HTMLElement = fixture.nativeElement;

        expect(el.querySelector('.lang-toggle')?.textContent?.replace(/\s+/g, ' ').trim()).toBe('Lingua: IT');
        expect(el.querySelector('.menu-toggle')?.textContent?.trim()).toBe('Menu');
        expect(el.querySelector('nav a')?.textContent?.trim()).toBe('Esperienza');
        expect(el.querySelector('[aria-current="page"]')?.getAttribute('lang')).toBe('it');
    });

    it('escolher um idioma fica guardado para a próxima visita', async () => {
        const guardado = new Map<string, string>();
        TestBed.configureTestingModule({
            providers: [{ provide: LOCALE_STORAGE, useValue: { getItem: (k: string) => guardado.get(k) ?? null, setItem: (k: string, v: string) => guardado.set(k, v) } }],
        });
        const fixture = TestBed.createComponent(SiteHeaderComponent);
        await fixture.whenStable();
        const ingles = (fixture.nativeElement as HTMLElement).querySelector<HTMLAnchorElement>('.lang-menu a[lang="en"]')!;

        ingles.addEventListener('click', e => e.preventDefault()); // o jsdom não troca de página
        ingles.dispatchEvent(new MouseEvent('click', { cancelable: true }));
        expect(guardado.get('idioma')).toBe('en');
    });

    it('navegador sem armazenamento: escolher um idioma não quebra nada', async () => {
        TestBed.configureTestingModule({
            providers: [{ provide: LOCALE_STORAGE, useValue: { getItem: () => null, setItem: () => { throw new Error('QuotaExceeded'); } } }],
        });
        const fixture = TestBed.createComponent(SiteHeaderComponent);
        await fixture.whenStable();
        const ingles = (fixture.nativeElement as HTMLElement).querySelector<HTMLAnchorElement>('.lang-menu a[lang="en"]')!;

        ingles.addEventListener('click', e => e.preventDefault());
        expect(() => ingles.dispatchEvent(new MouseEvent('click', { cancelable: true }))).not.toThrow();
    });
});
