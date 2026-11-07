import { TestBed } from '@angular/core/testing';

import { PersonalProjectsComponent } from './personal-projects.component';

describe('PersonalProjectsComponent', () => {
    it('todo projeto tem o link "Ver código" para o GitHub, em nova aba', async () => {
        const fixture = TestBed.createComponent(PersonalProjectsComponent);
        await fixture.whenStable();
        const el: HTMLElement = fixture.nativeElement;

        const cards = Array.from(el.querySelectorAll('.project'));
        expect(cards.length).toBe(fixture.componentInstance.personalProjectsList.length);
        for (const card of cards) {
            const link = card.querySelector<HTMLAnchorElement>('a.code-link');
            const nome = card.querySelector('.project-name')?.textContent ?? '';
            expect(link?.textContent, nome).toContain('Ver código');
            expect(link?.getAttribute('href'), nome).toMatch(/^https:\/\/github\.com\//);
            expect(link?.rel, nome).toContain('noopener');
        }
    });

    it('"Ler mais" expande e recolhe a descrição (interação sem zone.js)', async () => {
        const fixture = TestBed.createComponent(PersonalProjectsComponent);
        await fixture.whenStable();
        const el: HTMLElement = fixture.nativeElement;

        const botao = el.querySelector<HTMLButtonElement>('.project button')!;
        const descricao = el.querySelector('#' + botao.getAttribute('aria-controls'))!;
        expect(botao.textContent?.trim()).toBe('Ler mais');
        expect(botao.getAttribute('aria-expanded')).toBe('false');
        expect(descricao.classList).toContain('clamped');

        botao.click();
        await fixture.whenStable();
        expect(botao.textContent?.trim()).toBe('Mostrar menos');
        expect(botao.getAttribute('aria-expanded')).toBe('true');
        expect(descricao.classList).not.toContain('clamped');

        botao.click();
        await fixture.whenStable();
        expect(botao.textContent?.trim()).toBe('Ler mais');
        expect(descricao.classList).toContain('clamped');
    });

    it('projeto sem descrição não mostra o botão "Ler mais"', async () => {
        const fixture = TestBed.createComponent(PersonalProjectsComponent);
        await fixture.whenStable();
        const el: HTMLElement = fixture.nativeElement;

        const semDescricao = fixture.componentInstance.personalProjectsList.filter(p => !p.description).length;
        expect(semDescricao).toBeGreaterThan(0);
        expect(el.querySelectorAll('.project button').length)
            .toBe(fixture.componentInstance.personalProjectsList.length - semDescricao);
    });
});
