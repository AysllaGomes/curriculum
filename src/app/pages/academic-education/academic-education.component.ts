import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-pages-academic-education',
    templateUrl: './academic-education.component.html',
    styleUrls: ['./academic-education.component.scss']
})
export class AcademicEducationComponent implements OnInit {

    @Input()
    public canShow: boolean = true;

    public academicEducation = 'Formação Academica';

    constructor() {}

    ngOnInit(): void {}

}
