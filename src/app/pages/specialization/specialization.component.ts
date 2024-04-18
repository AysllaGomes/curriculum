import { Component, OnInit } from '@angular/core';

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

    constructor(
        protected certificationService: CertificationService,
    ) {}

    ngOnInit(): void {
        this.certifications = this.certificationService.getCertifications();
    }

}
