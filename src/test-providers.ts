import { provideZonelessChangeDetection } from '@angular/core';

/** Providers aplicados a todos os testes — o mesmo modo de change detection da aplicação (sem zone.js). */
const testProviders = [provideZonelessChangeDetection()];

export default testProviders;
