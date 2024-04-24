import { Injectable } from "@angular/core";

import { Certification } from "../models/certification.model";

@Injectable({
    providedIn: 'root'
})
export class CertificationService {
    getCertifications(): Certification[] {
        return [
            {
                year: 2012,
                provider: 'Kadoche',
                title: 'Corel Draw X4 e AUTOCAD',
                url: 'https://drive.google.com/file/d/1TpxbwdZfgGXYNbN7em464zkk1d0qWtFD/view?usp=drive_link'
            },
            {
                year: 2013,
                provider: 'Kadoche',
                title: 'Montagem e Configuração de Microcomputadores & Configurações de Softwares',
                url: 'https://drive.google.com/file/d/1WCfi50tA8D2z6iq8C148rA9k3a6b4_iA/view?usp=drive_link'
            },
            {
                year: 2018,
                provider: 'Udemy',
                title: 'HTML5, CCS3 e Javascript',
                url: 'https://www.udemy.com/certificate/UC-A25SJJPO/'
            },
            {
                year: 2019,
                provider: 'Udemy',
                title: 'Firebase',
                url: 'https://www.udemy.com/certificate/UC-RBSCD7NG/'
            },
            {
                year: 2019,
                provider: 'CertiProf',
                title: 'SCRUM Foundation',
                url: 'https://drive.google.com/file/d/1WGaNT5Txv6b8Cmgoi4itL7S4cIzdoHd8/view?usp=drive_link'
            },
            {
                year: 2021,
                provider: 'Origamid',
                title: 'Automação Front com o NPM',
                url: 'https://origamid.com/certificate/37eba3d8'
            },
            {
                year: 2021,
                provider: 'Origamid',
                title: 'CSS com SASS',
                url: 'https://origamid.com/certificate/acff0849'
            },
            {
                year: 2021,
                provider: 'Origamid',
                title: 'CSS Flexbox',
                url: 'https://www.origamid.com/certificate/60e5c49e/'
            },
            {
                year: 2022,
                provider: 'Origamid',
                title: 'CSS Avançado - Posicionamento',
                url: 'https://origamid.com/certificate/4a327cd4'
            },
            {
                year: 2022,
                provider: 'Udemy',
                title: 'Angular, .NET Core Web API e Angular Material',
                url: 'https://www.udemy.com/certificate/UC-e7f07581-57d6-4058-92a4-b5957aca04bb/'
            },
            {
                year: 2022,
                provider: 'Udemy',
                title: 'Visual Basic .NET',
                url: 'https://www.udemy.com/certificate/UC-8b920f6e-2be6-43cd-8bef-0c570ae6953f/'
            },
            {
                year: 2022,
                provider: 'Origamid',
                title: 'CSS Grid Layout',
                url: 'https://www.origamid.com/certificate/e6802513/'
            },
            {
                year: 2022,
                provider: 'Origamid',
                title: 'JavaScript 6',
                url: 'https://www.origamid.com/certificate/94334673/'
            },
            {
                year: 2022,
                provider: 'Origamid',
                title: 'Tipografia Avançada',
                url: 'https://www.origamid.com/certificate/35337941/'
            },
            {
                year: 2022,
                provider: 'Origamid',
                title: 'UI Design Avançado',
                url: 'https://www.origamid.com/certificate/fa5a49b2/'
            },
            {
                year: 2022,
                provider: 'Origamid',
                title: 'UX Design Heurísticas',
                url: 'https://www.origamid.com/certificate/4588ce5f/'
            },
            {
                year: 2022,
                provider: 'Origamid',
                title: 'Vue.js 2',
                url: 'https://www.origamid.com/certificate/a9b1a678/'
            },
            {
                year: 2022,
                provider: 'Origamid',
                title: 'WordPress Como CMS',
                url: 'https://www.origamid.com/certificate/17160626/'
            },
            {
                year: 2022,
                provider: 'Origamid',
                title: 'WordPress REST API',
                url: 'https://www.origamid.com/certificate/b8a4417a/'
            },
            {
                year: 2022,
                provider: 'Origamid',
                title: 'Web Design Completo',
                url: 'https://www.origamid.com/certificate/bf5c8e07/'
            },
            {
                year: 2024,
                provider: 'Udemy',
                title: 'OutSystems Reactive',
                url: 'https://ibm-learning.udemy.com/certificate/UC-2544c926-7e8c-4e4d-bff6-3b1787ed17df/'
            },
            {
                year: 2022,
                provider: 'Udemy',
                title: 'Redux NGRX com Angular',
                url: 'https://www.udemy.com/certificate/UC-bcac8834-2401-440c-a576-1efe16160ab3/'
            },
        ];
    }

    getCertificationsCerts(): Certification[] {
        return [
            {
                year: 2021,
                provider: 'Scrum Alliance',
                title: 'Certificate Scrum Master',
            },
            {
                year: 2020,
                provider: 'CertiProf',
                title: 'DevOps Essentials Professional Certificate',
            },
            {
                year: 2019,
                provider: 'CertiProf',
                title: 'SCRUM Foundation',
                url: 'https://drive.google.com/file/d/1WGaNT5Txv6b8Cmgoi4itL7S4cIzdoHd8/view?usp=drive_link'
            },
        ];
    }
}
