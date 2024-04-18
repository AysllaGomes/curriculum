import { Injectable } from "@angular/core";

import { Company } from "../models/company.model";

@Injectable({
    providedIn: 'root'
})
export class CompanyService {
    getCompanies(): Company[] {
        return [
            {
                company: 'IBM',
                date: 'Junho 2022 - Atualmente',
                position: 'Banco do Brasil',
                logoUrl: '../../../assets/images/logo/ibm.svg',
                logoHeight: 100,
                logoWidth: 100,
            },
            {
                company: 'EngeSoftware Tecnologia S/A',
                date: 'Junho 2022 - Dezembro 2020',
                position: 'Banco do Brasil',
                logoUrl: '../../../assets/images/logo/engesoftware.jpeg',
                logoHeight: 100,
                logoWidth: 100,
            },
            {
                company: 'Life Tecnologia e Consultoria LTDA',
                date: 'Fevereiro 2019 - Junho 2021',
                position: 'Ministério da Economia',
                logoUrl: '../../../assets/images/logo/life_consultoria_tecnologia.webp',
                logoHeight: 100,
                logoWidth: 100,
            },
            {
                company: 'Basis Tecnologia da Informação LTDA',
                date: 'Setembro 2018 - Fevereiro 2019',
                position: 'MDIC, MPOG, FNDE, MCID, MTE',
                logoUrl: '../../../assets/images/logo/basis_tecnologia.jpeg',
                logoHeight: 100,
                logoWidth: 100,
            },
        ];
    }
}
