import { TestBed } from '@angular/core/testing';

import { AcademicEducationComponent } from './academic-education.component';
import { provideLocale } from '../../data/locales';

describe('AcademicEducationComponent', () => {
    async function render(locale: 'pt-BR' | 'it' = 'pt-BR'): Promise<HTMLElement> {
        TestBed.configureTestingModule({ providers: provideLocale(locale) });
        const fixture = TestBed.createComponent(AcademicEducationComponent);
        await fixture.whenStable();
        return fixture.nativeElement;
    }

    it('curso, instituição e período da graduação, com as especializações logo abaixo', async () => {
        const el = await render();

        expect(el.querySelector('.card-title')?.textContent?.trim()).toBe('Graduação');
        expect(el.querySelector('.education-course')?.textContent?.trim()).toBe('Sistemas de Informação');
        expect(el.textContent).toContain('Centro Universitário do Distrito Federal | UDF');
        expect(el.textContent).toContain('2018 – 2022');
        expect(el.querySelector('app-pages-specialization')).not.toBeNull();
    });

    it('nome do curso traduzido, instituição igual', async () => {
        const el = await render('it');

        expect(el.querySelector('.card-title')?.textContent?.trim()).toBe('Laurea');
        expect(el.querySelector('.education-course')?.textContent?.trim()).toBe('Sistemi Informativi');
        expect(el.textContent).toContain('Centro Universitário do Distrito Federal | UDF');
    });
});
