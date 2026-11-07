import { TestBed } from '@angular/core/testing';

import { LanguagesComponent } from './languages.component';

describe('LanguagesComponent', () => {
    async function render(): Promise<HTMLElement> {
        const fixture = TestBed.createComponent(LanguagesComponent);
        await fixture.whenStable();
        return fixture.nativeElement;
    }

    it('ordena os idiomas do nível mais alto (C2) para o mais baixo (A1)', async () => {
        const nomes = Array.from((await render()).querySelectorAll('.language-name')).map(e => e.textContent?.trim());
        expect(nomes).toEqual(['Português', 'Inglês', 'Espanhol', 'Francês', 'Eslovaco']);
    });

    it('a barra preenche um segmento por nível (A1 = 1 … C2 = 6) e o nível também aparece escrito', async () => {
        const itens = Array.from((await render()).querySelectorAll('.language-item'));
        const preenchidos = itens.map(i => i.querySelectorAll('.bar.filled').length);

        expect(preenchidos).toEqual([6, 3, 3, 1, 1]);
        expect(itens[1].querySelector('.language-level')?.textContent).toContain('(B1)');
    });
});
