import { Component, inject } from '@angular/core';

import { LABELS } from '../../data/labels';
import { LOCALE, RESUME } from '../../data/resume';
import { displayUrl } from '../../shared/utils/url';
import { LOCALES, localeUrl } from '../../data/locales';

import { YearGroup } from "../../shared/models/year-group.model";
import { Certification } from "../../shared/models/certification.model";

@Component({
    selector: 'app-pages-specialization',
    templateUrl: './specialization.component.html',
    styleUrls: ['./specialization.component.scss'],
})
export class SpecializationComponent {
    protected readonly labels = inject(LABELS);
    private readonly locale = inject(LOCALE);
    private readonly plural = new Intl.PluralRules(this.locale);

    /** No papel, a lista de cursos dá lugar ao endereço do site no mesmo idioma */
    protected readonly site = localeUrl(LOCALES.find(o => o.locale === this.locale) ?? LOCALES[0]);
    protected readonly siteText = displayUrl(this.site);

    public certifications: Certification[] = inject(RESUME).courses;

    public groupedCertifications: YearGroup[] = this.groupCertificationsByYear(this.certifications);

    /** "1 curso", "13 cursos" */
    countLabel(count: number): string {
        const { one, other } = this.labels.education.course;
        return `${count} ${this.plural.select(count) === 'one' ? one : other}`;
    }

    groupCertificationsByYear(certifications: Certification[]): YearGroup[] {
        const groupedCertifications: YearGroup[] = [];

        certifications.forEach((certification: Certification): void => {
            const year: number = certification.year;
            const existingGroup: YearGroup | undefined = groupedCertifications.find(group => group.year === year);

            if (existingGroup) {
                existingGroup.certifications.push(certification);
            } else {
                groupedCertifications.push({ year: year, certifications: [certification] });
            }
        });

        groupedCertifications.sort((a, b) => b.year - a.year);

        return groupedCertifications;
    }

    toggleCollapse(year: number): void {
        this.groupedCertifications.forEach(group => {
            if (group.year === year) {
                group.expanded = !group.expanded;
            } else {
                group.expanded = false;
            }
        });
    }
}
