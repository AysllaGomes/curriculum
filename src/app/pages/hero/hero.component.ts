import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { LABELS } from '../../data/labels';
import { LOCALE, RESUME } from '../../data/resume';
import { displayUrl } from '../../shared/utils/url';
import { fillYears } from '../../shared/utils/dates';
import { LOCALES, PAGE_PATH, cvPath } from '../../data/locales';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
    imports: [NgOptimizedImage],
})
export class HeroComponent {
    private readonly resume = inject(RESUME);
    protected readonly labels = inject(LABELS);
    protected readonly profile = this.resume.profile;
    protected readonly page = inject(PAGE_PATH);
    private readonly locale = inject(LOCALE);
    /** Na impressão: endereços escritos e foto conforme o idioma (ver LOCALES) */
    protected readonly linkedin = displayUrl(this.profile.links.linkedin);
    protected readonly github = displayUrl(this.profile.links.github);
    private readonly option = LOCALES.find(o => o.locale === this.locale) ?? LOCALES[0];
    protected readonly printPhoto = this.option.printPhoto;
    /** PDF do idioma, gerado no build (scripts/pdf.mjs) */
    protected readonly cv = cvPath(this.option);
    /** Frase de abertura com os anos de experiência calculados */
    protected readonly headline = fillYears(this.profile.headline, this.resume.experiences);

    /** "Arquiteta Front-end na Mirante Tecnologia" — a empresa é a da experiência sem data de fim */
    protected readonly badge = [this.profile.role, ...this.currentCompany()].join(' ');

    private currentCompany(): string[] {
        const company = this.resume.experiences.find(e => !e.end)?.company;
        return company ? [this.labels.hero.at, company] : [];
    }
}
