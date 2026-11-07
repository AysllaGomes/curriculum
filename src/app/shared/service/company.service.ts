import { Injectable } from "@angular/core";

import { Company } from "../models/company.model";

@Injectable({
    providedIn: 'root'
})
export class CompanyService {
    getCompanies(): Company[] {
        return [
            {
                company: 'Mirante Tecnologia',
                date: 'Janeiro 2026 - Atualmente',
                position: 'Sicoob',
                logoUrl: 'https://pub-51456c379d4c4f7ba854a6e3e4b02278.r2.dev/logo/mirante_tecnologia.jpg',
                logoHeight: 100,
                logoWidth: 100,
            },
            {
                company: 'IBM',
                date: 'Junho 2022 - Dezembro 2025',
                position: 'Banco do Brasil',
                logoUrl: 'https://pub-51456c379d4c4f7ba854a6e3e4b02278.r2.dev/logo/ibm.svg',
                logoHeight: 100,
                logoWidth: 100,
            },
            {
                company: 'EngeSoftware Tecnologia S/A',
                date: 'Dezembro 2020 - Junho 2022',
                position: 'Banco do Brasil',
                logoUrl: 'https://pub-51456c379d4c4f7ba854a6e3e4b02278.r2.dev/logo/engesoftware.jpeg',
                logoHeight: 100,
                logoWidth: 100,
            },
            {
                company: 'Life Tecnologia e Consultoria LTDA',
                date: 'Fevereiro 2019 - Junho 2021',
                position: 'Ministério da Economia',
                logoUrl: 'https://pub-51456c379d4c4f7ba854a6e3e4b02278.r2.dev/logo/life_consultoria_tecnologia.webp',
                logoHeight: 100,
                logoWidth: 100,
            },
            {
                company: 'Basis Tecnologia da Informação LTDA',
                date: 'Setembro 2018 - Fevereiro 2019',
                position: 'MDIC, MPOG, FNDE, MCID, MTE',
                logoUrl: 'https://pub-51456c379d4c4f7ba854a6e3e4b02278.r2.dev/logo/basis_tecnologia.jpeg',
                logoHeight: 100,
                logoWidth: 100,
            },
        ];
    }
}
