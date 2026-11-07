import { Component, inject } from '@angular/core';
import { ProfessionalInfoComponent } from '../professional-info/professional-info.component';
import { ExperienceComponent } from '../experience/experience.component';
import { AcademicEducationComponent } from '../academic-education/academic-education.component';
import { ProfessionalSkillsComponent } from '../professional-skills/professional-skills.component';
import { LanguagesComponent } from '../languages/languages.component';
import { CertificationComponent } from '../certification/certification.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { RESUME } from '../../data/resume';

@Component({
    selector: 'app-pages-curriculum',
    templateUrl: './curriculum.component.html',
    styleUrls: ['./curriculum.component.scss'],
    imports: [ProfessionalInfoComponent, ExperienceComponent, AcademicEducationComponent, ProfessionalSkillsComponent, LanguagesComponent, CertificationComponent, FooterComponent]
})
export class CurriculumComponent {
    protected readonly profile = inject(RESUME).profile;

    public resume = 'Resumo';
}
