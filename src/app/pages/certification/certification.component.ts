import { Component, OnInit, inject } from '@angular/core';

import { Certification } from "../../shared/models/certification.model";
import { YearGroup } from "../../shared/models/year-group.model";

import { CertificationService } from "../../shared/service/certification.service";

@Component({
    selector: 'app-pages-certification',
    templateUrl: './certification.component.html',
    styleUrls: ['./certification.component.scss'] })
export class CertificationComponent implements OnInit {
    protected certificationService = inject(CertificationService);

    public certification = 'Certificação';

    public certifications: YearGroup[] = [];

    ngOnInit(): void {
        this.certifications = this.groupCertificationsByYear(this.certificationService.getCertificationsCerts());
    }

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
