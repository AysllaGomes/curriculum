import { InjectionToken, inject } from '@angular/core';

import { Locale, Resume } from '../shared/models/resume.model';
import { RESUME_PT_BR } from './pt-BR';

/** Conteúdo de cada idioma. */
export const RESUMES: Record<Locale, Resume> = {
    'pt-BR': RESUME_PT_BR,
};

/** Idioma da página. */
export const LOCALE = new InjectionToken<Locale>('LOCALE', { providedIn: 'root', factory: () => 'pt-BR' });

/** Conteúdo do currículo no idioma da página. Os componentes leem tudo daqui. */
export const RESUME = new InjectionToken<Resume>('RESUME', {
    providedIn: 'root',
    factory: () => RESUMES[inject(LOCALE)],
});
