import { TestBed } from '@angular/core/testing';

import { SpecializationComponent } from './specialization.component';

describe('SpecializationComponent', () => {
    async function render() {
        const fixture = TestBed.createComponent(SpecializationComponent);
        await fixture.whenStable();
        return fixture;
    }

    it('mostra os anos em ordem decrescente, com a contagem de cursos', async () => {
        const el: HTMLElement = (await render()).nativeElement;

        const anos = Array.from(el.querySelectorAll('.year-number')).map(h => Number(h.textContent));
        expect(anos.length).toBeGreaterThan(1);
        expect(anos).toEqual([...anos].sort((a, b) => b - a));

        expect(el.querySelector('.title')?.textContent).toContain('22 cursos');
        expect(el.querySelector('.year-toggle')?.textContent).toMatch(/2024\s*·\s*1 curso\b/);
    });

    it('expande um ano ao clicar e recolhe o anterior (interação sem zone.js)', async () => {
        const fixture = await render();
        const el: HTMLElement = fixture.nativeElement;

        const botoes = el.querySelectorAll<HTMLButtonElement>('.year-toggle');
        const lista = (i: number) => el.querySelector<HTMLElement>('#' + botoes[i].getAttribute('aria-controls'))!;
        expect(lista(0).hidden).toBe(true);
        expect(botoes[0].getAttribute('aria-expanded')).toBe('false');

        botoes[0].click();
        await fixture.whenStable();
        expect(lista(0).hidden).toBe(false);
        expect(botoes[0].getAttribute('aria-expanded')).toBe('true');

        botoes[1].click();
        await fixture.whenStable();
        expect(lista(0).hidden).toBe(true);
        expect(lista(1).hidden).toBe(false);
        expect(botoes[0].getAttribute('aria-expanded')).toBe('false');
    });

    it('o ano é um botão acessível por teclado', async () => {
        const botao = (await render()).nativeElement.querySelector('.year-toggle') as HTMLButtonElement;
        expect(botao.type).toBe('button');
        expect(botao.tabIndex).toBe(0);
    });
});
