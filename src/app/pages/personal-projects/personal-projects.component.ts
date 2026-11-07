import { Component, Input, OnInit, inject } from '@angular/core';

import { PersonalProject } from "../../shared/models/personal-project.model";

import { PersonalProjectService } from "../../shared/service/personal-project.service";

@Component({
    selector: 'app-pages-personal-projects',
    templateUrl: './personal-projects.component.html',
    styleUrls: ['./personal-projects.component.scss'] })
export class PersonalProjectsComponent implements OnInit {
    protected personalProjectService = inject(PersonalProjectService);

    @Input()
    public canShowPersonalProjects = true;

    public personalProjects = 'Projetos Pessoais';

    public personalProjectsList: PersonalProject[] = [];

    ngOnInit(): void {
        this.personalProjectsList = this.personalProjectService.getPersonalProjects();
    }

    toggleCollapse(project: PersonalProject): void {
        project.expanded = !project.expanded;
    }
}
