import { NgModule } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from "./app.routes";

import { AppComponent } from './app.component';
import { LanguagesComponent } from "./pages/languages/languages.component";
import { CurriculumComponent } from "./pages/curriculum/curriculum.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { CertificationComponent } from "./pages/certification/certification.component";
import { SpecializationComponent } from "./pages/specialization/specialization.component";
import { PersonalProjectsComponent } from "./pages/personal-projects/personal-projects.component";
import { ProfessionalInfoComponent } from "./pages/professional-info/professional-info.component";
import { AcademicEducationComponent } from "./pages/academic-education/academic-education.component";
import { ProfessionalSkillsComponent } from "./pages/professional-skills/professional-skills.component";

@NgModule({
    declarations: [
        AppComponent,
        AcademicEducationComponent,
        CertificationComponent,
        CurriculumComponent,
        ExperienceComponent,
        FooterComponent,
        LanguagesComponent,
        ProfessionalInfoComponent,
        ProfessionalSkillsComponent,
        SpecializationComponent,
        PersonalProjectsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
