import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-pages-professional-info',
    templateUrl: './professional-info.component.html',
    styleUrls: ['./professional-info.component.scss'],
    imports: [NgOptimizedImage]
})
export class ProfessionalInfoComponent {
    @Input({ required: true })
    public name!: string;

    @Input({ required: true })
    public photoUrl!: string;

    @Input({ required: true })
    public phone!: string;

    @Input({ required: true })
    public email!: string;

    @Input({ required: true })
    public address!: string;
}
