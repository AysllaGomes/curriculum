import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

    @Input()
    canShow: boolean = true;

    constructor() { }

    ngOnInit(): void {}

}
