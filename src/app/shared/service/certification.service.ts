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
                url: '../../../assets/certifications/Kadoche/Win7_Digitacao_PackOffice_CorelDraw_3DSMax_AutoCAD.pdf'
            },
            {
                year: 2013,
                provider: 'Kadoche',
                title: 'Montagem e Configuração de Microcomputadores & Configurações de Softwares',
                url: '../../../assets/certifications/Kadoche/Montagem_e_Configuracao_de_Microcomputadores_e_Instalacoes_de_Softwares.pdf'
            },
            {
                year: 2018,
                provider: 'Udemy',
                title: 'HTML5, CCS3 e Javascript',
                url: '../../../assets/certifications/Udemy/HTML_5_CSS_3_Javascript.pdf'
            },
            {
                year: 2019,
                provider: 'Udemy',
                title: 'Firebase',
                url: '../../../assets/certifications/Udemy/Firebase.pdf'
            },
            {
                year: 2019,
                provider: 'CertiProf',
                title: 'SCRUM Foundation',
                url: '../../../assets/certifications/CertiProf/Certificate_SCRUM.pdf'
            },
            {
                year: 2021,
                provider: 'Origamid',
                title: 'Automação Front com o NPM',
                url: '../../../assets/certifications/Origamid/Automacao_Front_End_com_NPM.pdf'
            },
            {
                year: 2021,
                provider: 'Origamid',
                title: 'CSS com SASS',
                url: '../../../assets/certifications/Origamid/CSS_SASS.pdf'
            },
            {
                year: 2021,
                provider: 'Origamid',
                title: 'CSS Flexbox',
                url: '../../../assets/certifications/Origamid/CSS_Flexbox.pdf'
            },
            {
                year: 2022,
                provider: 'Origamid',
                title: 'CSS Avançado - Posicionamento',
                url: '../../../assets/certifications/Origamid/CSS_Avancado_Posicionamento.pdf'
            },
            {
                year: 2022,
                provider: 'Udemy',
                title: 'Angular, .NET Core Web API e Angular Material',
                url: '../../../assets/certifications/Udemy/Angular_.NET_Core_Web_API_e_Angular_Material.pdf'
            },
            {
                year: 2022,
                provider: 'Udemy',
                title: 'Visual Basic .NET',
                url: '../../../assets/certifications/Udemy/Visual_Basic_.NET.pdf'
            },
            {
                year: 2022,
                provider: 'Origamid',
                title: 'CSS Grid Layout',
                url: '../../../assets/certifications/Origamid/CSS_Grid_Layout.pdf'
            },
            {
                year: 2022,
                provider: 'Origamid',
                title: 'JavaScript 6',
                url: '../../../assets/certifications/Origamid/JavaScript_ES6.pdf'
            },
            {
                year: 2022,
                provider: 'Origamid',
                title: 'Tipografia Avançada',
                url: '../../../assets/certifications/Origamid/Tipografia_Avancada.pdf'
            },
            {
                year: 2022,
                provider: 'Origamid',
                title: 'UI Design Avançado',
                url: '../../../assets/certifications/Origamid/UI_Design_Avancado.pdf'
            },
            {
                year: 2022,
                provider: 'Origamid',
                title: 'UX Design Heurísticas',
                url: '../../../assets/certifications/Origamid/UX_Design_Heuristicas.pdf'
            },
            {
                year: 2022,
                provider: 'Origamid',
                title: 'Vue.js 2',
                url: '../../../assets/certifications/Origamid/Vuejs.pdf'
            },
            {
                year: 2022,
                provider: 'Origamid',
                title: 'WordPress Como CMS',
                url: '../../../assets/certifications/Origamid/WordPress_CMS.pdf'
            },
            {
                year: 2022,
                provider: 'Origamid',
                title: 'WordPress REST API',
                url: '../../../assets/certifications/Origamid/WordPress_REST_API.pdf'
            },
            {
                year: 2022,
                provider: 'Origamid',
                title: 'Web Design Completo',
                url: '../../../assets/certifications/Origamid/Web_Design_Completo.pdf'
            },
            {
                year: 2024,
                provider: 'Udemy',
                title: 'OutSystems Reactive',
                url: '../../../assets/certifications/Udemy/Ayslla_Gomes_Udemy_OutSystems_Reactive.pdf'
            },
        ];
    }

    getCertificationsCerts(): Certification[] {
        return [
            {
                year: 2019,
                provider: 'CertiProf',
                title: 'SCRUM Foundation',
                url: '../../../assets/certifications/CertiProf/Certificate_SCRUM.pdf'
            },
        ];
    }
}
