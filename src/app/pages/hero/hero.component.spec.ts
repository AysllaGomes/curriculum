import { TestBed } from '@angular/core/testing';

import { HeroComponent } from './hero.component';
import { provideLocale } from '../../data/locales';
import { Locale } from '../../shared/models/resume.model';
import { displayUrl } from '../../shared/utils/url';

describe('HeroComponent', () => {
    async function render(locale: Locale = 'pt-BR'): Promise<HTMLElement> {
        TestBed.configureTestingModule({ providers: provideLocale(locale) });
        const fixture = TestBed.createComponent(HeroComponent);
        await fixture.whenStable();
        return fixture.nativeElement;
    }

    it('a abertura traz os anos de experiência calculados, nunca o marcador {anos}', async () => {
        const headline = (await render()).querySelector('.headline')?.textContent ?? '';

        expect(headline).toMatch(/^\d+ anos construindo sistemas /);
        // O cargo já está no selo logo acima: a frase não o repete
        expect(headline).not.toContain('Arquiteta');
        expect(headline).not.toContain('{anos}');
    });

    it('botão do currículo em PDF do próprio idioma, com nome de arquivo legível', async () => {
        const link = (await render('en')).querySelector<HTMLAnchorElement>('a.btn-cv')!;

        expect(link.getAttribute('href')).toBe('cv/ayslla-gomes-en.pdf');
        expect(link.getAttribute('download')).toBe('Ayslla Gomes - Resume.pdf');
        expect(link.textContent?.trim()).toBe('Download résumé (PDF)');
        expect(link.closest('.no-print')).not.toBeNull();
    });

    it('no papel: contato escrito no topo, sem os botões', async () => {
        const el = await render();
        const contato = el.querySelector('.contact-line.print-only')?.textContent?.replace(/\s+/g, ' ').trim();

        expect(contato).toBe('ayslla@aysllagomes.dev · linkedin.com/in/ayslla-gomes · github.com/AysllaGomes · Planaltina/GO');
        expect(el.querySelector('.actions')?.classList).toContain('no-print');
    });

    it.each([['pt-BR', false], ['es', false], ['it', false], ['en', true]] as const)(
        'foto no papel conforme o idioma (%s: some = %s)', async (locale, hidden) => {
            const photo = (await render(locale)).querySelector('.photo-wrap')!;
            expect(photo.classList.contains('no-print')).toBe(hidden);
        });
});

describe('displayUrl', () => {
    it('tira protocolo, www e a barra final', () => {
        expect(displayUrl('https://www.linkedin.com/in/ayslla-gomes/')).toBe('linkedin.com/in/ayslla-gomes');
        expect(displayUrl('http://github.com/AysllaGomes')).toBe('github.com/AysllaGomes');
    });
});
