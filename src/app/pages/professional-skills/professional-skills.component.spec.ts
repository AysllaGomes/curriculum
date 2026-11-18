import { TestBed } from '@angular/core/testing';

import { ProfessionalSkillsComponent } from './professional-skills.component';
import { provideLocale } from '../../data/locales';
import { RESUME_PT_BR } from '../../data/pt-BR';

describe('ProfessionalSkillsComponent', () => {
    async function render(locale: 'pt-BR' | 'es' = 'pt-BR'): Promise<HTMLElement> {
        TestBed.configureTestingModule({ providers: provideLocale(locale) });
        const fixture = TestBed.createComponent(ProfessionalSkillsComponent);
        await fixture.whenStable();
        return fixture.nativeElement;
    }

    it('um bloco por grupo, na ordem dos dados, com todas as competências', async () => {
        const el = await render();
        const grupos = Array.from(el.querySelectorAll('.group'));

        expect(grupos.map(g => g.querySelector('.group-title')?.textContent?.trim()))
            .toEqual(['Arquitetura', 'Back-end', 'Front-end', 'Dados', 'DevOps']);
        expect(grupos.map(g => g.querySelectorAll('.chip').length)).toEqual(RESUME_PT_BR.skillGroups.map(g => g.skills.length));
        expect(el.textContent).toContain('Grafana');
        expect(el.textContent).not.toContain('Grafeno');
    });

    it('título dos grupos traduzido, competências iguais', async () => {
        const el = await render('es');
        expect(el.querySelector('.group-title')?.textContent?.trim()).toBe('Arquitectura');
        expect(el.querySelector('.chip')?.textContent?.trim()).toBe(RESUME_PT_BR.skillGroups[0].skills[0]);
    });
});
