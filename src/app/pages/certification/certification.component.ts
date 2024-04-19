import { Component, OnInit } from '@angular/core';

import { Certification } from "../../shared/models/certification.model";

import { CertificationService } from "../../shared/service/certification.service";

@Component({
    selector: 'app-pages-certification',
    templateUrl: './certification.component.html',
    styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {

    public certification: string = 'Certificação';

    public certifications: Certification[] = [];

    constructor(
        protected certificationService: CertificationService,
    ) { }

    ngOnInit(): void {
        this.certifications = this.certificationService.getCertificationsCerts();
    }

}
