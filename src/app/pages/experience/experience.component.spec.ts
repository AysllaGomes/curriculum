import { TestBed } from '@angular/core/testing';

import { ExperienceComponent } from './experience.component';
import { CompanyService } from '../../shared/service/company.service';

describe('ExperienceComponent', () => {
    it('exibe as experiências com a mais recente primeiro', async () => {
        const fixture = TestBed.createComponent(ExperienceComponent);
        await fixture.whenStable();

        const empresas = Array.from(fixture.nativeElement.querySelectorAll('.company') as NodeListOf<Element>)
            .map(e => e.textContent?.trim());

        expect(empresas[0]).toBe('Mirante Tecnologia');
        expect(empresas).toContain('IBM');
    });

    it('sem logo, mostra a inicial da empresa e oculta o cliente vazio', async () => {
        TestBed.overrideProvider(CompanyService, {
            useValue: { getCompanies: () => [{ company: 'Empresa Nova', date: 'Janeiro 2027 - Atualmente', logoHeight: 100, logoWidth: 100 }] },
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
