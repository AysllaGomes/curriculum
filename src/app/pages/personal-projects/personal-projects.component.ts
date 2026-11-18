import { Component, inject } from '@angular/core';

import { LABELS } from '../../data/labels';
import { RESUME } from '../../data/resume';

import { displayUrl } from '../../shared/utils/url';
import { PersonalProject } from '../../shared/models/personal-project.model';

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

    /** Quantos projetos entram no currículo impresso/PDF */
    protected readonly printLimit = 2;
    protected readonly github = displayUrl(this.githubUrl);
    protected readonly urlOf = displayUrl;
}
