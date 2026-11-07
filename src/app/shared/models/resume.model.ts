import { Certification } from './certification.model';
import { Language } from './language.model';
import { PersonalProject } from './personal-project.model';
import { Skill } from './skill.model';

/** Idiomas em que o currículo é publicado. */
export type Locale = 'pt-BR';

type Month = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12';

/** Ano e mês no formato `AAAA-MM` (ex.: `2022-06`). O tipo rejeita meses inválidos. */
export type YearMonth = `${number}-${Month}`;

export interface Profile {
    name: string;
    /** Cargo atual, exibido abaixo do nome */
    role: string;
    /** Frase curta de apresentação (abertura do site) */
    headline: string;
    summary: string;
    email: string;
    city: string;
    photoUrl: string;
    links: { linkedin: string; github: string };
}

export interface Experience {
    company: string;
    /** Cliente ou órgão atendido */
    client?: string;
    start: YearMonth;
    /** Ausente = emprego atual */
    end?: YearMonth;
    logoUrl?: string;
}

export interface Education {
    course: string;
    institution: string;
    startYear: number;
    endYear: number;
    url?: string;
}

/** Todo o conteúdo do currículo em um idioma. */
export interface Resume {
    profile: Profile;
    /** Da mais recente para a mais antiga */
    experiences: Experience[];
    projects: PersonalProject[];
    education: Education[];
    /** Cursos livres (seção "Especializações") */
    courses: Certification[];
    certifications: Certification[];
    skillGroups: Skill[];
    languages: Language[];
}
