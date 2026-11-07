import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

/** Configuração comum ao navegador e ao pré-render do build. */
export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideRouter(routes),
        // Reaproveita o HTML gerado no build em vez de desenhar a página de novo
        provideClientHydration(withEventReplay()),
    ],
};
