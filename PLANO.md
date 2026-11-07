# Plano de ação — curriculum

Modernizar o currículo online em etapas, mantendo o site publicável ao fim de cada entrega.
Diagnóstico de origem: análise com o `repo-inspector` (MCP) + leitura do código em 07/11/2026.

**Legenda:** `[x]` feito · `[ ]` pendente · `[~]` depende de decisão/informação · `[→]` movido para outra entrega

---

## Entrega 1 — Correções e limpeza (Fases 1 + 2)

### Fase 1: Correções rápidas
- [x] Datas da EngeSoftware invertidas (`company.service.ts`)
- [x] Link placeholder `example.com` da graduação (`academic-education.service.ts`)
- [x] `₢` → `©` no rodapé
- [x] Erros de digitação: CCS3, PhP, Bootsrap, Reponsive
- [x] `lang="pt-BR"` e textos `alt` descritivos nas imagens
- [x] `styleUrls` do `app.component.ts` apontando para `.html`
- [x] Projetos sem descrição não mostravam o link "Ver projeto"
- [x] Experiências atualizadas: IBM até Dezembro 2025; Mirante Tecnologia desde Janeiro 2026
- [x] Mirante: cliente (Sicoob) e logo
- [x] Imagens migradas do Cloudflare Images para o Cloudflare R2
- [x] Otimizar a foto de perfil (PNG 477×597 de 371 KB → WebP 400×400 de 15 KB)
- [~] Revisar skills, certificações e projetos novos para 2026

### Fase 2: Limpeza e decisão de deploy
- [x] Manter só GitHub Pages: remover `Procfile`, `server.js` e a dependência `express`
- [x] Remover scripts de CDN não usados (jQuery, Popper, Bootstrap 4 JS)
- [x] Remover componentes declarados e nunca usados (`NavbarComponent`, `AboutComponent`)
- [x] `README.md`
- [x] `engines` + `.nvmrc` com a versão do Node
- [~] Preencher Website e tópicos no "About" do repositório no GitHub (a autora faz pela interface do GitHub)

