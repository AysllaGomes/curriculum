import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    public about = 'Sobre';

    public resume = `
        Durante os últimos 25 anos, tenho consolidado minha carreira na área de Tecnologia da Informação, enquanto estabeleço minha vida em Brasília. Minha trajetória profissional tem sido marcada por uma ampla experiência no desenvolvimento de software, combinada com um papel ativo como Scrum Master, liderando equipes de desenvolvimento. Estou comprometida em buscar constantemente o aprimoramento profissional e o crescimento pessoal, alimentada por uma paixão pela inovação e pelo progresso tecnológico.
    `;

    constructor() { }

    ngOnInit(): void {}

}
