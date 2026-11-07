import { TestBed } from '@angular/core/testing';

import { SpecializationComponent } from './specialization.component';

describe('SpecializationComponent', () => {
    it('mostra os anos em ordem decrescente', async () => {
        const fixture = TestBed.createComponent(SpecializationComponent);
        await fixture.whenStable();

        const anos = Array.from(fixture.nativeElement.querySelectorAll('h6') as NodeListOf<Element>)
            .map(h => Number(h.textContent));

        expect(anos.length).toBeGreaterThan(1);
        expect(anos).toEqual([...anos].sort((a, b) => b - a));
    });

    it('expande um ano ao clicar e recolhe o anterior (interação sem zone.js)', async () => {
        const fixture = TestBed.createComponent(SpecializationComponent);
        await fixture.whenStable();
        const el: HTMLElement = fixture.nativeElement;

        const botoes = el.querySelectorAll<HTMLButtonElement>('h6 > button');
        const listas = el.querySelectorAll('.timeline-item > ul');
        expect(listas[0].classList).toContain('d-none');
        expect(botoes[0].getAttribute('aria-expanded')).toBe('false');

        botoes[0].click();
        await fixture.whenStable();
        expect(listas[0].classList).not.toContain('d-none');
        expect(botoes[0].getAttribute('aria-expanded')).toBe('true');

        botoes[1].click();
        await fixture.whenStable();
        expect(listas[0].classList).toContain('d-none');
        expect(listas[1].classList).not.toContain('d-none');
        expect(botoes[0].getAttribute('aria-expanded')).toBe('false');
    });

    it('o ano é um botão acessível por teclado', async () => {
        const fixture = TestBed.createComponent(SpecializationComponent);
        await fixture.whenStable();

        const botao = fixture.nativeElement.querySelector('h6 > button') as HTMLButtonElement;
        expect(botao.type).toBe('button');
        expect(botao.tabIndex).toBe(0);
    });
});
