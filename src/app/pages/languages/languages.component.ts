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
        { name: "Português", level: "Nativo" },
        { name: "Inglês", level: "Intermediário" },
        { name: "Espanhol", level: "Intermediário" },
        { name: "Francês", level: "Básico" },
        { name: "Eslovaco", level: "Básico" }
    ];

    constructor() {}

    ngOnInit(): void {}

}
