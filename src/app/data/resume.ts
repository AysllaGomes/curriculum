import { InjectionToken, inject } from '@angular/core';

import { Locale, Resume } from '../shared/models/resume.model';
import { RESUME_PT_BR } from './pt-BR';
import { RESUME_EN } from './en';
import { RESUME_ES } from './es';
import { RESUME_IT } from './it';

/** Conteúdo de cada idioma. */
export const RESUMES: Record<Locale, Resume> = {
    'pt-BR': RESUME_PT_BR,
    en: RESUME_EN,
    es: RESUME_ES,
    it: RESUME_IT,
};

/** Idioma da página. Cada rota fornece o seu (ver locales.ts); o padrão vale para os testes. */
export const LOCALE = new InjectionToken<Locale>('LOCALE', { providedIn: 'root', factory: () => 'pt-BR' });

/** Conteúdo do currículo no idioma da página. Os componentes leem tudo daqui. */
export const RESUME = new InjectionToken<Resume>('RESUME', {
    providedIn: 'root',
    factory: () => RESUMES[inject(LOCALE)],
});
