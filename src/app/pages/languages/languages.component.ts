import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pages-languages',
    templateUrl: './languages.component.html',
    styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

    public language = 'Idiomas';

    constructor() {}

    ngOnInit(): void {}

}
