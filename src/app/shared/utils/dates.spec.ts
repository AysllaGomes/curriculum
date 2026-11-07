import {
    currentYearMonth, experienceMonths, formatDuration, formatYearMonth, monthsBetween, parseYearMonth, yearsOfExperience,
} from './dates';
import { YearMonth } from '../models/resume.model';

describe('datas do currículo', () => {
    it('lê AAAA-MM e rejeita datas inválidas', () => {
        expect(parseYearMonth('2022-06')).toEqual({ year: 2022, month: 6 });
        expect(() => parseYearMonth('2022-13' as YearMonth)).toThrow(/inválida/);
        expect(() => parseYearMonth('jun/2022' as YearMonth)).toThrow(/inválida/);
    });

    it('mês corrente', () => {
        expect(currentYearMonth(new Date(2026, 10, 7))).toBe('2026-11');
        expect(currentYearMonth(new Date(2027, 0, 31))).toBe('2027-01');
    });

    it('conta os meses incluindo início e fim', () => {
        expect(monthsBetween('2022-06', '2025-12')).toBe(43);
        expect(monthsBetween('2018-09', '2019-02')).toBe(6);
        expect(monthsBetween('2026-01', '2026-01')).toBe(1);
    });

    it('formata mês e ano em português', () => {
        expect(formatYearMonth('2022-06', 'pt-BR')).toBe('Junho 2022');
        expect(formatYearMonth('2020-12', 'pt-BR', 'short')).toBe('Dez 2020');
    });

    it('formata a duração com singular e plural', () => {
        expect(formatDuration(43, 'pt-BR')).toBe('3 anos e 7 meses');
        expect(formatDuration(12, 'pt-BR')).toBe('1 ano');
        expect(formatDuration(13, 'pt-BR')).toBe('1 ano e 1 mês');
        expect(formatDuration(6, 'pt-BR')).toBe('6 meses');
    });

    it('formata datas e durações em inglês, espanhol e italiano', () => {
        expect(formatYearMonth('2022-06', 'en', 'short')).toBe('Jun 2022');
        expect(formatYearMonth('2025-12', 'es', 'short')).toBe('Dic 2025');
        expect(formatYearMonth('2022-06', 'it', 'short')).toBe('Giu 2022');
        expect(formatDuration(43, 'en')).toBe('3 years and 7 months');
        expect(formatDuration(13, 'en')).toBe('1 year and 1 month');
        expect(formatDuration(43, 'es')).toBe('3 años y 7 meses');
        expect(formatDuration(1, 'es')).toBe('1 mes');
        expect(formatDuration(43, 'it')).toBe('3 anni e 7 mesi');
        expect(formatDuration(12, 'it')).toBe('1 anno');
    });

    it('emprego atual conta até hoje', () => {
        expect(experienceMonths({ company: 'X', start: '2026-01' }, '2026-11')).toBe(11);
        expect(experienceMonths({ company: 'X', start: '2026-01', end: '2026-03' }, '2026-11')).toBe(3);
    });

    it('anos completos de experiência a partir da primeira', () => {
        const experiencias = [
            { company: 'B', start: '2022-06' as YearMonth, end: '2025-12' as YearMonth },
            { company: 'A', start: '2018-09' as YearMonth, end: '2019-02' as YearMonth },
        ];
        expect(yearsOfExperience(experiencias, '2026-11')).toBe(8);
        expect(yearsOfExperience(experiencias, '2026-08')).toBe(7);
        expect(yearsOfExperience([], '2026-11')).toBe(0);
    });
});
