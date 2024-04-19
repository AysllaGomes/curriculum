import { Component, OnInit } from '@angular/core';

import { YearGroup } from "../../shared/models/year-group.model";
import { Certification } from "../../shared/models/certification.model";

import { CertificationService } from "../../shared/service/certification.service";

@Component({
  selector: 'app-pages-specialization',
  templateUrl: './specialization.component.html',
  styleUrls: ['./specialization.component.scss']
})
export class SpecializationComponent implements OnInit {

    public specialization = 'Especializações';

    public certifications: Certification[] = [];

    public groupedCertifications: YearGroup[] = [];

    constructor(
        protected certificationService: CertificationService,
    ) {}

    ngOnInit(): void {
        this.certifications = this.certificationService.getCertifications();
        this.groupedCertifications = this.groupCertificationsByYear(this.certifications);
    }

    groupCertificationsByYear(certifications: Certification[]): YearGroup[] {
        const groupedCertifications: YearGroup[] = [];

        certifications.forEach((certification: Certification): void => {
            const year: number = certification.year;
            const existingGroup: YearGroup = groupedCertifications.find(group => group.year === year);

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
