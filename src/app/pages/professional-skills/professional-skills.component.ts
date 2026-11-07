import { Component, inject } from '@angular/core';

import { Skill } from "../../shared/models/skill.model";
import { LABELS } from '../../data/labels';
import { RESUME } from '../../data/resume';

@Component({
    selector: 'app-pages-professional-skills',
    templateUrl: './professional-skills.component.html',
    styleUrls: ['./professional-skills.component.scss'] })
export class ProfessionalSkillsComponent {
    protected readonly labels = inject(LABELS);

    public skillGroups: Skill[] = inject(RESUME).skillGroups;
}
