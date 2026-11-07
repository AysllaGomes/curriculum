import { TestBed } from '@angular/core/testing';

import { CurriculumComponent } from './curriculum.component';

describe('CurriculumComponent (página completa)', () => {
    async function render(): Promise<HTMLElement> {
        const fixture = TestBed.createComponent(CurriculumComponent);
        await fixture.whenStable();
        return fixture.nativeElement;
    }

    it('renderiza nome, contato e todas as seções', async () => {
        const texto = (await render()).textContent ?? '';

        expect(texto).toContain('Ayslla Caroline Prates Gomes');
        expect(texto).toContain('ayslla.gomes@outlook.com');
        for (const secao of ['Resumo', 'Experiências', 'Projetos Pessoais', 'Formação Acadêmica', 'Especializações',
                             'Competências Profissionais', 'Idiomas', 'Certificação']) {
            expect(texto, secao).toContain(secao);
        }
    });

    it('rodapé usa © (e não ₢)', async () => {
        const texto = (await render()).textContent ?? '';
        expect(texto).toContain('©');
        expect(texto).not.toContain('₢');
    });

    it('a foto de perfil tem texto alternativo com o nome', async () => {
        const foto = (await render()).querySelector('img.profile-photo');
        expect(foto?.getAttribute('alt')).toBe('Foto de Ayslla Caroline Prates Gomes');
    });
});
