import { TestBed } from '@angular/core/testing';

import { ExperienceComponent } from './experience.component';
import { RESUME } from '../../data/resume';
import { RESUME_PT_BR } from '../../data/pt-BR';

describe('ExperienceComponent', () => {
    it('exibe as experiências com a mais recente primeiro', async () => {
        const fixture = TestBed.createComponent(ExperienceComponent);
        await fixture.whenStable();

        const empresas = Array.from(fixture.nativeElement.querySelectorAll('.company') as NodeListOf<Element>)
            .map(e => e.textContent?.trim());

        expect(empresas[0]).toBe('Mirante Tecnologia');
        expect(empresas).toContain('IBM');
    });

    it('mostra período, duração calculada e destaca o emprego atual', async () => {
        const fixture = TestBed.createComponent(ExperienceComponent);
        await fixture.whenStable();
        const el: HTMLElement = fixture.nativeElement;
        const textos = (seletor: string) => Array.from(el.querySelectorAll(seletor)).map(e => e.textContent?.trim());

        expect(textos('.date').slice(0, 2)).toEqual(['Jan 2026 – Atual', 'Jun 2022 – Dez 2025']);
        expect(textos('.duration')[1]).toBe('3 anos e 7 meses');
        expect(textos('.duration')[3]).toBe('6 meses');
        expect(el.querySelectorAll('.experience.current').length).toBe(1);
        expect(el.querySelector('.experience.current .company')?.textContent?.trim()).toBe('Mirante Tecnologia');
    });

    it('a empresa anterior no mesmo trabalho aparece no cartão, com as próprias datas', async () => {
        const fixture = TestBed.createComponent(ExperienceComponent);
        await fixture.whenStable();
        const ibm = (fixture.nativeElement as HTMLElement).querySelectorAll('.experience')[1];

        expect(ibm.querySelector('.company')?.textContent?.trim()).toBe('IBM');
        expect(ibm.querySelector('.earlier')?.textContent?.replace(/\s+/g, ' ').trim())
            .toBe('Antes, pela EngeSoftware Tecnologia · Dez 2020 – Jun 2022 · 1 ano e 7 meses');
    });

    it('mostra o resumo, os destaques e a stack de cada experiência', async () => {
        const fixture = TestBed.createComponent(ExperienceComponent);
        await fixture.whenStable();
        const atual = (fixture.nativeElement as HTMLElement).querySelector('.experience.current')!;

        expect(atual.querySelector('.summary')?.textContent).toContain('Arquiteta Front-end');
        expect(atual.querySelectorAll('.highlights li').length).toBe(4);
        expect(Array.from(atual.querySelectorAll('.stack li')).map(e => e.textContent?.trim())).toContain('Angular');
        expect(atual.querySelector('.stack')?.getAttribute('aria-label')).toBe('Tecnologias');
    });

    it('sem logo, mostra a inicial da empresa e oculta o cliente vazio', async () => {
        TestBed.overrideProvider(RESUME, {
            useValue: { ...RESUME_PT_BR, experiences: [{ company: 'Empresa Nova', start: '2027-01' }] },
        });
        const fixture = TestBed.createComponent(ExperienceComponent);
        await fixture.whenStable();
        const el: HTMLElement = fixture.nativeElement;

        const experiencia = el.querySelector('.experience')!;
        expect(experiencia.querySelector('.logo-placeholder')?.textContent?.trim()).toBe('E');
        expect(experiencia.querySelector('img.logo')).toBeNull();
        expect(experiencia.querySelector('.client')).toBeNull();
        expect(experiencia.querySelector('.details')).toBeNull();
    });
});
