import { Component, Input, inject } from '@angular/core';

import { RESUME } from '../../data/resume';
import { SpecializationComponent } from '../specialization/specialization.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
    selector: 'app-pages-academic-education',
    templateUrl: './academic-education.component.html',
    styleUrls: ['./academic-education.component.scss'],
    imports: [SpecializationComponent, FooterComponent]
})
export class AcademicEducationComponent {
    @Input()
    public canShow = true;

    public academicEducations = inject(RESUME).education.map(e => ({
        ...e,
        period: `${e.startYear} - ${e.endYear}`,
    }));

    public academicEducation = 'Formação Acadêmica';
}
