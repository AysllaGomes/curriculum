import { Component, inject } from '@angular/core';

import { LABELS } from '../../data/labels';
import { RESUME } from '../../data/resume';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
    protected readonly labels = inject(LABELS);
    protected readonly profile = inject(RESUME).profile;
}
