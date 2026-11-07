import { TestBed } from '@angular/core/testing';

import { CurriculumComponent } from './curriculum.component';
import { provideLocale } from '../../data/locales';
import { RESUMES } from '../../data/resume';

describe('CurriculumComponent (página completa)', () => {
    async function render(): Promise<HTMLElement> {
        const fixture = TestBed.createComponent(CurriculumComponent);
        await fixture.whenStable();
        return fixture.nativeElement;
    }

    it('renderiza nome, cargo, contato e todas as seções', async () => {
        const texto = (await render()).textContent ?? '';

        expect(texto).toContain('Ayslla Gomes');
        expect(texto).toContain('Ayslla Caroline Prates Gomes');
        expect(texto).toContain('Arquiteta de Software na Mirante Tecnologia');
        expect(texto).toContain('ayslla.gomes@outlook.com');
        for (const secao of ['Sobre mim', 'Experiência', 'Projetos', 'Competências', 'Formação', 'Graduação',
                             'Especializações', 'Certificações', 'Idiomas', 'Vamos conversar?']) {
            expect(texto, secao).toContain(secao);
        }
    });

    it('não mostra telefone', async () => {
        const texto = (await render()).textContent ?? '';
        expect(texto).not.toMatch(/celular|\(\d{2}\)\s?\d{4,5}-?\d{4}/i);
    });

    it('todo link do menu aponta para uma seção que existe', async () => {
        const el = await render();
        const alvos = Array.from(el.querySelectorAll<HTMLAnchorElement>('nav.nav a')).map(a => a.getAttribute('href')!);

        expect(alvos.length).toBe(5);
        for (const alvo of alvos) {
            // Endereço da própria página + #seção (um "#seção" sozinho iria para a raiz por causa do <base href>)
            expect(alvo, alvo).toMatch(/^\/.*#[a-z]+$/);
            expect(el.querySelector(alvo.slice(alvo.indexOf('#'))), alvo).not.toBeNull();
        }
        expect(el.querySelector('#topo')).not.toBeNull();
        expect(el.querySelector('#conteudo')).not.toBeNull();
    });

    it('há um único h1 e os títulos de seção são h2', async () => {
        const el = await render();
        expect(el.querySelectorAll('h1').length).toBe(1);
        expect(el.querySelectorAll('h2').length).toBeGreaterThanOrEqual(6);
    });

    it('rodapé usa © (e não ₢)', async () => {
        const texto = (await render()).querySelector('footer')?.textContent ?? '';
        expect(texto).toContain('©');
        expect(texto).not.toContain('₢');
    });

    it('a foto de perfil tem texto alternativo com o nome', async () => {
        const foto = (await render()).querySelector('img.photo');
        expect(foto?.getAttribute('alt')).toBe('Foto de Ayslla Caroline Prates Gomes');
    });

    it('define o idioma do documento, o título da aba e a descrição', async () => {
        await render();
        expect(document.documentElement.lang).toBe('pt-BR');
        expect(document.title).toBe('Ayslla Gomes · Arquiteta de Software');
        expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toContain('Estudiosa incansável');
    });
});

describe.each([
    { locale: 'en' as const, badge: 'Software Architect at Mirante Tecnologia', period: 'Jun 2022 – Dec 2025', duration: '3 years and 7 months',
      sections: ['About me', 'Experience', 'Projects', 'Skills', 'Education', 'Degree', 'Certifications', 'Languages', 'Let\'s talk'] },
    { locale: 'es' as const, badge: 'Arquitecta de Software en Mirante Tecnologia', period: 'Jun 2022 – Dic 2025', duration: '3 años y 7 meses',
      sections: ['Sobre mí', 'Experiencia', 'Proyectos', 'Competencias', 'Formación', 'Grado', 'Certificaciones', 'Idiomas', '¿Hablamos?'] },
    { locale: 'it' as const, badge: 'Architetta Software presso Mirante Tecnologia', period: 'Giu 2022 – Dic 2025', duration: '3 anni e 7 mesi',
      sections: ['Chi sono', 'Esperienza', 'Progetti', 'Competenze', 'Formazione', 'Laurea', 'Certificazioni', 'Lingue', 'Parliamo?'] },
])('CurriculumComponent em $locale', ({ locale, badge, period, duration, sections }) => {
    it('a página inteira muda de idioma: textos, datas, durações, lang e título', async () => {
        TestBed.configureTestingModule({ providers: provideLocale(locale) });
        const fixture = TestBed.createComponent(CurriculumComponent);
        await fixture.whenStable();
        const el: HTMLElement = fixture.nativeElement;
        const texto = el.textContent ?? '';

        expect(texto).toContain(badge);
        for (const secao of sections) expect(texto, secao).toContain(secao);
        expect(texto).toContain(period);
        expect(texto).toContain(duration);
        expect(texto).not.toContain('Sobre mim');
        expect(document.documentElement.lang).toBe(locale);
        expect(document.title).toBe(`Ayslla Gomes · ${RESUMES[locale].profile.role}`);
    });
});
