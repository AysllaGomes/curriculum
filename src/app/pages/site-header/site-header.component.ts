import { Component, inject, signal } from '@angular/core';

import { LABELS } from '../../data/labels';

@Component({
    selector: 'app-site-header',
    templateUrl: './site-header.component.html',
    styleUrls: ['./site-header.component.scss'],
})
export class SiteHeaderComponent {
    protected readonly labels = inject(LABELS);

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
}
