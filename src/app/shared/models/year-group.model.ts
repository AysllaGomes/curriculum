import { Certification } from "./certification.model";

export interface YearGroup {
    year: number;
    certifications: Certification[];
    expanded?: boolean;
}
