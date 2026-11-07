import { InjectionToken, inject } from '@angular/core';

import { Locale } from '../shared/models/resume.model';
import { LOCALE } from './resume';

/** Textos fixos da interface (títulos, botões, menus). O conteúdo do currículo fica em pt-BR.ts, en.ts, es.ts e it.ts. */
export interface Labels {
    skipToContent: string;
    /** Avisa leitores de tela que o link abre outra aba */
    newTab: string;
    nav: { label: string; menu: string; experience: string; projects: string; skills: string; education: string; contact: string };
    /** Seletor de idioma no cabeçalho */
    language: { label: string };
    /** Botão de tema claro/escuro (só ícone; o texto é para leitores de tela) */
    theme: { toLight: string; toDark: string };
    hero: { at: string; contact: string; projects: string; photoAlt: string };
    about: { title: string; years: string; companies: string; courses: string; certifications: string };
    experience: { title: string; current: string; client: string };
    projects: { title: string; allOnGithub: string; viewCode: string; viewDemo: string };
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
    language: { label: 'Idioma' },
    theme: { toLight: 'Mudar para o tema claro', toDark: 'Mudar para o tema escuro' },
    hero: { at: 'na', contact: 'Entrar em contato', projects: 'Ver projetos', photoAlt: 'Foto de' },
    about: {
        title: 'Sobre mim',
        years: 'anos de experiência', companies: 'empresas', courses: 'cursos de especialização', certifications: 'certificações',
    },
    experience: { title: 'Experiência', current: 'Atual', client: 'Cliente' },
    projects: { title: 'Projetos', allOnGithub: 'Todos no GitHub', viewCode: 'Ver código', viewDemo: 'Ver demo' },
    skills: { title: 'Competências' },
    education: { title: 'Formação', degree: 'Graduação', courses: 'Especializações', course: { one: 'curso', other: 'cursos' } },
    certifications: { title: 'Certificações', viewCertificate: 'Ver certificado' },
    languages: { title: 'Idiomas' },
    contact: { title: 'Vamos conversar?', email: 'Enviar e-mail' },
    footer: { rights: 'Todos os direitos reservados.' },
};

const EN: Labels = {
    skipToContent: 'Skip to content',
    newTab: '(opens in a new tab)',
    nav: {
        label: 'Sections', menu: 'Menu',
        experience: 'Experience', projects: 'Projects', skills: 'Skills', education: 'Education', contact: 'Contact',
    },
    language: { label: 'Language' },
    theme: { toLight: 'Switch to light theme', toDark: 'Switch to dark theme' },
    hero: { at: 'at', contact: 'Get in touch', projects: 'View projects', photoAlt: 'Photo of' },
    about: {
        title: 'About me',
        years: 'years of experience', companies: 'companies', courses: 'specialization courses', certifications: 'certifications',
    },
    experience: { title: 'Experience', current: 'Present', client: 'Client' },
    projects: { title: 'Projects', allOnGithub: 'All on GitHub', viewCode: 'View code', viewDemo: 'Live demo' },
    skills: { title: 'Skills' },
    education: { title: 'Education', degree: 'Degree', courses: 'Specializations', course: { one: 'course', other: 'courses' } },
    certifications: { title: 'Certifications', viewCertificate: 'View certificate' },
    languages: { title: 'Languages' },
    contact: { title: 'Let\'s talk', email: 'Send email' },
    footer: { rights: 'All rights reserved.' },
};

const ES: Labels = {
    skipToContent: 'Saltar al contenido',
    newTab: '(se abre en una pestaña nueva)',
    nav: {
        label: 'Secciones', menu: 'Menú',
        experience: 'Experiencia', projects: 'Proyectos', skills: 'Competencias', education: 'Formación', contact: 'Contacto',
    },
    language: { label: 'Idioma' },
    theme: { toLight: 'Cambiar al tema claro', toDark: 'Cambiar al tema oscuro' },
    hero: { at: 'en', contact: 'Contactar', projects: 'Ver proyectos', photoAlt: 'Foto de' },
    about: {
        title: 'Sobre mí',
        years: 'años de experiencia', companies: 'empresas', courses: 'cursos de especialización', certifications: 'certificaciones',
    },
    experience: { title: 'Experiencia', current: 'Actual', client: 'Cliente' },
    projects: { title: 'Proyectos', allOnGithub: 'Todos en GitHub', viewCode: 'Ver código', viewDemo: 'Ver demo' },
    skills: { title: 'Competencias' },
    education: { title: 'Formación', degree: 'Grado', courses: 'Especializaciones', course: { one: 'curso', other: 'cursos' } },
    certifications: { title: 'Certificaciones', viewCertificate: 'Ver certificado' },
    languages: { title: 'Idiomas' },
    contact: { title: '¿Hablamos?', email: 'Enviar correo' },
    footer: { rights: 'Todos los derechos reservados.' },
};

const IT: Labels = {
    skipToContent: 'Vai al contenuto',
    newTab: '(si apre in una nuova scheda)',
    nav: {
        label: 'Sezioni', menu: 'Menu',
        experience: 'Esperienza', projects: 'Progetti', skills: 'Competenze', education: 'Formazione', contact: 'Contatti',
    },
    language: { label: 'Lingua' },
    theme: { toLight: 'Passa al tema chiaro', toDark: 'Passa al tema scuro' },
    hero: { at: 'presso', contact: 'Contattami', projects: 'Vedi progetti', photoAlt: 'Foto di' },
    about: {
        title: 'Chi sono',
        years: 'anni di esperienza', companies: 'aziende', courses: 'corsi di specializzazione', certifications: 'certificazioni',
    },
    experience: { title: 'Esperienza', current: 'Attuale', client: 'Cliente' },
    projects: { title: 'Progetti', allOnGithub: 'Tutti su GitHub', viewCode: 'Vedi codice', viewDemo: 'Vedi demo' },
    skills: { title: 'Competenze' },
    education: { title: 'Formazione', degree: 'Laurea', courses: 'Specializzazioni', course: { one: 'corso', other: 'corsi' } },
    certifications: { title: 'Certificazioni', viewCertificate: 'Vedi certificato' },
    languages: { title: 'Lingue' },
    contact: { title: 'Parliamo?', email: 'Invia e-mail' },
    footer: { rights: 'Tutti i diritti riservati.' },
};

export const ALL_LABELS: Record<Locale, Labels> = {
    'pt-BR': PT_BR,
    en: EN,
    es: ES,
    it: IT,
};

export const LABELS = new InjectionToken<Labels>('LABELS', {
    providedIn: 'root',
    factory: () => ALL_LABELS[inject(LOCALE)],
});
