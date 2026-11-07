import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { LABELS } from '../../data/labels';
import { RESUME } from '../../data/resume';
import { PAGE_PATH } from '../../data/locales';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
    imports: [NgOptimizedImage],
})
export class HeroComponent {
    private readonly resume = inject(RESUME);
    protected readonly labels = inject(LABELS);
    protected readonly profile = this.resume.profile;
    protected readonly page = inject(PAGE_PATH);

    /** "Arquiteta de Software na Mirante Tecnologia" — a empresa é a da experiência sem data de fim */
    protected readonly badge = [this.profile.role, ...this.currentCompany()].join(' ');

    private currentCompany(): string[] {
        const company = this.resume.experiences.find(e => !e.end)?.company;
        return company ? [this.labels.hero.at, company] : [];
    }
}
