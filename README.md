# Currículo online — Ayslla Gomes

Currículo e portfólio pessoal em página única, feito com **Angular 22** (sem framework de CSS: layout próprio com flex/grid, tema escuro, fontes Space Grotesk e Inter servidas pelo próprio site).

🌐 **No ar:** https://aysllagomes.github.io/curriculum/

## O que tem na página

Abertura com cargo atual, "Sobre mim" com números (anos de experiência, empresas, cursos, certificações), experiências, projetos, competências, formação e especializações, certificações, idiomas e contato.

## Como funciona

- Não há backend: todo o conteúdo do currículo está em **`src/app/data/pt-BR.ts`** e os textos fixos da interface (menus, botões, títulos) em `src/app/data/labels.ts`.
- O site existe em **português, inglês, espanhol e italiano**: `en.ts`, `es.ts` e `it.ts` trazem só os textos traduzidos; datas, links e empresas vêm do `pt-BR.ts`.
- Durações ("3 anos e 7 meses") e números da abertura são calculados a partir das datas (`AAAA-MM`).
- As imagens (foto e logos) ficam no Cloudflare R2.
- Componentes **standalone** com change detection **OnPush** e **sem zone.js** (`provideZonelessChangeDetection`).
- Uma rota por idioma (`/pt`, `/en`, `/es`, `/it`), todas com o `CurriculumComponent`; cada rota fornece o idioma, o conteúdo e os textos (`src/app/data/locales.ts`). A raiz `/` leva ao idioma escolhido antes no seletor ou ao do navegador.

```
src/
├── app/
│   ├── data/              # conteúdo (pt-BR, en, es, it), textos da interface (labels.ts), idiomas e rotas (locales.ts) + testes
│   ├── pages/             # seções (site-header, hero, about, experience, personal-projects…) + testes *.spec.ts
│   ├── shared/
│   │   ├── components/    # footer
│   │   ├── models/        # tipos dos dados (interfaces)
│   │   └── utils/         # datas e durações
│   ├── app.component.ts
│   └── app.routes.ts
├── main.ts                # bootstrapApplication
└── test-providers.ts      # providers usados pelos testes
```

## Rodando localmente

Requisito: **Node 26** (ou 24.15+ / 22.22.3+). Veja `.nvmrc`; com nvm: `nvm use`.

```bash
npm install
npm start               # http://localhost:4200
npm test                # testes (Vitest)
npm run lint            # ESLint (angular-eslint)
npm run build:pages     # mesmo build que vai para o ar (dist/curriculum/browser)
```

## Atualizando o conteúdo

Edite `src/app/data/pt-BR.ts`. Experiências usam datas `AAAA-MM` (`end` ausente = emprego atual).
Datas, links, empresas e cursos novos entram só ali; textos novos (resumo, descrição de projeto, nome de idioma) precisam também da tradução em `en.ts`, `es.ts` e `it.ts`.
Os testes verificam, por exemplo, se as datas são válidas e estão em ordem, se não há texto vazio e se nenhum idioma ficou com algo faltando — rode `npm test` antes de publicar.

## Publicando

A publicação é automática pelo **GitHub Actions** (`.github/workflows/deploy.yml`):

- **Push na `main`** → lint, testes, build de produção e deploy no GitHub Pages.
- **Pull request para a `main`** → lint, testes e build, para validar antes do merge (não publica).
- **Manual** → aba *Actions* → *Build e deploy no GitHub Pages* → *Run workflow*.

> Configuração necessária (uma vez): *Settings → Pages → Build and deployment → Source: **GitHub Actions***.

## Próximos passos

Veja o [PLANO.md](PLANO.md): projetos vindos do GitHub, site em PT-BR/EN/ES/IT, SEO/Open Graph, versão em PDF e testes ponta a ponta.
