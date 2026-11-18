# Currículo online — Ayslla Gomes

Currículo e portfólio pessoal em página única, feito com **Angular 22** (sem framework de CSS: layout próprio com flex/grid, tema escuro, fontes Space Grotesk e Inter servidas pelo próprio site).

🌐 **No ar:** https://aysllagomes.dev

## O que tem na página

Abertura com cargo atual, "Sobre mim" com números (anos de experiência, empresas, cursos, certificações), experiências, projetos, competências, formação e especializações, certificações, idiomas e contato.

## Como funciona

- Não há backend: todo o conteúdo do currículo está em **`src/app/data/pt-BR.ts`** e os textos fixos da interface (menus, botões, títulos) em `src/app/data/labels.ts`.
- O site existe em **português, inglês, espanhol e italiano**: `en.ts`, `es.ts` e `it.ts` trazem só os textos traduzidos; datas, links e empresas vêm do `pt-BR.ts`.
- Durações ("3 anos e 7 meses") e números da abertura são calculados a partir das datas (`AAAA-MM`).
- **Currículo em PDF:** botão "Baixar currículo (PDF)" na abertura. O PDF de cada idioma sai do próprio site, com o CSS de impressão (`@media print` em `src/styles.scss` e nos componentes): `scripts/pdf.mjs` abre as páginas do build no Chrome sem janela e salva `cv/ayslla-gomes-<idioma>.pdf`. Por isso o PDF nunca fica diferente do site e se atualiza a cada deploy. O mesmo layout vale para quem imprime o site pelo navegador. Foto no papel por idioma: `printPhoto` em `src/app/data/locales.ts`; quantos projetos entram: `printLimit` em `personal-projects.component.ts`.
- **Google:** cada idioma leva dados estruturados (JSON-LD `ProfilePage` + `Person`: nome, cargo, empresa atual, LinkedIn, GitHub, competências), montados em `src/app/data/structured-data.ts`. Para conferir depois de publicar: https://search.google.com/test/rich-results. O site está verificado no Google Search Console pela tag `google-site-verification` no `src/index.html` (não apague: sem ela, a verificação cai).
- **Estatísticas de visita (opcional):** [GoatCounter](https://www.goatcounter.com), gratuito para uso pessoal, sem cookies e sem banner. Conta as visitas e os downloads do PDF (eventos `pdf-pt`, `pdf-en`…). Painel: https://ayslla-gomes.goatcounter.com. A conta fica em `GOATCOUNTER_CODE` (`src/app/shared/utils/analytics.ts`); vazio desliga as estatísticas.
- Tema escuro e claro: segue o sistema, com botão no cabeçalho. As cores de cada tema ficam no início de `src/styles.scss`; a escolha é lembrada (`localStorage`, chave `tema`) e aplicada por um script curto no `index.html` antes da página aparecer.
- As imagens (foto e logos) ficam no Cloudflare R2.
- Componentes **standalone** com change detection **OnPush** e **sem zone.js** (`provideZonelessChangeDetection`).
- Uma rota por idioma (`/pt`, `/en`, `/es`, `/it`), todas com o `CurriculumComponent`; cada rota fornece o idioma, o conteúdo e os textos (`src/app/data/locales.ts`). A raiz `/` leva ao idioma escolhido antes no seletor ou ao do navegador.
- **Páginas geradas no build** (`@angular/ssr`, `outputMode: static`): `pt/index.html`, `en/index.html`… já saem com o conteúdo, título, descrição, Open Graph (imagem em `src/assets/og/`), `canonical` e `hreflang` (`src/app/data/head.ts`). No navegador, o Angular reaproveita esse HTML (hidratação). A raiz e o `404.html` são a versão que roda só no navegador (`scripts/pages-fallback.mjs`).
- Como o HTML é gerado no build, o workflow também roda toda segunda-feira para manter durações e anos de experiência em dia.

```
src/
├── app/
│   ├── data/              # conteúdo (pt-BR, en, es, it), textos da interface (labels.ts), idiomas e rotas (locales.ts) + testes
│   ├── pages/             # seções (site-header, hero, about, experience, personal-projects…) + testes *.spec.ts
│   ├── shared/
│   │   ├── components/    # footer
│   │   ├── models/        # tipos dos dados (interfaces)
│   │   └── utils/         # datas e durações, tema, armazenamento do navegador
│   ├── app.component.ts
│   ├── app.config.ts      # providers do navegador (rotas, sem zone.js, hidratação)
│   ├── app.config.server.ts / app.routes.server.ts   # pré-render das 4 páginas
│   └── app.routes.ts
├── assets/og/             # imagem de prévia (1200×630) de cada idioma
├── sitemap.xml
├── main.ts                # entrada no navegador
├── main.server.ts         # entrada do pré-render (build)
└── test-providers.ts      # providers usados pelos testes
```

## Rodando localmente

Requisito: **Node 26** (ou 24.15+ / 22.22.3+). Veja `.nvmrc`; com nvm: `nvm use`.

```bash
npm install
npm start               # http://localhost:4200
npm test                # testes de unidade (Vitest)
npm run lint            # ESLint (angular-eslint)
npm run build:pages     # mesmo build que vai para o ar (dist/curriculum/browser), com os PDFs
npm run pdf             # só os PDFs (dist/curriculum/browser/cv), para conferir o layout de impressão
npm run e2e             # testes de ponta a ponta (Playwright) no site gerado pelo build:pages
node scripts/serve.mjs  # o site gerado pelo build:pages em http://127.0.0.1:4300/, como no GitHub Pages
```

## Atualizando o conteúdo

Edite `src/app/data/pt-BR.ts`. Experiências usam datas `AAAA-MM` (`end` ausente = emprego atual) e podem ter `summary` (uma frase de contexto), `highlights` (o que foi feito, um item por linha) e `stack`. Quando o mesmo trabalho passou por mais de uma empresa (o Spid, pela EngeSoftware e depois pela IBM), a anterior entra em `earlier` e aparece no mesmo cartão, com as próprias datas.
Na frase de abertura (`headline`), `{anos}` vira os anos de experiência calculados.
Datas, links, empresas e cursos novos entram só ali; textos novos (resumo, descrição de experiência ou de projeto, nome de idioma) precisam também da tradução em `en.ts`, `es.ts` e `it.ts` — experiência sem tradução quebra o build.
Os testes verificam, por exemplo, se as datas são válidas e estão em ordem, se não há texto vazio e se nenhum idioma ficou com algo faltando — rode `npm test` antes de publicar.

### Projetos

Os projetos vêm do GitHub: entram os repositórios **públicos** com o tópico **`portfolio`**
(no repositório: engrenagem ao lado de *About* → *Topics*). A cada build, `scripts/fetch-projects.mjs`
atualiza `src/app/data/github-projects.json`; se o GitHub não responder, vale a última lista salva.

- **Ordem e descrição em cada idioma:** `src/app/data/projects.ts`. Sem descrição ali, aparece o *About* do repositório.
- **Linguagem, tópicos e "Ver demo"** vêm do próprio repositório (linguagem principal, *Topics* e *Website*).
- `npm run projects` atualiza a lista na hora; `npm run projects -- --repos nome1,nome2` grava exatamente esses repositórios, sem depender do tópico.

## Publicando

O e-mail do site (`ayslla@aysllagomes.dev`) é encaminhado para a caixa pessoal pelo **Cloudflare Email Routing**; ele só recebe (as respostas saem da caixa pessoal).

As dependências e as actions do workflow são atualizadas pelo **Dependabot** (`.github/dependabot.yml`): toda segunda-feira ele abre PRs com as versões novas, e o workflow valida cada um. PR verde pode entrar; vermelho quer dizer que a atualização quebra algo.

O site fica em **https://aysllagomes.dev** (domínio registrado na Cloudflare, com DNS apontando para o GitHub Pages; configurado em *Settings → Pages → Custom domain*). As imagens (foto e logos) vêm de **img.aysllagomes.dev**, o bucket R2 da Cloudflare com domínio próprio. O endereço antigo `aysllagomes.github.io/curriculum/` redireciona para o novo.

A publicação é automática pelo **GitHub Actions** (`.github/workflows/deploy.yml`):

- **Push na `main`** → lint, testes, build de produção, testes de ponta a ponta e deploy no GitHub Pages.
- **Pull request para a `main`** → lint, testes, build e testes de ponta a ponta, para validar antes do merge (não publica).
- **Toda segunda-feira, 6h (Brasília)** → build e deploy automáticos, para atualizar as durações calculadas.
- **Manual** → aba *Actions* → *Build e deploy no GitHub Pages* → *Run workflow*.

Se o cargo ou a chamada da abertura mudarem, gere de novo as imagens de prévia em `src/assets/og/` com `npm run og` (faz o build e tira as imagens com o Chrome ou o Edge do computador). Como a chamada traz os anos de experiência, vale rodar também uma vez por ano.

> Configuração necessária (uma vez): *Settings → Pages → Build and deployment → Source: **GitHub Actions***.

## Próximos passos

Veja o [PLANO.md](PLANO.md): projetos vindos do GitHub, site em PT-BR/EN/ES/IT, SEO/Open Graph, versão em PDF e testes ponta a ponta.
