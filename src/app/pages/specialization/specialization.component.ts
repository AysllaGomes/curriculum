import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';

import { YearGroup } from "../../shared/models/year-group.model";
import { Certification } from "../../shared/models/certification.model";
import { RESUME } from '../../data/resume';

@Component({
    selector: 'app-pages-specialization',
    templateUrl: './specialization.component.html',
    styleUrls: ['./specialization.component.scss'],
    imports: [NgClass]
})
export class SpecializationComponent {
    public specialization = 'Especializações';

    public certifications: Certification[] = inject(RESUME).courses;

    public groupedCertifications: YearGroup[] = this.groupCertificationsByYear(this.certifications);

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
