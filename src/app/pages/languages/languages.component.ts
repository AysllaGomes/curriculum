import { Component, inject } from '@angular/core';

import { CefrLevel, Language } from "../../shared/models/language.model";
import { RESUME } from '../../data/resume';

const LEVELS: Record<CefrLevel, number> = { 'C2': 6, 'C1': 5, 'B2': 4, 'B1': 3, 'A2': 2, 'A1': 1 };

@Component({
    selector: 'app-pages-languages',
    templateUrl: './languages.component.html',
    styleUrls: ['./languages.component.scss'] })
export class LanguagesComponent {
    public language = 'Idiomas';

    /** Do nível mais alto (C2) para o mais baixo (A1) */
    public languages: Language[] = [...inject(RESUME).languages].sort((a, b): number =>
        LEVELS[b.level] - LEVELS[a.level] || a.nameLevel.localeCompare(b.nameLevel));
}
