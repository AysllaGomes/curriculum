import { Component, afterNextRender, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { LABELS } from '../../data/labels';
import { LOCALE } from '../../data/resume';
import { LOCALES, PAGE_PATH, rememberLocale } from '../../data/locales';
import { Locale } from '../../shared/models/resume.model';
import { BROWSER_STORAGE } from '../../shared/utils/storage';
import { Theme, applyTheme, currentTheme } from '../../shared/utils/theme';

@Component({
    selector: 'app-site-header',
    templateUrl: './site-header.component.html',
    styleUrls: ['./site-header.component.scss'],
})
export class SiteHeaderComponent {
    private readonly doc = inject(DOCUMENT);
    private readonly storage = inject(BROWSER_STORAGE);
    protected readonly labels = inject(LABELS);
    protected readonly page = inject(PAGE_PATH);
    protected readonly locales = LOCALES;
    protected readonly current = LOCALES.find(o => o.locale === inject(LOCALE)) ?? LOCALES[0];

    /** Menu aberto (só faz diferença no celular, onde os links ficam escondidos atrás do botão) */
    protected readonly open = signal(false);

    /**
     * Tema em uso. No build não dá para saber o tema de quem visita, então começa escuro
     * e é corrigido assim que a página abre no navegador.
     */
    protected readonly theme = signal<Theme>('dark');

    protected readonly links = [
        { id: 'experiencia', text: this.labels.nav.experience },
        { id: 'projetos', text: this.labels.nav.projects },
        { id: 'competencias', text: this.labels.nav.skills },
        { id: 'formacao', text: this.labels.nav.education },
        { id: 'contato', text: this.labels.nav.contact },
    ];

    constructor() {
        afterNextRender(() => this.theme.set(currentTheme(this.doc)));
    }

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

    toggleTheme(): void {
        const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
        applyTheme(this.doc, this.storage, next);
        this.theme.set(next);
    }
}
