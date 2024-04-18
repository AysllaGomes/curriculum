import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pages-professional-skills',
    templateUrl: './professional-skills.component.html',
    styleUrls: ['./professional-skills.component.scss']
})
export class ProfessionalSkillsComponent implements OnInit {

    public back = 'Back-End';

    public front = 'Front-End';

    public database = 'Banco de Dados';

    public professionalSkills = 'Competências Profissionais';

    constructor() {}

    ngOnInit(): void {}

}
