import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { CurriculumComponent } from "./pages/curriculum/curriculum.component";

export const routes: Routes = [
    {
        path: '',
        component: CurriculumComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
