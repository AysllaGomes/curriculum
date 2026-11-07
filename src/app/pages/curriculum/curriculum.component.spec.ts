import { TestBed } from '@angular/core/testing';

import { CurriculumComponent } from './curriculum.component';

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
        const alvos = Array.from(el.querySelectorAll<HTMLAnchorElement>('nav a')).map(a => a.getAttribute('href')!);

        expect(alvos.length).toBe(5);
        for (const alvo of alvos) expect(el.querySelector(alvo), alvo).not.toBeNull();
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
});
