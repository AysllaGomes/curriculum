import { Component, inject, signal } from '@angular/core';

import { LABELS } from '../../data/labels';
import { LOCALE } from '../../data/resume';
import { LOCALES, LOCALE_STORAGE, PAGE_PATH, rememberLocale } from '../../data/locales';
import { Locale } from '../../shared/models/resume.model';

@Component({
    selector: 'app-site-header',
    templateUrl: './site-header.component.html',
    styleUrls: ['./site-header.component.scss'],
})
export class SiteHeaderComponent {
    protected readonly labels = inject(LABELS);
    protected readonly page = inject(PAGE_PATH);
    protected readonly locales = LOCALES;
    private readonly storage = inject(LOCALE_STORAGE);
    protected readonly current = LOCALES.find(o => o.locale === inject(LOCALE)) ?? LOCALES[0];

    /** Menu aberto (só faz diferença no celular, onde os links ficam escondidos atrás do botão) */
    protected readonly open = signal(false);

    protected readonly links = [
        { id: 'experiencia', text: this.labels.nav.experience },
        { id: 'projetos', text: this.labels.nav.projects },
        { id: 'competencias', text: this.labels.nav.skills },
        { id: 'formacao', text: this.labels.nav.education },
        { id: 'contato', text: this.labels.nav.contact },
    ];

    toggle(): void {
        this.open.update(v => !v);
    }

    close(): void {
        this.open.set(false);
    }

    /** O link carrega a página do idioma; aqui só fica guardada a escolha para a próxima visita */
    choose(locale: Locale): void {
        rememberLocale(this.storage, locale);
    }
}
