import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

import { LABELS } from '../../data/labels';
import { LOCALE, RESUME } from '../../data/resume';
import { SiteHeaderComponent } from '../site-header/site-header.component';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';
import { PersonalProjectsComponent } from '../personal-projects/personal-projects.component';
import { ProfessionalSkillsComponent } from '../professional-skills/professional-skills.component';
import { AcademicEducationComponent } from '../academic-education/academic-education.component';
import { CertificationComponent } from '../certification/certification.component';
import { LanguagesComponent } from '../languages/languages.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

/** A página inteira: cabeçalho, seções na ordem do menu e rodapé. */
@Component({
    selector: 'app-pages-curriculum',
    templateUrl: './curriculum.component.html',
    styleUrls: ['./curriculum.component.scss'],
    imports: [
        SiteHeaderComponent, HeroComponent, AboutComponent, ExperienceComponent, PersonalProjectsComponent,
        ProfessionalSkillsComponent, AcademicEducationComponent, CertificationComponent, LanguagesComponent,
        ContactComponent, FooterComponent,
    ],
})
export class CurriculumComponent {
    protected readonly labels = inject(LABELS);

    constructor() {
        // Idioma do documento (leitores de tela e tradutores automáticos usam), título da aba e descrição
        const profile = inject(RESUME).profile;
        inject(DOCUMENT).documentElement.lang = inject(LOCALE);
        inject(Title).setTitle(`${profile.shortName} · ${profile.role}`);
        inject(Meta).updateTag({ name: 'description', content: profile.headline });
    }
}
