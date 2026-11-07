import { Routes } from '@angular/router';

import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { LOCALES, provideLocale, redirectToPreferredLocale } from './data/locales';

/** Uma página por idioma (/pt, /en, /es, /it); o resto vai para o idioma preferido de quem visita. */
export const routes: Routes = [
    ...LOCALES.map(({ locale, path }) => ({
        path,
        component: CurriculumComponent,
        providers: provideLocale(locale),
    })),
    { path: '**', redirectTo: redirectToPreferredLocale },
];
