import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-pages-professional-skills',
    templateUrl: './professional-skills.component.html',
    styleUrls: ['./professional-skills.component.scss']
})
export class ProfessionalSkillsComponent implements OnInit {

    @Input()
    public canShow: boolean = true;

    public back = 'Back-End';

    public front = 'Front-End';

    public language = 'Idiomas';

    public database = 'Banco de Dados';

    public professionalSkills = 'Competências Profissionais';

    constructor() {}

    ngOnInit(): void {}

}
