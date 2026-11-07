import { InjectionToken, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type SimpleStorage = Pick<Storage, 'getItem' | 'setItem'>;

/**
 * Armazenamento do navegador (localStorage), onde ficam as escolhas de idioma e de tema.
 * Nulo no build (pré-render) e quando o navegador bloqueia: aí a escolha só não é lembrada.
 * Os testes trocam por uma versão em memória.
 */
export const BROWSER_STORAGE = new InjectionToken<SimpleStorage | null>('BROWSER_STORAGE', {
    providedIn: 'root',
    factory: () => {
        try {
            return inject(DOCUMENT).defaultView?.localStorage ?? null;
        } catch {
            return null;
        }
    },
});

/** O navegador pode recusar o acesso ao armazenamento a qualquer momento (cota, modo privado). */
export function safely<T>(fn: () => T): T | null {
    try {
        return fn();
    } catch {
        return null;
    }
}
