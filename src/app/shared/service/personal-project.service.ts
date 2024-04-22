import { Injectable } from "@angular/core";

import { PersonalProject } from "../models/personal-project.model";

@Injectable({
    providedIn: 'root'
})
export class PersonalProjectService {
    getPersonalProjects(): PersonalProject[] {
        return [
            {
                name: 'Interstate Mobility Center',
                description: 'Interstate',
                url: 'https://github.com/AysllaGomes/interstate-mobility-center',
            },
            {
                name: 'React Hooks',
                description: 'O ojetivo do projeto é realizar customizações com o ciclo de vida do React, deixando-o mais bem perfomático possível. E agregar mais conhecimento para futuras aplicações.',
                url: 'https://github.com/AysllaGomes/react-hooks',
            },
            {
                name: 'UI Controle Financeiro',
                url: 'https://github.com/AysllaGomes/financeiro-ui',
            },
            {
                name: 'Controle Financeiro',
                url: 'https://github.com/AysllaGomes/controle-financeiro',
            },
            {
                name: 'Red Switch',
                url: 'https://github.com/AysllaGomes/red-switch-realistic',
            },
            {
                name: 'API PetShop',
                url: 'https://github.com/AysllaGomes/petshop',
            },
            {
                name: 'Ceep',
                description: 'Aplicativo de notas para Android',
                url: 'https://github.com/AysllaGomes/ceep',
            },
            {
                name: 'Agenda',
                description: 'Aplicativo de agenda para Android',
                url: 'https://github.com/AysllaGomes/agenda',
            },
        ];
    }
}
