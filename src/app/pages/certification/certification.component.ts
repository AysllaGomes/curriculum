import { Component, inject } from '@angular/core';

import { Certification } from "../../shared/models/certification.model";
import { LABELS } from '../../data/labels';
import { RESUME } from '../../data/resume';

@Component({
    selector: 'app-pages-certification',
    templateUrl: './certification.component.html',
    styleUrls: ['./certification.component.scss'] })
export class CertificationComponent {
    protected readonly labels = inject(LABELS);

    /** Da mais recente para a mais antiga */
    public certifications: Certification[] = [...inject(RESUME).certifications].sort((a, b) => b.year - a.year);
}
