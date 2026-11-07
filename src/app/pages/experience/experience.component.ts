import { Component, Input, OnInit, inject } from '@angular/core';

import { Company } from "../../shared/models/company.model";

import { CompanyService } from "../../shared/service/company.service";
import { NgOptimizedImage } from '@angular/common';
import { PersonalProjectsComponent } from '../personal-projects/personal-projects.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
    selector: 'app-pages-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    imports: [NgOptimizedImage, PersonalProjectsComponent, FooterComponent]
})
export class ExperienceComponent implements OnInit {
    protected companyService = inject(CompanyService);

    @Input()
    public canShow = true;

    @Input()
    public canShowPersonalProjects = true;

    public experiences = 'Experiências';

    public experiencesList: Company[] = [];

    ngOnInit(): void {
        this.experiencesList = this.companyService.getCompanies();
    }
}
