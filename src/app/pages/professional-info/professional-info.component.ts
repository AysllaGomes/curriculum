import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-professional-info',
  templateUrl: './professional-info.component.html',
  styleUrls: ['./professional-info.component.scss']
})
export class ProfessionalInfoComponent implements OnInit {

    @Input()
    public name: string;

    @Input()
    public photoUrl: string;

    @Input()
    public phone: string;

    @Input()
    public email: string;

    @Input()
    public address: string;

    constructor() {}

    ngOnInit(): void {}

}
