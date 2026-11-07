import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-pages-professional-info',
    templateUrl: './professional-info.component.html',
    styleUrls: ['./professional-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [NgOptimizedImage]
})
export class ProfessionalInfoComponent implements OnInit {

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

    constructor() {}

    ngOnInit(): void {}

}
