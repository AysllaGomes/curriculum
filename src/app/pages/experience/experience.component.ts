import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Company } from "../../shared/models/company.model";

import { CompanyService } from "../../shared/service/company.service";

@Component({
    selector: 'app-pages-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ExperienceComponent implements OnInit {

    @Input()
    public canShow: boolean = true;

    @Input()
    public canShowPersonalProjects: boolean = true;

    public experiences = 'Experiências';

    public experiencesList: Company[] = [];

    constructor(
        protected companyService: CompanyService,
    ) { }

    ngOnInit(): void {
        this.experiencesList = this.companyService.getCompanies();
    }

}
