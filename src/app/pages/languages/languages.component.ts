import { Component, inject } from '@angular/core';

import { CefrLevel } from "../../shared/models/language.model";
import { LABELS } from '../../data/labels';
import { RESUME } from '../../data/resume';

const LEVELS: Record<CefrLevel, number> = { 'C2': 6, 'C1': 5, 'B2': 4, 'B1': 3, 'A2': 2, 'A1': 1 };

@Component({
    selector: 'app-pages-languages',
    templateUrl: './languages.component.html',
    styleUrls: ['./languages.component.scss'] })
export class LanguagesComponent {
    protected readonly labels = inject(LABELS);

    /** Do nível mais alto (C2) para o mais baixo (A1); `bars` = 6 segmentos, preenchidos até o nível */
    public languages = [...inject(RESUME).languages]
        .sort((a, b): number => LEVELS[b.level] - LEVELS[a.level] || a.nameLevel.localeCompare(b.nameLevel))
        .map(l => ({ ...l, bars: [1, 2, 3, 4, 5, 6].map(n => n <= LEVELS[l.level]) }));
}
