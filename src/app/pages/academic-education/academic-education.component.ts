import { Component, Input, OnInit, inject } from '@angular/core';

import { AcademicEducationModel } from "../../shared/models/academic-education.model";

import { AcademicEducationService } from "../../shared/service/academic-education.service";
import { SpecializationComponent } from '../specialization/specialization.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
    selector: 'app-pages-academic-education',
    templateUrl: './academic-education.component.html',
    styleUrls: ['./academic-education.component.scss'],
    imports: [SpecializationComponent, FooterComponent]
})
export class AcademicEducationComponent implements OnInit {
    protected academicEducationService = inject(AcademicEducationService);

    @Input()
    public canShow = true;

    public academicEducations: AcademicEducationModel[] = [];

    public academicEducation = 'Formação Acadêmica';

    ngOnInit(): void {
        this.academicEducations = this.academicEducationService.getAcademicEducations();
    }
}
