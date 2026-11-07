import { TestBed } from '@angular/core/testing';

import { SiteHeaderComponent } from './site-header.component';

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
        expect(primeiro?.getAttribute('href')).toBe('#conteudo');
    });
});
