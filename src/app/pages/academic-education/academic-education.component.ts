import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { AcademicEducationModel } from "../../shared/models/academic-education.model";

import { AcademicEducationService } from "../../shared/service/academic-education.service";
import { SpecializationComponent } from '../specialization/specialization.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
    selector: 'app-pages-academic-education',
    templateUrl: './academic-education.component.html',
    styleUrls: ['./academic-education.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [SpecializationComponent, FooterComponent]
})
export class AcademicEducationComponent implements OnInit {

    @Input()
    public canShow: boolean = true;

    public academicEducations: AcademicEducationModel[] = [];

    public academicEducation = 'Formação Acadêmica';

    constructor(
        protected academicEducationService: AcademicEducationService
    ) {}

    ngOnInit(): void {
        this.academicEducations = this.academicEducationService.getAcademicEducations();
    }

}
