import { Component, inject } from '@angular/core';

import { YearGroup } from "../../shared/models/year-group.model";
import { Certification } from "../../shared/models/certification.model";
import { LABELS } from '../../data/labels';
import { LOCALE, RESUME } from '../../data/resume';

@Component({
    selector: 'app-pages-specialization',
    templateUrl: './specialization.component.html',
    styleUrls: ['./specialization.component.scss'],
})
export class SpecializationComponent {
    protected readonly labels = inject(LABELS);
    private readonly plural = new Intl.PluralRules(inject(LOCALE));

    public certifications: Certification[] = inject(RESUME).courses;

    public groupedCertifications: YearGroup[] = this.groupCertificationsByYear(this.certifications);

    /** "1 curso", "13 cursos" */
    countLabel(count: number): string {
        const { one, other } = this.labels.education.course;
        return `${count} ${this.plural.select(count) === 'one' ? one : other}`;
    }

    groupCertificationsByYear(certifications: Certification[]): YearGroup[] {
        const groupedCertifications: YearGroup[] = [];

        certifications.forEach((certification: Certification): void => {
            const year: number = certification.year;
            const existingGroup: YearGroup | undefined = groupedCertifications.find(group => group.year === year);

            if (existingGroup) {
                existingGroup.certifications.push(certification);
            } else {
                groupedCertifications.push({ year: year, certifications: [certification] });
            }
        });

        groupedCertifications.sort((a, b) => b.year - a.year);

        return groupedCertifications;
    }

    toggleCollapse(year: number): void {
        this.groupedCertifications.forEach(group => {
            if (group.year === year) {
                group.expanded = !group.expanded;
            } else {
                group.expanded = false;
            }
        });
    }
}
