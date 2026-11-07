// Busca no GitHub os projetos que aparecem no site e grava em src/app/data/github-projects.json.
//
// Entram os repositórios PÚBLICOS da conta que têm o tópico "portfolio".
// Roda antes de cada build:pages (no GitHub Actions usa o token do próprio workflow).
//
//   node scripts/fetch-projects.mjs                 → repositórios com o tópico "portfolio"
//   node scripts/fetch-projects.mjs --repos a,b,c   → só os repositórios indicados (sem depender do tópico)
//
// Se a API falhar ou nenhum repositório tiver o tópico, o arquivo atual é mantido:
// o site nunca vai para o ar sem projetos. Ordem e textos por idioma ficam em src/app/data/projects.ts.
import { readFile, writeFile } from 'node:fs/promises';

const USER = 'AysllaGomes';
const TOPIC = 'portfolio';
const OUT = 'src/app/data/github-projects.json';

const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'curriculum-build',
    'X-GitHub-Api-Version': '2022-11-28',
};
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function get(url) {
    const res = await fetch(url, { headers, signal: AbortSignal.timeout(15_000) });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText} em ${url}`);
    return { body: await res.json(), next: /<([^>]+)>;\s*rel="next"/.exec(res.headers.get('link') ?? '')?.[1] };
}

/** Todos os repositórios públicos da conta (a API devolve no máximo 100 por página). */
async function allRepos() {
    const repos = [];
    let url = `https://api.github.com/users/${USER}/repos?type=owner&per_page=100`;
    while (url) {
        const page = await get(url);
        repos.push(...page.body);
        url = page.next;
    }
    return repos;
}

/** Só o que o site usa; sem estrelas nem datas, para o arquivo não mudar à toa a cada build. */
function toProject(repo) {
    return {
        name: repo.name,
        url: repo.html_url,
        description: repo.description?.trim() || null,
        language: repo.language,
        topics: (repo.topics ?? []).filter(t => t !== TOPIC).sort(),
        homepage: /^https:\/\//.test(repo.homepage ?? '') ? repo.homepage : null,
    };
}

async function keepCurrent(reason) {
    try {
        const current = JSON.parse(await readFile(OUT, 'utf8'));
        console.warn(`Projetos: ${reason}. Mantida a lista salva (${current.length} projetos).`);
    } catch {
        console.error(`Projetos: ${reason} e não há lista salva em ${OUT}.`);
        process.exit(1);
    }
}

const reposArg = process.argv.indexOf('--repos');
const only = reposArg > 0 ? process.argv[reposArg + 1]?.split(',').map(s => s.trim()).filter(Boolean) : null;

try {
    const repos = only
        ? await Promise.all(only.map(name => get(`https://api.github.com/repos/${USER}/${name}`).then(r => r.body)))
        : (await allRepos()).filter(r => r.topics?.includes(TOPIC));
    const projects = repos
        .filter(r => !r.private && !r.fork)
        .map(toProject)
        .sort((a, b) => a.name.localeCompare(b.name));

    if (!projects.length) {
        await keepCurrent(`nenhum repositório público com o tópico "${TOPIC}"`);
    } else {
        const json = JSON.stringify(projects, null, 2) + '\n';
        const before = await readFile(OUT, 'utf8').catch(() => '');
        if (json !== before) await writeFile(OUT, json);
        console.log(`Projetos: ${projects.length} (${projects.map(p => p.name).join(', ')})${json === before ? ', sem mudanças' : ', lista atualizada'}.`);
    }
} catch (err) {
    await keepCurrent(`falha ao consultar o GitHub (${err.message})`);
}
