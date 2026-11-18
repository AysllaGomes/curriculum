import { TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { provideLocale } from '../../../data/locales';

describe('FooterComponent', () => {
    it('ano atual, nome completo e o texto no idioma da página', async () => {
        TestBed.configureTestingModule({ providers: provideLocale('en') });
        const fixture = TestBed.createComponent(FooterComponent);
        await fixture.whenStable();
        const texto = (fixture.nativeElement as HTMLElement).querySelector('.footer')?.textContent ?? '';

        expect(texto).toContain(`© ${new Date().getFullYear()} Ayslla Caroline Prates Gomes.`);
        expect(texto).not.toContain('₢');
        expect((fixture.nativeElement as HTMLElement).querySelector('footer')?.classList).toContain('no-print');
    });
});
