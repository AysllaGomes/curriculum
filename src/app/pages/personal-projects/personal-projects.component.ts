import { Component, inject } from '@angular/core';

import { PersonalProject } from '../../shared/models/personal-project.model';
import { LABELS } from '../../data/labels';
import { RESUME } from '../../data/resume';

/** Projetos do GitHub (tópico "portfolio"); a lista é montada no build, ver src/app/data/projects.ts. */
@Component({
    selector: 'app-pages-personal-projects',
    templateUrl: './personal-projects.component.html',
    styleUrls: ['./personal-projects.component.scss'] })
export class PersonalProjectsComponent {
    private readonly resume = inject(RESUME);
    protected readonly labels = inject(LABELS);
    protected readonly githubUrl = this.resume.profile.links.github;

    public personalProjectsList: PersonalProject[] = this.resume.projects;
}
