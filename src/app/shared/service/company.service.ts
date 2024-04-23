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
                logoUrl: 'https://imagedelivery.net/ecl6S1RtG9d05bcNXhwCCQ/355296e8-0222-4340-78b0-5828b84ca100/public',
                logoHeight: 100,
                logoWidth: 100,
            },
            {
                company: 'EngeSoftware Tecnologia S/A',
                date: 'Junho 2022 - Dezembro 2020',
                position: 'Banco do Brasil',
                logoUrl: 'https://imagedelivery.net/ecl6S1RtG9d05bcNXhwCCQ/a7a214ed-3c5f-43ab-14c6-b33f121e8a00/public',
                logoHeight: 100,
                logoWidth: 100,
            },
            {
                company: 'Life Tecnologia e Consultoria LTDA',
                date: 'Fevereiro 2019 - Junho 2021',
                position: 'Ministério da Economia',
                logoUrl: 'https://imagedelivery.net/ecl6S1RtG9d05bcNXhwCCQ/cd2525e5-f2e3-4916-21c7-69a7861ca000/public',
                logoHeight: 100,
                logoWidth: 100,
            },
            {
                company: 'Basis Tecnologia da Informação LTDA',
                date: 'Setembro 2018 - Fevereiro 2019',
                position: 'MDIC, MPOG, FNDE, MCID, MTE',
                logoUrl: 'https://imagedelivery.net/ecl6S1RtG9d05bcNXhwCCQ/dad70a72-10cb-408b-37dc-b197eda70700/public',
                logoHeight: 100,
                logoWidth: 100,
            },
        ];
    }
}
