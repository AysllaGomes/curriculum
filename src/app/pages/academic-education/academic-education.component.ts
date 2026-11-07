import { Component, inject } from '@angular/core';

import { LABELS } from '../../data/labels';
import { RESUME } from '../../data/resume';
import { SpecializationComponent } from '../specialization/specialization.component';

@Component({
    selector: 'app-pages-academic-education',
    templateUrl: './academic-education.component.html',
    styleUrls: ['./academic-education.component.scss'],
    imports: [SpecializationComponent]
})
export class AcademicEducationComponent {
    protected readonly labels = inject(LABELS);

    public academicEducations = inject(RESUME).education.map(e => ({
        ...e,
        period: `${e.startYear} – ${e.endYear}`,
    }));
}
