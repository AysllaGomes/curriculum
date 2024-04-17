import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import {CurriculumComponent} from "./pages/curriculum/curriculum.component";
import {ExperienceComponent} from "./pages/experience/experience.component";
import {AboutComponent} from "./pages/about/about.component";

export const routes: Routes = [
  { path: '',             component: CurriculumComponent },
  { path: 'experiencia',  component: ExperienceComponent },
  { path: 'sobre',        component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
