import { Component, Input, inject } from '@angular/core';

import { PersonalProject } from "../../shared/models/personal-project.model";
import { RESUME } from '../../data/resume';

@Component({
    selector: 'app-pages-personal-projects',
    templateUrl: './personal-projects.component.html',
    styleUrls: ['./personal-projects.component.scss'] })
export class PersonalProjectsComponent {
    @Input()
    public canShowPersonalProjects = true;

    public personalProjects = 'Projetos Pessoais';

    /** Cópias: o estado "expandido" é da tela, não dos dados */
    public personalProjectsList: PersonalProject[] = inject(RESUME).projects.map(p => ({ ...p, expanded: false }));

    toggleCollapse(project: PersonalProject): void {
        project.expanded = !project.expanded;
    }
}
