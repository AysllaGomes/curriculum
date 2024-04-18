import { Component, Input, OnInit } from '@angular/core';

import { AcademicEducationModel } from "../../shared/models/academic-education.model";

import { AcademicEducationService } from "../../shared/service/academic-education.service";

@Component({
    selector: 'app-pages-academic-education',
    templateUrl: './academic-education.component.html',
    styleUrls: ['./academic-education.component.scss']
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
