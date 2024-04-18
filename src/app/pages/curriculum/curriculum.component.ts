import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-curriculum',
    templateUrl: './curriculum.component.html',
    styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

    public resume = 'Resumo';

    public about = `
        Durante os últimos 25 anos, tenho consolidado minha carreira na área de Tecnologia da Informação, enquanto estabeleço minha vida em Brasília. Minha trajetória profissional tem sido marcada por uma ampla experiência no desenvolvimento de software, combinada com um papel ativo como Scrum Master, liderando equipes de desenvolvimento. Estou comprometida em buscar constantemente o aprimoramento profissional e o crescimento pessoal, alimentada por uma paixão pela inovação e pelo progresso tecnológico.
    `;

    public back = 'Back-End';

    public front = 'Front-End';

    public database = 'Banco de Dados';

    constructor() {}

    ngOnInit(): void {}

}
