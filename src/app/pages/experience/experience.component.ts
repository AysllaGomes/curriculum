import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { LABELS } from '../../data/labels';
import { LOCALE, RESUME } from '../../data/resume';
import { Employment } from '../../shared/models/resume.model';
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

    /**
     * Experiências com o período ("Jun 2022 – Dez 2025") e a duração ("3 anos e 7 meses") já formatados,
     * também para as empresas que fizeram o mesmo trabalho antes (`earlier`).
     */
    public experiencesList = inject(RESUME).experiences.map(e => ({
        ...e,
        ...this.when(e),
        current: !e.end,
        earlier: (e.earlier ?? []).map(prev => ({ ...prev, ...this.when(prev) })),
        highlights: e.highlights ?? [],
        stack: e.stack ?? [],
    }));

    private when(e: Employment): { period: string; duration: string } {
        return {
            period: `${formatYearMonth(e.start, this.locale, 'short')} – `
                + (e.end ? formatYearMonth(e.end, this.locale, 'short') : this.labels.experience.current),
            duration: formatDuration(experienceMonths(e), this.locale),
        };
    }
}
