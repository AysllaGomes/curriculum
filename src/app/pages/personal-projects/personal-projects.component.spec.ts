import { TestBed } from '@angular/core/testing';

import { PersonalProjectsComponent } from './personal-projects.component';
import { RESUME } from '../../data/resume';
import { RESUME_PT_BR } from '../../data/pt-BR';
import { provideLocale } from '../../data/locales';

describe('PersonalProjectsComponent', () => {
    async function render(): Promise<HTMLElement> {
        const fixture = TestBed.createComponent(PersonalProjectsComponent);
        await fixture.whenStable();
        return fixture.nativeElement;
    }

    it('mostra os projetos do GitHub na ordem definida, com nome legível e descrição', async () => {
        const el = await render();
        const nomes = Array.from(el.querySelectorAll('.project-name')).map(e => e.textContent?.trim());

        expect(nomes.slice(0, 2)).toEqual(['Figma Context Cache MCP', 'Pet Health API']);
        expect(el.querySelector('.project .description')?.textContent).toContain('Servidor MCP');
        expect(el.querySelector('.project .language')?.textContent?.trim()).toBe('TypeScript');
    });

    it('todo projeto tem o link "Ver código" para o GitHub, em nova aba', async () => {
        const el = await render();
        const cards = Array.from(el.querySelectorAll('.project'));

        expect(cards.length).toBeGreaterThan(0);
        for (const card of cards) {
            const link = card.querySelector<HTMLAnchorElement>('a.code-link');
            const nome = card.querySelector('.project-name')?.textContent ?? '';
            expect(link?.textContent, nome).toContain('Ver código');
            expect(link?.getAttribute('href'), nome).toMatch(/^https:\/\/github\.com\//);
            expect(link?.rel, nome).toContain('noopener');
        }
    });

    it('"Ver demo" e tópicos só aparecem quando o repositório tem', async () => {
        TestBed.overrideProvider(RESUME, {
            useValue: {
                ...RESUME_PT_BR,
                projects: [
                    { name: 'Com Demo', url: 'https://github.com/x/a', homepage: 'https://x.github.io/a/', topics: ['angular', 'a11y'] },
                    { name: 'Sem Demo', url: 'https://github.com/x/b', topics: [] },
                ],
            },
        });
        const cards = Array.from((await render()).querySelectorAll('.project'));

        expect(cards[0].querySelector('a.demo-link')?.getAttribute('href')).toBe('https://x.github.io/a/');
        expect(Array.from(cards[0].querySelectorAll('.topics .chip')).map(c => c.textContent?.trim())).toEqual(['angular', 'a11y']);
        expect(cards[1].querySelector('a.demo-link')).toBeNull();
        expect(cards[1].querySelector('.topics')).toBeNull();
        expect(cards[1].querySelector('.description')).toBeNull();
    });

    it('descrição e links no idioma da página', async () => {
        TestBed.configureTestingModule({ providers: provideLocale('it') });
        const el = await render();

        expect(el.querySelector('.project .description')?.textContent).toContain('Server MCP');
        expect(el.querySelector('a.code-link')?.textContent).toContain('Vedi codice');
    });
});
