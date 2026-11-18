import { Experience } from '../shared/models/resume.model';

/** O que muda de um idioma para outro numa experiência: o resto (empresa, datas, stack) vem do pt-BR. */
export type ExperienceTexts = Required<Pick<Experience, 'summary' | 'highlights'>>;

/**
 * Experiências do pt-BR com os textos de outro idioma, pelo nome da empresa.
 * Empresa sem tradução quebra o build: nenhum idioma vai para o ar com texto em português no meio.
 */
export function translateExperiences(experiences: Experience[], texts: Record<string, ExperienceTexts>): Experience[] {
    return experiences.map(e => {
        const translated = texts[e.company];
        if (!translated) throw new Error(`Falta a tradução da experiência "${e.company}"`);
        return { ...e, ...translated };
    });
}
