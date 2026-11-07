import { TestBed } from '@angular/core/testing';

import { PersonalProjectsComponent } from './personal-projects.component';

describe('PersonalProjectsComponent', () => {
    it('todo projeto tem o botão "Ver projeto" com link', async () => {
        const fixture = TestBed.createComponent(PersonalProjectsComponent);
        await fixture.whenStable();
        const el: HTMLElement = fixture.nativeElement;

        const cards = Array.from(el.querySelectorAll('.card'));
        expect(cards.length).toBe(fixture.componentInstance.personalProjectsList.length);
        for (const card of cards) {
            const link = card.querySelector('a.btn-primary');
            expect(link?.textContent?.trim(), card.querySelector('.card-title')?.textContent ?? '').toBe('Ver projeto');
            expect(link?.getAttribute('href')).toMatch(/^https:\/\//);
        }
    });

    it('"Ver descrição" mostra e oculta a descrição (interação sem zone.js)', async () => {
        const fixture = TestBed.createComponent(PersonalProjectsComponent);
        await fixture.whenStable();
        const el: HTMLElement = fixture.nativeElement;

        const botao = el.querySelector<HTMLButtonElement>('button.btn-link')!;
        const card = botao.closest('.card')!;
        expect(botao.textContent?.trim()).toBe('Ver descrição');
        expect(card.querySelector('.card-text')).toBeNull();

        botao.click();
        await fixture.whenStable();
        expect(botao.textContent?.trim()).toBe('Ocultar descrição');
        expect(card.querySelector('.card-text')?.textContent?.trim().length).toBeGreaterThan(0);

        botao.click();
        await fixture.whenStable();
        expect(botao.textContent?.trim()).toBe('Ver descrição');
        expect(card.querySelector('.card-text')).toBeNull();
    });
});
