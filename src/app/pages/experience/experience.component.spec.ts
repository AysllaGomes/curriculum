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

    it('mostra o período por extenso e "Atualmente" no emprego atual', async () => {
        const fixture = TestBed.createComponent(ExperienceComponent);
        await fixture.whenStable();

        const datas = Array.from(fixture.nativeElement.querySelectorAll('.date') as NodeListOf<Element>)
            .map(e => e.textContent?.trim());

        expect(datas[0]).toBe('Janeiro 2026 - Atualmente');
        expect(datas[1]).toBe('Junho 2022 - Dezembro 2025');
    });

    it('sem logo, mostra a inicial da empresa e oculta o cliente vazio', async () => {
        TestBed.overrideProvider(RESUME, {
            useValue: { ...RESUME_PT_BR, experiences: [{ company: 'Empresa Nova', start: '2027-01' }] },
        });
        const fixture = TestBed.createComponent(ExperienceComponent);
        fixture.componentRef.setInput('canShowPersonalProjects', false);
        await fixture.whenStable();
        const el: HTMLElement = fixture.nativeElement;

        const experiencia = el.querySelector('.experience')!;
        expect(experiencia.querySelector('.logo-placeholder')?.textContent?.trim()).toBe('E');
        expect(experiencia.querySelector('img.logo')).toBeNull();
        expect(experiencia.querySelector('.position')).toBeNull();
    });
});
