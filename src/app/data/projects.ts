import { Locale } from '../shared/models/resume.model';
import { PersonalProject } from '../shared/models/personal-project.model';
import REPOS from './github-projects.json';

/**
 * Projetos do site. A LISTA vem do GitHub (scripts/fetch-projects.mjs gera github-projects.json
 * com os repositórios públicos que têm o tópico "portfolio"); aqui ficam só os ajustes:
 * a ordem e a descrição em cada idioma.
 */

/** Dado gravado pelo script de busca. */
export interface GithubProject {
    name: string;
    url: string;
    description: string | null;
    language: string | null;
    topics: string[];
    homepage: string | null;
}

/** Ordem no site. Repositórios fora da lista aparecem depois, em ordem alfabética. */
const ORDER = [
    'figma-context-cache-mcp',
    'pet-health-api',
    'angular-components',
    'red-switch-realistic',
    'interstate-mobility-center',
];

/**
 * Descrição por idioma. Sem entrada aqui, vale a descrição do repositório no GitHub (campo "About"),
 * a mesma em todos os idiomas.
 */
const DESCRIPTIONS: Record<string, Record<Locale, string>> = {
    'figma-context-cache-mcp': {
        'pt-BR': 'Servidor MCP que guarda em cache o contexto de designs do Figma para assistentes de código com IA (Claude Code, Codex): '
            + 'menos chamadas à API, respostas mais rápidas e sincronização sob demanda. TypeScript, com testes em Vitest.',
        en: 'MCP server that caches Figma design context for AI coding assistants (Claude Code, Codex): '
            + 'fewer API calls, faster answers and on-demand sync. TypeScript, tested with Vitest.',
        es: 'Servidor MCP que guarda en caché el contexto de diseños de Figma para asistentes de código con IA (Claude Code, Codex): '
            + 'menos llamadas a la API, respuestas más rápidas y sincronización bajo demanda. TypeScript, con pruebas en Vitest.',
        it: 'Server MCP che memorizza nella cache il contesto dei design di Figma per gli assistenti di programmazione con IA (Claude Code, Codex): '
            + 'meno chiamate all\'API, risposte più rapide e sincronizzazione su richiesta. TypeScript, con test in Vitest.',
    },
    'pet-health-api': {
        'pt-BR': 'API para tutores organizarem a saúde dos pets: vacinas, medicamentos e lembretes automáticos por e-mail. '
            + 'NestJS, Prisma e PostgreSQL, com autenticação JWT, dados isolados por usuário, Swagger e testes unitários e e2e.',
        en: 'API that helps owners manage their pets\' health: vaccines, medication and automatic email reminders. '
            + 'NestJS, Prisma and PostgreSQL, with JWT authentication, per-user data isolation, Swagger and unit and e2e tests.',
        es: 'API para que los tutores organicen la salud de sus mascotas: vacunas, medicamentos y recordatorios automáticos por correo. '
            + 'NestJS, Prisma y PostgreSQL, con autenticación JWT, datos aislados por usuario, Swagger y pruebas unitarias y e2e.',
        it: 'API per aiutare i proprietari a gestire la salute dei loro animali: vaccini, farmaci e promemoria automatici via e-mail. '
            + 'NestJS, Prisma e PostgreSQL, con autenticazione JWT, dati isolati per utente, Swagger e test unitari ed e2e.',
    },
    'angular-components': {
        'pt-BR': 'Componentes de interface reutilizáveis (Dialog, ActionBar, Table, Stepper, Pagination, Toast…) em Angular standalone, '
            + 'com HTML e Sass e sem frameworks de UI: leves, acessíveis e com suporte a temas.',
        en: 'Reusable UI components (Dialog, ActionBar, Table, Stepper, Pagination, Toast…) built with standalone Angular, '
            + 'plain HTML and Sass, no UI frameworks: lightweight, accessible and themeable.',
        es: 'Componentes de interfaz reutilizables (Dialog, ActionBar, Table, Stepper, Pagination, Toast…) en Angular standalone, '
            + 'con HTML y Sass y sin frameworks de UI: ligeros, accesibles y con soporte de temas.',
        it: 'Componenti di interfaccia riutilizzabili (Dialog, ActionBar, Table, Stepper, Pagination, Toast…) in Angular standalone, '
            + 'con HTML e Sass e senza framework di UI: leggeri, accessibili e personalizzabili con i temi.',
    },
    'red-switch-realistic': {
        'pt-BR': 'Experimento: um interruptor de aparência realista feito apenas com CSS.',
        en: 'Experiment: a realistic-looking switch built with CSS only.',
        es: 'Experimento: un interruptor de aspecto realista hecho solo con CSS.',
        it: 'Esperimento: un interruttore dall\'aspetto realistico realizzato solo con CSS.',
    },
    'interstate-mobility-center': {
        'pt-BR': 'Aplicativo para planejar e reservar viagens interestaduais: destinos, opções de ônibus e trem, horários e preços, '
            + 'com reserva e pagamento no próprio app.',
        en: 'App for planning and booking interstate trips: destinations, bus and train options, schedules and prices, '
            + 'with booking and payment in the app.',
        es: 'Aplicación para planificar y reservar viajes interestatales: destinos, opciones de autobús y tren, horarios y precios, '
            + 'con reserva y pago en la propia aplicación.',
        it: 'App per pianificare e prenotare viaggi interstatali: destinazioni, opzioni di autobus e treno, orari e prezzi, '
            + 'con prenotazione e pagamento direttamente nell\'app.',
    },
};

const ACRONYMS = new Set(['api', 'mcp', 'ui', 'css', 'cli', 'sdk']);

/** "pet-health-api" → "Pet Health API" */
export function projectTitle(repoName: string): string {
    return repoName
        .split(/[-_]/)
        .filter(Boolean)
        .map(w => (ACRONYMS.has(w.toLowerCase()) ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)))
        .join(' ');
}

/** Junta a lista do GitHub com a ordem e os textos do idioma. */
export function buildProjects(repos: readonly GithubProject[], locale: Locale): PersonalProject[] {
    const rank = (name: string) => (ORDER.includes(name) ? ORDER.indexOf(name) : ORDER.length);
    return [...repos]
        .sort((a, b) => rank(a.name) - rank(b.name) || a.name.localeCompare(b.name))
        .map(repo => {
            const description = DESCRIPTIONS[repo.name]?.[locale] ?? repo.description;
            return {
                name: projectTitle(repo.name),
                url: repo.url,
                ...(description ? { description } : {}),
                ...(repo.language ? { language: repo.language } : {}),
                topics: repo.topics,
                ...(repo.homepage ? { homepage: repo.homepage } : {}),
            };
        });
}

/** Projetos do site no idioma pedido (usado pelos arquivos de conteúdo de cada idioma). */
export function projectsFor(locale: Locale): PersonalProject[] {
    return buildProjects(REPOS, locale);
}
