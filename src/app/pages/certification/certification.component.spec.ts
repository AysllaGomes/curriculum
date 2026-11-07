import { TestBed } from '@angular/core/testing';

import { CertificationComponent } from './certification.component';

describe('CertificationComponent', () => {
    it('agrupa certificações por ano', () => {
        const component = TestBed.createComponent(CertificationComponent).componentInstance;

        const grupos = component.groupCertificationsByYear([
            { year: 2020, provider: 'A', title: 'Curso 1' },
            { year: 2021, provider: 'B', title: 'Curso 2' },
            { year: 2020, provider: 'C', title: 'Curso 3' },
        ]);

        expect(grupos.map(g => [g.year, g.certifications.map(c => c.title)])).toEqual([
            [2020, ['Curso 1', 'Curso 3']],
            [2021, ['Curso 2']],
        ]);
    });

    it('renderiza os grupos com link "Detalhes" só quando há URL', async () => {
        const fixture = TestBed.createComponent(CertificationComponent);
        await fixture.whenStable();
        const el: HTMLElement = fixture.nativeElement;

        const itens = Array.from(el.querySelectorAll('.certification-item'));
        expect(itens.length).toBeGreaterThan(0);
        for (const item of itens) {
            const link = item.querySelector('a');
            if (link) expect(link.getAttribute('href')).toMatch(/^https:\/\//);
        }
    });
});
