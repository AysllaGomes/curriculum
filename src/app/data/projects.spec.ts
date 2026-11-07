import { GithubProject, buildProjects, projectTitle } from './projects';
import REPOS from './github-projects.json';

const repo = (name: string, extra: Partial<GithubProject> = {}): GithubProject => ({
    name, url: `https://github.com/AysllaGomes/${name}`, description: null, language: null, topics: [], homepage: null, ...extra,
});

describe('Projetos do GitHub', () => {
    it('nome do repositório vira título legível, com siglas em maiúsculas', () => {
        expect(projectTitle('pet-health-api')).toBe('Pet Health API');
        expect(projectTitle('figma-context-cache-mcp')).toBe('Figma Context Cache MCP');
        expect(projectTitle('red-switch-realistic')).toBe('Red Switch Realistic');
    });

    it('segue a ordem definida; repositórios novos vão para o fim, em ordem alfabética', () => {
        const nomes = buildProjects([repo('zeta'), repo('pet-health-api'), repo('alfa'), repo('figma-context-cache-mcp')], 'pt-BR')
            .map(p => p.name);
        expect(nomes).toEqual(['Figma Context Cache MCP', 'Pet Health API', 'Alfa', 'Zeta']);
    });

    it('descrição do idioma tem prioridade; sem ela vale a do GitHub; sem nenhuma, fica sem descrição', () => {
        const [traduzido, doGithub, semNada] = buildProjects([
            repo('pet-health-api', { description: 'texto do GitHub' }),
            repo('novo', { description: 'Descrição no GitHub' }),
            repo('vazio'),
        ], 'en');
        expect(traduzido.description).toMatch(/^API that helps/);
        expect(doGithub.description).toBe('Descrição no GitHub');
        expect(semNada).not.toHaveProperty('description');
    });

    it('linguagem e demo só entram quando existem', () => {
        const [com, sem] = buildProjects([
            repo('a', { language: 'TypeScript', homepage: 'https://x.dev/', topics: ['angular'] }),
            repo('b'),
        ], 'pt-BR');
        expect(com).toMatchObject({ language: 'TypeScript', homepage: 'https://x.dev/', topics: ['angular'] });
        expect(sem).not.toHaveProperty('language');
        expect(sem).not.toHaveProperty('homepage');
    });

    it('a lista salva tem só repositórios da conta, com links https', () => {
        expect(REPOS.length).toBeGreaterThan(0);
        for (const r of REPOS) {
            expect(r.url).toMatch(/^https:\/\/github\.com\/AysllaGomes\//);
            if (r.homepage) expect(r.homepage).toMatch(/^https:\/\//);
        }
    });
});
