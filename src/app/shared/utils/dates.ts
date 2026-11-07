import { Experience, Locale, YearMonth } from '../models/resume.model';

interface Parsed { year: number; month: number }

/** `2022-06` → { year: 2022, month: 6 }. Lança erro se o texto não for uma data válida. */
export function parseYearMonth(value: YearMonth): Parsed {
    const match = /^(\d{4})-(\d{2})$/.exec(value);
    const year = Number(match?.[1]);
    const month = Number(match?.[2]);
    if (!match || month < 1 || month > 12) {
        throw new Error(`Data inválida: "${value}" (esperado AAAA-MM)`);
    }
    return { year, month };
}

/** Mês corrente, no fuso local. */
export function currentYearMonth(date = new Date()): YearMonth {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}` as YearMonth;
}

/** Número de meses de `start` até `end`, contando os dois meses (jun–dez = 7). */
export function monthsBetween(start: YearMonth, end: YearMonth): number {
    const a = parseYearMonth(start);
    const b = parseYearMonth(end);
    return (b.year - a.year) * 12 + (b.month - a.month) + 1;
}

/** "Junho 2022" (estilo `long`) ou "Jun 2022" (estilo `short`), com o nome do mês no idioma pedido. */
export function formatYearMonth(value: YearMonth, locale: Locale, style: 'long' | 'short' = 'long'): string {
    const { year, month } = parseYearMonth(value);
    const name = new Intl.DateTimeFormat(locale, { month: style, timeZone: 'UTC' })
        .format(new Date(Date.UTC(year, month - 1, 1)))
        .replace('.', '');
    return `${name.charAt(0).toLocaleUpperCase(locale)}${name.slice(1)} ${year}`;
}

const DURATION_WORDS: Record<Locale, { year: [string, string]; month: [string, string]; and: string }> = {
    'pt-BR': { year: ['ano', 'anos'], month: ['mês', 'meses'], and: 'e' },
};

/** 43 → "3 anos e 7 meses"; 12 → "1 ano"; 6 → "6 meses". */
export function formatDuration(months: number, locale: Locale): string {
    const words = DURATION_WORDS[locale];
    const plural = new Intl.PluralRules(locale);
    const unit = (n: number, [one, other]: [string, string]) => `${n} ${plural.select(n) === 'one' ? one : other}`;

    const years = Math.floor(months / 12);
    const rest = months % 12;
    const parts = [years ? unit(years, words.year) : '', rest ? unit(rest, words.month) : ''].filter(Boolean);
    return parts.join(` ${words.and} `);
}

/** Duração de uma experiência (até `today` quando ainda é o emprego atual). */
export function experienceMonths(experience: Experience, today: YearMonth = currentYearMonth()): number {
    return monthsBetween(experience.start, experience.end ?? today);
}

/** Anos completos desde o início da primeira experiência. */
export function yearsOfExperience(experiences: Experience[], today: YearMonth = currentYearMonth()): number {
    if (!experiences.length) return 0;
    const first = experiences.map(e => e.start).sort()[0];
    return Math.floor((monthsBetween(first, today) - 1) / 12);
}
