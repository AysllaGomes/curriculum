import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    public about = 'Sobre';

    public descriptionResume = `
        Como Arquiteta de Software, estou em constante busca pelo sucesso profissional, alimentada pela minha dedicação, paixão pelo aprendizado e pela minha exigência pessoal.
        Sou uma estudiosa incansável, sempre pronta para mergulhar em novas tecnologias e encarar desafios estimulantes.
        A cada obstáculo, vejo uma oportunidade de crescimento e superação.
        Determinada e comprometida, estou pronta para enfrentar qualquer desafio que a carreira me apresentar.
    `;

    constructor() { }

    ngOnInit(): void {}

}
