import { Component, OnInit } from '@angular/core';

import { Skill } from "../../shared/models/skill.model";

@Component({
    selector: 'app-pages-professional-skills',
    templateUrl: './professional-skills.component.html',
    styleUrls: ['./professional-skills.component.scss']
})
export class ProfessionalSkillsComponent implements OnInit {

    public professionalSkills = 'Competências Profissionais';

    public skillGroups: Skill[] = [
        {
            title: 'Linguagens',
            skills: ['PhP', 'Java', 'C#', 'CSS3', 'SASS', 'HTML5', 'JavaScript', 'TypeScript', 'GraphQL', 'Kotlin']
        },
        {
            title: 'Frameworks',
            skills: ['Symfony', 'Laravel', 'Spring', 'Angular 2+', 'Angular JS', 'PrimeNg', 'PrimeFaces', 'Angular Material', 'React', 'Zend', 'Vue']
        },
        {
            title: 'Tecnologia',
            skills: ['Docker', 'Maven', 'Jenkins', 'iReport', 'Liquibase', 'Bootsrap', 'MySQL', 'MongoDB', 'PostgreSQL', 'Oracle Database', 'Microsoft SQL Server', 'Android Studio', 'Rancher', 'Node.js', 'Grafeno', 'Kafka', 'RabbitMQ', 'Kubernetes']
        },
        {
            title: 'Design',
            skills: ['Frontend', 'Reponsive', 'CodeDesign', 'UX/UI']
        },
    ];

    constructor() {}

    ngOnInit(): void {}

}