## Entrega 2 — Deploy automático (Fase 3)
- [x] Workflow do GitHub Actions: build + publicação no Pages a cada push na `main`
- [x] Parar de versionar `docs/` (build passa a ser gerado na pipeline)
- [x] Build também em pull requests
- [x] Trocar a origem do Pages para "GitHub Actions" (Settings → Pages)
- [x] Primeiro deploy pelo workflow (PR #3): build 61 s + deploy 10 s; site servido pelo artefato do Actions
- [~] Apagar a branch `gh-pages` abandonada e as branches `melhorias/entrega-1`/`-2` já mergeadas

## Infraestrutura (para depois — a autora faz)
- [ ] Apagar as 7 imagens antigas do Cloudflare Images (painel → Images/Media → Hosted images) e, se houver, cancelar a assinatura do Images em Billing → Subscriptions
- [ ] Registrar/usar um domínio próprio com DNS na Cloudflare (único custo: o registro, ~R$ 40/ano `.com.br`)
- [ ] Conectar o bucket R2 ao domínio (ex.: `img.dominio`) e desativar o acesso `r2.dev`; trocar o prefixo das URLs no código
- [ ] Opcional: domínio próprio também para o site no GitHub Pages (`base-href` passa de `/curriculum/` para `/`)

## Entrega 3 — Atualização do Angular (Fase 4)
- [x] Node 24 LTS (Angular 22 exige Node `^22.22.3 || ^24.15.0`)
- [x] `ng update` uma versão major por vez (16 → 17 → 18 → 19 → 20 → 21 → 22), conferindo build e visual a cada passo
- [x] Migrações automáticas: standalone components, control flow (`@for`/`@if`), builder `application`, `inject()`
- [x] Builder `application` publica em `dist/curriculum/browser/` — workflow ajustado
- [x] `rxjs` 7, `@types/node` 24
- [x] TSLint + codelyzer → ESLint (angular-eslint), no workflow
- [x] Remover Protractor; Karma → Vitest
- [x] `strict` no TypeScript + `strictTemplates`
- [x] Extra: change detection sem zone.js + OnPush; `@angular/build` no lugar de `@angular-devkit/build-angular`
- [x] Extra: ano das especializações acessível por teclado (`<button>` + `aria-expanded`)
- [x] A autora: Node local atualizado (Node 26)

## Entrega V — Evolução visual: direção "Portfólio" + 4 idiomas
Escolhida entre três protótipos (A · Clássico refinado, B · Coluna colorida, **C · Portfólio**): tema escuro, menu no topo,
abertura com nome e chamada, números (anos, empresas, cursos, certificações), cartões de experiência e de projetos,
bloco final "Vamos conversar?". Cada fase termina com o site publicável e prints antes × depois (desktop e celular).

### V0: Preparação
- [x] `engines` aceitando Node 26 (`^22.22.3 || ^24.15.0 || >=26.0.0`) e `.nvmrc` → 26 (LTS desde out/2026)
- [x] Tirar `package-lock.json` do `.gitignore` (o arquivo é versionado; a linha fazia o git propor apagá-lo)

### V1: Dados centralizados e tipados (antecipa a Fase 5)
- [x] Todo o conteúdo num arquivo de dados por idioma, com o mesmo tipo (`src/app/data/pt-BR.ts` como fonte); serviços antigos removidos
- [x] Períodos como datas (`2022-06`), não texto — a duração ("3 anos e 7 meses") e o "8+ anos" passam a ser calculados
- [x] Campos novos: cargo atual e chamada da abertura (descrição curta dos projetos vem do GitHub na V5)
- [x] Teste: todo idioma tem todos os campos do pt-BR (falta de tradução quebra o build)
- [x] Telefone removido do site (decisão da autora)

### V2: Fundamentos visuais
- [ ] Variáveis de cor, espaçamento e raio (tema escuro; cor de destaque `#8AA4FF`, a confirmar)
- [ ] Fontes Space Grotesk (títulos) + Inter (texto) servidas pelo próprio site, sem Google Fonts
- [ ] Remover o Bootstrap (o layout novo usa flex/grid próprios) e as nuvens do rodapé
- [ ] Escala única de títulos; ícones SVG próprios no lugar dos PNG/SVG pretos

### V3: Estrutura e abertura
- [ ] Menu fixo com âncoras (Experiência, Projetos, Competências, Formação, Contato) e versão celular
- [ ] Abertura: nome, cargo atual, chamada, foto, botões "Entrar em contato" e "Currículo em PDF"
- [ ] Faixa de números (anos de experiência, empresas, cursos, certificações) calculados a partir dos dados
- [ ] Bloco "Vamos conversar?" e rodapé novo

### V4: Seções de conteúdo
- [ ] Experiência em cartões: logo, empresa, cliente, período e duração; emprego atual em destaque
- [ ] Competências em colunas por grupo; idiomas com barra de nível (A1–C2); certificações
- [ ] Formação + especializações (lista completa ao abrir, por ano)

### V5: Projetos dinâmicos do GitHub
- [ ] Script no build lê a API do GitHub e gera um JSON com os repositórios **públicos** que têm o tópico `portfolio`
      (nome, descrição, linguagem, tópicos, estrelas, última atualização, link de demo quando houver)
- [ ] Arquivo opcional de ajustes: ordem, projeto em destaque, descrição por idioma
- [ ] Workflow: token do próprio Actions (sem limite de 60/h); build agendado semanal, além do push na `main`
- [ ] Se a API falhar, o build usa a última lista salva (o site nunca fica sem projetos)
- [~] A autora: marcar com o tópico `portfolio` e descrever os repositórios escolhidos
      (sugestão: figma-context-cache-mcp, pet-health-api, angular-components, MediTrack, squad-amsterdam, interstate-mobility-center)

### V6: Site em 4 idiomas — PT-BR, EN, ES, IT
- [ ] Uma URL por idioma: `/curriculum/pt/`, `/en/`, `/es/`, `/it/` (dá para compartilhar o link no idioma certo)
- [ ] Seletor de idioma no menu; primeira visita segue o idioma do navegador; escolha lembrada
- [ ] Textos fixos da interface + arquivo de dados por idioma (V1), sem biblioteca externa
- [ ] Datas e durações formatadas por idioma (`Intl`): "jun 2022 – dez 2025 · 3 anos e 7 meses" / "Jun 2022 – Dec 2025 · 3 years 7 months" / "jun 2022 – dic 2025 · 3 años y 7 meses" / "giu 2022 – dic 2025 · 3 anni e 7 mesi"
- [ ] `lang`, título da página e descrição por idioma
- [ ] Traduções EN, ES e IT: rascunho feito por mim; revisão da autora (e, de preferência, de alguém fluente em italiano)

### V7: Pré-renderização e SEO (antecipa parte da Fase 6)
- [ ] HTML pronto no build para cada idioma (carrega mais rápido e é lido por buscadores e pelo LinkedIn)
- [ ] Meta description + Open Graph por idioma (prévia ao compartilhar) e `hreflang` ligando as 4 versões

### V8: Acabamento
- [ ] Tema claro opcional (segue o sistema; botão para trocar)
- [ ] Animações discretas, desligadas com `prefers-reduced-motion`
- [ ] Revisão no celular, foco visível, contraste AA; Lighthouse ≥ 90
- [ ] Testes dos componentes novos

## Entrega 4 — Manutenção, qualidade e testes (Fases 5, 6, 7)

### Fase 5: Dados separados do código
- [→] Arquivo único de dados tipado — passou para a V1
- [x] `models` de classes → interfaces (feito na Entrega 3, exigido pelo `strict`)
- [→] Versões em outros idiomas — passou para a V6 (PT-BR, EN, ES, IT)

### Fase 6: Qualidade do site
- [→] Meta description, Open Graph e pré-renderização — passaram para a V7
- [ ] CSS de impressão / "Currículo em PDF" (um PDF por idioma)
- [→] Acessibilidade, responsividade e Lighthouse — passaram para a V8

### Fase 7: Testes
- [~] Teste por componente — 16 testes em 7 arquivos (Entrega 3); faltam footer, professional-skills, academic-education
- [ ] Teste ponta a ponta com Playwright
- [x] Testes rodando no workflow (Entrega 3)

---

## Decisões em aberto
1. **Atualizar ou reescrever?** Recomendação: atualizar o Angular (preserva histórico, é a stack do dia a dia).
2. ~~Versão em inglês?~~ Decidido: o site terá PT-BR, EN, ES e IT (V6).
3. ~~Telefone público?~~ Decidido: sai do site; contato por e-mail, LinkedIn e GitHub.
4. ~~Direção visual?~~ Decidido: C · Portfólio. Cor de destaque a confirmar (protótipo: `#8AA4FF`).

## Histórico
| Data | Entrega | Branch | Observações |
|---|---|---|---|
| 07/11/2026 | 1 — Correções e limpeza | `melhorias/entrega-1` | Build validado e comparado visualmente (antes × depois, desktop e celular). `docs/` regenerado. Node fixado em 18 por compatibilidade com o Angular 16 (Node 18 está fora de suporte; sobe para 22 na Entrega 3). Pendente com a autora: revisão de conteúdo 2026 e “About” do GitHub. |
| 07/11/2026 | 1 — Experiências 2026 | `melhorias/entrega-1` | IBM encerrada em 12/2025; Mirante Tecnologia desde 01/2026 (atual). Logo e cliente passaram a ser opcionais no modelo, com marcador de inicial quando não há logo. Push fica a cargo da autora. |
| 07/11/2026 | 1 — Imagens no R2 | `melhorias/entrega-1` | A autora adicionou logo e cliente da Mirante (Sicoob) e migrou as 8 imagens para o Cloudflare R2 (todas validadas com HTTP 200). `docs/` regenerado. |
| 07/11/2026 | 1 — Foto de perfil | `melhorias/entrega-1` | `object-fit: cover` na foto (a imagem 477×597 era esticada para 200×200). WebP 400×400 gerado (371 KB → 15 KB), aguardando upload no R2. |
| 07/11/2026 | 1 — Foto publicada | `melhorias/entrega-2` | Foto WebP 400×400 (14,7 KB) no R2 em `professional/Ayslla_Caroline.webp`. |
| 07/11/2026 | 2 — Publicada | `main` (PR #3) | Origem do Pages trocada para GitHub Actions; deploy pelo workflow confirmado (404.html do build do Actions no ar). Uma execução do deploy clássico falhou no mesmo merge, sem impacto. |
| 07/11/2026 | 3 — Angular 16 → 22 | `melhorias/entrega-3` | 6 saltos de versão, cada um com build e comparação de screenshots (desktop e celular) contra o Angular 16: **0% de diferença em todos**. Standalone, sem zone.js, OnPush, `strict`, Vitest (16 testes), ESLint; lint e testes no workflow. Bundle inicial 97 → 89 KB transferidos. Removidos ~750 pacotes (TSLint, codelyzer, Protractor, Karma, build-angular, zone.js…). Erros antigos revelados e corrigidos: tipo errado em `CertificationComponent` e ano das especializações inacessível por teclado. |
| 07/11/2026 | 3 — Publicada | `main` (PR #4) | Workflow com lint, testes e build passou no PR e na `main`; site publicado. |
| 07/11/2026 | V — Planejada | `melhorias/visual` | Três protótipos visuais comparados; escolhida a direção C · Portfólio. Acrescentados projetos dinâmicos do GitHub (tópico `portfolio`) e site em PT-BR, EN, ES e IT. |
| 07/11/2026 | V0 + V1 | `melhorias/visual` | Node 26; `package-lock.json` fora do `.gitignore`. Conteúdo centralizado em `src/app/data/pt-BR.ts` (períodos `AAAA-MM`, duração e anos de experiência calculados, teste de estrutura entre idiomas). Telefone removido. Visual: só o cabeçalho mudou (sem a linha do telefone). 27 testes. |
| 07/11/2026 | 2 — Deploy automático | `melhorias/entrega-2` | Workflow `deploy.yml` (build em PR; build + deploy na `main`), `docs/` e `.nojekyll` removidos, script `deploy:ghdocs` → `build:pages`. Simulado localmente com `npm ci` + build. Depende de a Entrega 1 entrar na `main` antes e da troca da origem do Pages. |
