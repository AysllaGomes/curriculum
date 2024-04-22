import { Component, Input, OnInit } from '@angular/core';

import { PersonalProject } from "../../shared/models/personal-project.model";

import { PersonalProjectService } from "../../shared/service/personal-project.service";

@Component({
  selector: 'app-pages-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.scss']
})
export class PersonalProjectsComponent implements OnInit {

    @Input()
    public canShowPersonalProjects: boolean = true;

    public personalProjects = 'Projetos Pessoais';

    public personalProjectsList: PersonalProject[] = [];

    constructor(
        protected personalProjectService: PersonalProjectService,
    ) { }

    ngOnInit(): void {
        this.personalProjectsList = this.personalProjectService.getPersonalProjects();
    }

}
