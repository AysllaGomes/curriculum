import { SimpleStorage, safely } from './storage';

export type Theme = 'light' | 'dark';

/** Chave no armazenamento do navegador; o script no <head> do index.html lê a mesma chave antes de pintar. */
const STORAGE_KEY = 'tema';

/** Cor da barra do navegador no celular, igual ao fundo de cada tema (--bg em styles.scss). */
const THEME_COLOR: Record<Theme, string> = { dark: '#0d1117', light: '#f7f8fb' };

/** Tema em uso: o escolhido no botão (data-theme) ou, sem escolha, o do sistema. */
export function currentTheme(doc: Document): Theme {
    const chosen = doc.documentElement.dataset['theme'];
    if (chosen === 'light' || chosen === 'dark') return chosen;
    return doc.defaultView?.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

/** Aplica o tema na página, ajusta a cor da barra do navegador e guarda a escolha. */
export function applyTheme(doc: Document, storage: SimpleStorage | null, theme: Theme): void {
    doc.documentElement.dataset['theme'] = theme;
    doc.querySelectorAll('meta[name="theme-color"]').forEach(m => m.setAttribute('content', THEME_COLOR[theme]));
    safely(() => storage?.setItem(STORAGE_KEY, theme));
}
