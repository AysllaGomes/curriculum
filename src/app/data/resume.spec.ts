import { RESUMES } from './resume';
import { RESUME_PT_BR } from './pt-BR';
import { Locale, Resume } from '../shared/models/resume.model';
import { monthsBetween, parseYearMonth } from '../shared/utils/dates';

const locales = Object.keys(RESUMES) as Locale[];

describe.each(locales)('Dados do currículo (%s)', (locale) => {
    const resume: Resume = RESUMES[locale];

    it('toda experiência tem datas válidas (AAAA-MM)', () => {
        for (const e of resume.experiences) {
            expect(() => parseYearMonth(e.start), e.company).not.toThrow();
            if (e.end) expect(() => parseYearMonth(e.end!), e.company).not.toThrow();
        }
    });

    it('início nunca é depois do fim', () => {
        for (const e of resume.experiences.filter(x => x.end)) {
            expect(monthsBetween(e.start, e.end!), `${e.company}: ${e.start} – ${e.end}`).toBeGreaterThan(0);
        }
    });

    it('experiências da mais recente para a mais antiga, com no máximo um emprego atual', () => {
        const inicios = resume.experiences.map(e => e.start);
        expect(inicios).toEqual([...inicios].sort().reverse());
        expect(resume.experiences.filter(e => !e.end).length).toBeLessThanOrEqual(1);
    });

    it('links são https', () => {
        const urls = [
            resume.profile.photoUrl, resume.profile.links.linkedin, resume.profile.links.github,
            ...resume.projects.map(p => p.url),
            ...[...resume.courses, ...resume.certifications].flatMap(c => c.url ?? []),
            ...resume.experiences.flatMap(e => e.logoUrl ?? []),
        ];
        for (const url of urls) expect(url).toMatch(/^https:\/\//);
    });

    it('nenhum texto vazio', () => {
        const strings = (value: unknown, path: string): [string, string][] =>
            typeof value === 'string' ? [[path, value]]
            : value && typeof value === 'object' ? Object.entries(value).flatMap(([k, v]) => strings(v, `${path}.${k}`))
            : [];
        for (const [path, text] of strings(resume, locale)) expect(text.trim(), path).not.toBe('');
    });
});

/** Lista os caminhos de todos os campos, com o tamanho de cada lista: `experiences[5]`, `experiences[0].company`… */
function shape(value: unknown, path = ''): string[] {
    if (Array.isArray(value)) return [`${path}[${value.length}]`, ...value.flatMap((v, i) => shape(v, `${path}[${i}]`))];
    if (value && typeof value === 'object') {
        return Object.entries(value).flatMap(([k, v]) => shape(v, path ? `${path}.${k}` : k));
    }
    return [path];
}

/**
 * Toda tradução precisa ter exatamente a mesma estrutura do pt-BR:
 * mesmos campos e mesmas quantidades de itens. Assim um idioma nunca vai para o ar com algo faltando.
 */
describe('Traduções × pt-BR', () => {
    it.each(locales)('%s tem os mesmos campos e quantidades do pt-BR', (locale) => {
        expect(shape(RESUMES[locale])).toEqual(shape(RESUME_PT_BR));
    });
});
