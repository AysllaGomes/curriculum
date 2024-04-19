import { Certification } from "./certification.model";

export class YearGroup {
    year: number;
    certifications: Certification[];
    expanded?: boolean;
}
