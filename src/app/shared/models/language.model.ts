export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface Language {
    name: string;
    nameLevel: string;
    /** Nível no Quadro Europeu Comum de Referência (CEFR) */
    level: CefrLevel;
}
