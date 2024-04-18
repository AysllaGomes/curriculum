import { Injectable } from "@angular/core";

import { AcademicEducationModel } from "../models/academic-education.model";

@Injectable({
    providedIn: 'root'
})
export class AcademicEducationService {
    getAcademicEducations(): AcademicEducationModel[] {
        return [
            {
                period: '2018 - 2022',
                institution: 'Centro Universitário do Distrito Federal | UDF',
                course: 'Sistemas de Informação',
                url: 'https://example.com/sistemas-de-informacao'
            }
        ];
    }
}
