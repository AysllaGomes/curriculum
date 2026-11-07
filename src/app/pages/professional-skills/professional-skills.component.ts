import { Component, inject } from '@angular/core';

import { Skill } from "../../shared/models/skill.model";
import { RESUME } from '../../data/resume';

@Component({
    selector: 'app-pages-professional-skills',
    templateUrl: './professional-skills.component.html',
    styleUrls: ['./professional-skills.component.scss'] })
export class ProfessionalSkillsComponent {
    public professionalSkills = 'Competências Profissionais';

    public skillGroups: Skill[] = inject(RESUME).skillGroups;
}
