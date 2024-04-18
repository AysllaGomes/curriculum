import { NgModule } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from "./app.routes";

import { AppComponent } from './app.component';
import { AboutComponent } from "./pages/about/about.component";
import { NavbarComponent } from "./pages/navbar/navbar.component";
import { FooterComponent } from "./pages/footer/footer.component";
import { LanguagesComponent } from "./pages/languages/languages.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import { CurriculumComponent } from "./pages/curriculum/curriculum.component";
import { AcademicEducationComponent } from "./pages/academic-education/academic-education.component";
import { ProfessionalSkillsComponent } from "./pages/professional-skills/professional-skills.component";

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        AcademicEducationComponent,
        CurriculumComponent,
        ExperienceComponent,
        FooterComponent,
        LanguagesComponent,
        NavbarComponent,
        ProfessionalSkillsComponent,
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
