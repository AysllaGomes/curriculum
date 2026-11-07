import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { LABELS } from '../../data/labels';
import { LOCALE, RESUME } from '../../data/resume';
import { experienceMonths, formatDuration, formatYearMonth } from '../../shared/utils/dates';

@Component({
    selector: 'app-pages-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    imports: [NgOptimizedImage],
})
export class ExperienceComponent {
    private readonly locale = inject(LOCALE);
    protected readonly labels = inject(LABELS);

    /** Experiências com o período ("Jun 2022 – Dez 2025") e a duração ("3 anos e 7 meses") já formatados */
    public experiencesList = inject(RESUME).experiences.map(e => ({
        ...e,
        current: !e.end,
        period: `${formatYearMonth(e.start, this.locale, 'short')} – `
            + (e.end ? formatYearMonth(e.end, this.locale, 'short') : this.labels.experience.current),
        duration: formatDuration(experienceMonths(e), this.locale),
    }));
}
