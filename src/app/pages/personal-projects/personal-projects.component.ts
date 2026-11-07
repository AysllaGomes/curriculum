import { Component, inject } from '@angular/core';

import { PersonalProject } from "../../shared/models/personal-project.model";
import { LABELS } from '../../data/labels';
import { RESUME } from '../../data/resume';

@Component({
    selector: 'app-pages-personal-projects',
    templateUrl: './personal-projects.component.html',
    styleUrls: ['./personal-projects.component.scss'] })
export class PersonalProjectsComponent {
    private readonly resume = inject(RESUME);
    protected readonly labels = inject(LABELS);
    protected readonly githubUrl = this.resume.profile.links.github;

    /** Cópias: o estado "expandido" é da tela, não dos dados */
    public personalProjectsList: PersonalProject[] = this.resume.projects.map(p => ({ ...p, expanded: false }));

    toggleCollapse(project: PersonalProject): void {
        project.expanded = !project.expanded;
    }
}
