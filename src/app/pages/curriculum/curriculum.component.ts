import { Component } from '@angular/core';
import { ProfessionalInfoComponent } from '../professional-info/professional-info.component';
import { ExperienceComponent } from '../experience/experience.component';
import { AcademicEducationComponent } from '../academic-education/academic-education.component';
import { ProfessionalSkillsComponent } from '../professional-skills/professional-skills.component';
import { LanguagesComponent } from '../languages/languages.component';
import { CertificationComponent } from '../certification/certification.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
    selector: 'app-pages-curriculum',
    templateUrl: './curriculum.component.html',
    styleUrls: ['./curriculum.component.scss'],
    imports: [ProfessionalInfoComponent, ExperienceComponent, AcademicEducationComponent, ProfessionalSkillsComponent, LanguagesComponent, CertificationComponent, FooterComponent]
})
export class CurriculumComponent {
    public language = 'Idiomas';

    public name = 'Ayslla Caroline Prates Gomes';

    public photoUrl = 'https://pub-51456c379d4c4f7ba854a6e3e4b02278.r2.dev/professional/Ayslla_Caroline.webp';

    public phone = '(61) 98207-2218';

    public email = 'ayslla.gomes@outlook.com';

    public address = 'Planaltina/GO';

    public resume = 'Resumo';

    public descriptionResume = `
        Como Arquiteta de Software, estou em constante busca pelo sucesso profissional, alimentada pela minha dedicação, paixão pelo aprendizado e pela minha exigência pessoal.
        Sou uma estudiosa incansável, sempre pronta para mergulhar em novas tecnologias e encarar desafios estimulantes.
        A cada obstáculo, vejo uma oportunidade de crescimento e superação.
        Determinada e comprometida, estou pronta para enfrentar qualquer desafio que a carreira me apresentar.
    `;
}
