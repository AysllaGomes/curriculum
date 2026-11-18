import { TestBed } from '@angular/core/testing';

import { structuredData } from './structured-data';
import { RESUME_PT_BR } from './pt-BR';
import { RESUME_EN } from './en';
import { provideLocale } from './locales';
import { CurriculumComponent } from '../pages/curriculum/curriculum.component';

type Person = Record<string, unknown> & { worksFor?: { name: string }; sameAs: string[]; knowsAbout: string[] };

describe('Dados estruturados (JSON-LD)', () => {
    it('página de perfil com a pessoa: nome, cargo, empresa atual, perfis e competências', () => {
        const data = structuredData(RESUME_PT_BR, 'https://aysllagomes.dev/pt/', 'pt-BR') as Record<string, unknown>;
        const person = data['mainEntity'] as Person;

        expect(data['@context']).toBe('https://schema.org');
        expect(data['@type']).toBe('ProfilePage');
        expect(data['url']).toBe('https://aysllagomes.dev/pt/');
        expect(data['description']).not.toContain('{anos}');
        expect(person['@type']).toBe('Person');
        expect(person['name']).toBe('Ayslla Caroline Prates Gomes');
        expect(person['jobTitle']).toBe('Arquiteta Front-end');
        expect(person.worksFor?.name).toBe('Mirante Tecnologia');
        expect(person.sameAs).toEqual(['https://www.linkedin.com/in/ayslla-gomes/', 'https://github.com/AysllaGomes']);
        expect(person.knowsAbout).toContain('Angular');
    });

    it('no idioma da página', () => {
        const person = (structuredData(RESUME_EN, 'https://aysllagomes.dev/en/', 'en') as { mainEntity: Person }).mainEntity;
        expect(person['jobTitle']).toBe('Front-end Architect');
    });

    it('vai no <head> uma vez só, como JSON válido, mesmo com a página montada de novo', async () => {
        for (let i = 0; i < 2; i++) {
            TestBed.resetTestingModule();
            TestBed.configureTestingModule({ providers: provideLocale('it') });
            const fixture = TestBed.createComponent(CurriculumComponent);
            await fixture.whenStable();
        }
        const scripts = document.head.querySelectorAll('script[type="application/ld+json"]');

        expect(scripts.length).toBe(1);
        const data = JSON.parse(scripts[0].textContent ?? '');
        expect(data.inLanguage).toBe('it');
        expect(data.mainEntity.jobTitle).toBe('Architetta Front-end');
    });
});
