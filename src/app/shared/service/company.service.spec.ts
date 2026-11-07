import { TestBed } from '@angular/core/testing';

import { CompanyService } from './company.service';

const MESES: Record<string, number> = {
    janeiro: 1, fevereiro: 2, março: 3, abril: 4, maio: 5, junho: 6,
    julho: 7, agosto: 8, setembro: 9, outubro: 10, novembro: 11, dezembro: 12,
};

/** "Dezembro 2020" → 202012; "Atualmente" → Infinity */
function toNumber(texto: string): number {
    const t = texto.trim().toLowerCase();
    if (t === 'atualmente') return Infinity;
    const [mes, ano] = t.split(/\s+/);
    const m = MESES[mes];
    if (!m || !/^\d{4}$/.test(ano)) throw new Error(`Data inválida: "${texto}"`);
    return Number(ano) * 100 + m;
}

describe('CompanyService (dados das experiências)', () => {
    const companies = () => TestBed.inject(CompanyService).getCompanies();

    it('toda experiência tem data no formato "Mês AAAA - Mês AAAA" ou "... - Atualmente"', () => {
        for (const c of companies()) {
            const partes = c.date.split(' - ');
            expect(partes, c.company).toHaveLength(2);
            expect(() => partes.map(toNumber), c.company).not.toThrow();
        }
    });

    it('início nunca é depois do fim', () => {
        for (const c of companies()) {
            const [inicio, fim] = c.date.split(' - ').map(toNumber);
            expect(inicio, `${c.company}: ${c.date}`).toBeLessThanOrEqual(fim);
        }
    });

    it('lista da mais recente para a mais antiga, com no máximo um emprego atual', () => {
        const inicios = companies().map(c => toNumber(c.date.split(' - ')[0]));
        expect(inicios).toEqual([...inicios].sort((a, b) => b - a));
        expect(companies().filter(c => c.date.endsWith('Atualmente')).length).toBeLessThanOrEqual(1);
    });
});
