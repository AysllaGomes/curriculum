import { Component, Input, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { LOCALE, RESUME } from '../../data/resume';
import { formatYearMonth } from '../../shared/utils/dates';
import { PersonalProjectsComponent } from '../personal-projects/personal-projects.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
    selector: 'app-pages-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    imports: [NgOptimizedImage, PersonalProjectsComponent, FooterComponent]
})
export class ExperienceComponent {
    private readonly locale = inject(LOCALE);

    @Input()
    public canShow = true;

    @Input()
    public canShowPersonalProjects = true;

    public experiences = 'Experiências';

    public experiencesList = inject(RESUME).experiences.map(e => ({
        ...e,
        period: `${formatYearMonth(e.start, this.locale)} - ${e.end ? formatYearMonth(e.end, this.locale) : 'Atualmente'}`,
    }));
}
