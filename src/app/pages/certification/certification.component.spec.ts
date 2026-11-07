import { TestBed } from '@angular/core/testing';

import { CertificationComponent } from './certification.component';

describe('CertificationComponent', () => {
    it('lista as certificações da mais recente para a mais antiga', async () => {
        const fixture = TestBed.createComponent(CertificationComponent);
        await fixture.whenStable();

        const anos = Array.from(fixture.nativeElement.querySelectorAll('.certification-item .year') as NodeListOf<Element>)
            .map(e => Number(e.textContent));

        expect(anos.length).toBe(3);
        expect(anos).toEqual([...anos].sort((a, b) => b - a));
    });

    it('link "Ver certificado" só quando há URL, abrindo em nova aba com segurança', async () => {
        const fixture = TestBed.createComponent(CertificationComponent);
        await fixture.whenStable();
        const el: HTMLElement = fixture.nativeElement;

        const links = Array.from(el.querySelectorAll<HTMLAnchorElement>('.certification-item a'));
        expect(links.length).toBe(fixture.componentInstance.certifications.filter(c => c.url).length);
        for (const link of links) {
            expect(link.getAttribute('href')).toMatch(/^https:\/\//);
            expect(link.target).toBe('_blank');
            expect(link.rel).toContain('noopener');
        }
    });
});
