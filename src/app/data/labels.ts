import { InjectionToken, inject } from '@angular/core';

import { Locale } from '../shared/models/resume.model';
import { LOCALE } from './resume';

/** Textos fixos da interface (títulos, botões, menus). O conteúdo do currículo fica em pt-BR.ts. */
export interface Labels {
    skipToContent: string;
    /** Avisa leitores de tela que o link abre outra aba */
    newTab: string;
    nav: { label: string; menu: string; experience: string; projects: string; skills: string; education: string; contact: string };
    hero: { at: string; contact: string; projects: string; photoAlt: string };
    about: { title: string; years: string; companies: string; courses: string; certifications: string };
    experience: { title: string; current: string; client: string };
    projects: { title: string; allOnGithub: string; viewCode: string; readMore: string; readLess: string };
    skills: { title: string };
    education: { title: string; degree: string; courses: string; course: { one: string; other: string } };
    certifications: { title: string; viewCertificate: string };
    languages: { title: string };
    contact: { title: string; email: string };
    footer: { rights: string };
}

const PT_BR: Labels = {
    skipToContent: 'Pular para o conteúdo',
    newTab: '(abre em nova aba)',
    nav: {
        label: 'Seções', menu: 'Menu',
        experience: 'Experiência', projects: 'Projetos', skills: 'Competências', education: 'Formação', contact: 'Contato',
    },
    hero: { at: 'na', contact: 'Entrar em contato', projects: 'Ver projetos', photoAlt: 'Foto de' },
    about: {
        title: 'Sobre mim',
        years: 'anos de experiência', companies: 'empresas', courses: 'cursos de especialização', certifications: 'certificações',
    },
    experience: { title: 'Experiência', current: 'Atual', client: 'Cliente' },
    projects: { title: 'Projetos', allOnGithub: 'Todos no GitHub', viewCode: 'Ver código', readMore: 'Ler mais', readLess: 'Mostrar menos' },
    skills: { title: 'Competências' },
    education: { title: 'Formação', degree: 'Graduação', courses: 'Especializações', course: { one: 'curso', other: 'cursos' } },
    certifications: { title: 'Certificações', viewCertificate: 'Ver certificado' },
    languages: { title: 'Idiomas' },
    contact: { title: 'Vamos conversar?', email: 'Enviar e-mail' },
    footer: { rights: 'Todos os direitos reservados.' },
};

export const ALL_LABELS: Record<Locale, Labels> = {
    'pt-BR': PT_BR,
};

export const LABELS = new InjectionToken<Labels>('LABELS', {
    providedIn: 'root',
    factory: () => ALL_LABELS[inject(LOCALE)],
});
