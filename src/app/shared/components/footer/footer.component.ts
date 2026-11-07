import { Component, inject } from '@angular/core';

import { LABELS } from '../../../data/labels';
import { RESUME } from '../../../data/resume';

@Component({
    selector: 'app-pages-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    protected readonly labels = inject(LABELS);
    protected readonly name = inject(RESUME).profile.name;
    protected readonly year = new Date().getFullYear();
}
