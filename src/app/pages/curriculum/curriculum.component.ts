import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pages-curriculum',
    templateUrl: './curriculum.component.html',
    styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

    public language = 'Idiomas';

    public name = 'Ayslla Caroline Prates Gomes';

    public photoUrl = '../../assets/images/professional/Aysh_Caroline.png';

    public phone = '(61) 98207-2218';

    public email = 'ayslla.gomes@outlook.com';

    public address = 'Planaltina/GO';

    public resume = 'Resumo';

    public descriptionResume = `
        Como Arquiteta de Software, estou em constante busca pelo sucesso profissional, alimentada pela minha dedicação, paixão pelo aprendizado e pela minha exigência pessoal.
        Sou uma estudiosa incansável, sempre pronta para mergulhar em novas tecnologias e encarar desafios estimulantes.
        A cada obstáculo, vejo uma oportunidade de crescimento e superação.
        Determinada e comprometida, estou pronta para enfrentar qualquer desafio que a carreira me apresentar.
    `;

    constructor() {}

    ngOnInit(): void {}

}
