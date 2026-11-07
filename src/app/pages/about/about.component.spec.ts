import { TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { RESUME } from '../../data/resume';
import { RESUME_PT_BR } from '../../data/pt-BR';

describe('AboutComponent', () => {
    it('números vêm dos dados: empresas, cursos e certificações', async () => {
        const fixture = TestBed.createComponent(AboutComponent);
        await fixture.whenStable();

        const valores = Array.from((fixture.nativeElement as HTMLElement).querySelectorAll('.stat-value'))
            .map(e => e.textContent?.trim());

        expect(valores[0]).toMatch(/^\d+\+$/);
        expect(valores.slice(1)).toEqual(['5', '22', '3']);
    });

    it('a mesma empresa em duas experiências conta uma vez só', async () => {
        TestBed.overrideProvider(RESUME, {
            useValue: {
                ...RESUME_PT_BR,
                experiences: [
                    { company: 'A', start: '2024-01' },
                    { company: 'A', start: '2020-01', end: '2021-01' },
                    { company: 'B', start: '2018-01', end: '2019-12' },
                ],
            },
        });
        const fixture = TestBed.createComponent(AboutComponent);
        await fixture.whenStable();

        expect((fixture.nativeElement as HTMLElement).querySelectorAll('.stat-value')[1].textContent?.trim()).toBe('2');
    });
});
