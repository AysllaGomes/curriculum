import { Component, inject } from '@angular/core';

import { Certification } from "../../shared/models/certification.model";
import { YearGroup } from "../../shared/models/year-group.model";
import { RESUME } from '../../data/resume';

@Component({
    selector: 'app-pages-certification',
    templateUrl: './certification.component.html',
    styleUrls: ['./certification.component.scss'] })
export class CertificationComponent {
    public certification = 'Certificação';

    public certifications: YearGroup[] = this.groupCertificationsByYear(inject(RESUME).certifications);

    groupCertificationsByYear(certifications: Certification[]): YearGroup[] {
        const groupedCertifications: YearGroup[] = [];

        certifications.forEach(certification => {
            const existingGroup = groupedCertifications.find(group => group.year === certification.year);
            if (existingGroup) {
                existingGroup.certifications.push(certification);
            } else {
                groupedCertifications.push({ year: certification.year, certifications: [certification] });
            }
        });

        return groupedCertifications;
    }
}
