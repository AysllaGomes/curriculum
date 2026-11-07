import { Component, inject } from '@angular/core';

import { LABELS } from '../../data/labels';
import { RESUME } from '../../data/resume';
import { yearsOfExperience } from '../../shared/utils/dates';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
    private readonly resume = inject(RESUME);
    protected readonly labels = inject(LABELS);
    protected readonly summary = this.resume.profile.summary;

    /** Números calculados a partir dos dados — nada digitado à mão */
    protected readonly stats = [
        { value: `${yearsOfExperience(this.resume.experiences)}+`, label: this.labels.about.years },
        { value: `${new Set(this.resume.experiences.map(e => e.company)).size}`, label: this.labels.about.companies },
        { value: `${this.resume.courses.length}`, label: this.labels.about.courses },
        { value: `${this.resume.certifications.length}`, label: this.labels.about.certifications },
    ];
}
