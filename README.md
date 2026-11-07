# Currículo online — Ayslla Gomes

Currículo e portfólio pessoal em página única, feito com **Angular 22** (sem framework de CSS: layout próprio com flex/grid, tema escuro, fontes Space Grotesk e Inter servidas pelo próprio site).

🌐 **No ar:** https://aysllagomes.github.io/curriculum/

## O que tem na página

Abertura com cargo atual, "Sobre mim" com números (anos de experiência, empresas, cursos, certificações), experiências, projetos, competências, formação e especializações, certificações, idiomas e contato.

## Como funciona

- Não há backend: todo o conteúdo do currículo está em **`src/app/data/pt-BR.ts`** e os textos fixos da interface (menus, botões, títulos) em `src/app/data/labels.ts`.
- Durações ("3 anos e 7 meses") e números da abertura são calculados a partir das datas (`AAAA-MM`).
- As imagens (foto e logos) ficam no Cloudflare R2.
- Componentes **standalone** com change detection **OnPush** e **sem zone.js** (`provideZonelessChangeDetection`).
- Há uma única rota (`/`), que renderiza o `CurriculumComponent`: cabeçalho, seções na ordem do menu e rodapé.

```
src/
├── app/
│   ├── data/              # conteúdo (pt-BR.ts), textos da interface (labels.ts) + teste dos dados
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
Os testes verificam, por exemplo, se as datas são válidas e estão em ordem e se não há texto vazio — rode `npm test` antes de publicar.

## Publicando

A publicação é automática pelo **GitHub Actions** (`.github/workflows/deploy.yml`):

- **Push na `main`** → lint, testes, build de produção e deploy no GitHub Pages.
- **Pull request para a `main`** → lint, testes e build, para validar antes do merge (não publica).
- **Manual** → aba *Actions* → *Build e deploy no GitHub Pages* → *Run workflow*.

> Configuração necessária (uma vez): *Settings → Pages → Build and deployment → Source: **GitHub Actions***.

## Próximos passos

Veja o [PLANO.md](PLANO.md): projetos vindos do GitHub, site em PT-BR/EN/ES/IT, SEO/Open Graph, versão em PDF e testes ponta a ponta.
