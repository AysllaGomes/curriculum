import { Certification } from './certification.model';
import { Language } from './language.model';
import { PersonalProject } from './personal-project.model';
import { Skill } from './skill.model';

/** Idiomas em que o currículo é publicado. */
export type Locale = 'pt-BR' | 'en' | 'es' | 'it';

type Month = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12';

/** Ano e mês no formato `AAAA-MM` (ex.: `2022-06`). O tipo rejeita meses inválidos. */
export type YearMonth = `${number}-${Month}`;

export interface Profile {
    name: string;
    /** Nome curto, usado no título da abertura */
    shortName: string;
    /** Cargo atual, exibido abaixo do nome */
    role: string;
    /**
     * Frase curta de apresentação (abertura do site, descrição da página e prévia de links).
     * `{anos}` vira os anos de experiência calculados a partir das datas (ver `fillYears`).
     */
    headline: string;
    /**
     * Tecnologias principais, numa frase curta. Completam a descrição da página (Google e prévia de links):
     * só a abertura teria menos de 100 caracteres, o mínimo que o LinkedIn recomenda.
     */
    focus: string;
    summary: string;
    email: string;
    city: string;
    photoUrl: string;
    links: { linkedin: string; github: string };
}

/** Um vínculo com uma empresa: nome, período e logo. */
export interface Employment {
    company: string;
    start: YearMonth;
    /** Ausente = emprego atual */
    end?: YearMonth;
    logoUrl?: string;
}

export interface Experience extends Employment {
    /** Cliente ou órgão atendido */
    client?: string;
    /**
     * O mesmo trabalho feito antes por outra empresa, mais recente primeiro
     * (ex.: o Spid, pela EngeSoftware até 2022 e depois pela IBM). Aparece no mesmo cartão, com as datas de cada uma.
     */
    earlier?: Employment[];
    /** Uma frase de contexto: papel, time, produto */
    summary?: string;
    /** O que foi feito e os resultados, um item por linha */
    highlights?: string[];
    /** Tecnologias usadas (iguais em todos os idiomas) */
    stack?: string[];
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
