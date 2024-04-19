import { Component, OnInit } from '@angular/core';

import { Language } from "../../shared/models/language.model";

@Component({
    selector: 'app-pages-languages',
    templateUrl: './languages.component.html',
    styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

    public language: string = 'Idiomas';

    public languages: Language[] = [
        { name: "Português", nameLevel: "Nativo", level: 'C2' },
        { name: "Inglês", nameLevel: "Intermediário", level: 'B1' },
        { name: "Espanhol", nameLevel: "Intermediário", level: 'B1' },
        { name: "Francês", nameLevel: "Básico", level: 'A1' },
        { name: "Eslovaco", nameLevel: "Básico", level: 'A1' }
    ];

    constructor() { }

    ngOnInit(): void {
        this.languages.sort((a, b): number => {
            const levels = { 'C2': 6, 'C1': 5, 'B2': 4, 'B1': 3, 'A2': 2, 'A1': 1 };
            const levelComparison = levels[b.level] - levels[a.level];
            if (levelComparison === 0) {
                return a.nameLevel.localeCompare(b.nameLevel);
            }
            return levelComparison;
        });
    }

}
