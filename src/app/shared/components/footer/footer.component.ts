import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-pages-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [NgOptimizedImage]
})
export class FooterComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {}

}
