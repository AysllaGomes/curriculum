import { TestBed } from '@angular/core/testing';

import { LanguagesComponent } from './languages.component';

describe('LanguagesComponent', () => {
    it('ordena os idiomas do nível mais alto (C2) para o mais baixo (A1)', async () => {
        const fixture = TestBed.createComponent(LanguagesComponent);
        await fixture.whenStable();

        const nomes = Array.from(fixture.nativeElement.querySelectorAll('.language-name') as NodeListOf<Element>)
            .map(e => e.textContent?.trim());

        expect(nomes).toEqual(['Português', 'Inglês', 'Espanhol', 'Francês', 'Eslovaco']);
    });
});
