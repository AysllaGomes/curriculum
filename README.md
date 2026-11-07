# Currículo online — Ayslla Gomes

Currículo pessoal em formato de página única, feito com **Angular 22** e **Bootstrap 5**.

🌐 **No ar:** https://aysllagomes.github.io/curriculum/

## O que tem na página

Dados pessoais, resumo, experiências profissionais, projetos pessoais, formação acadêmica e especializações, competências, idiomas e certificações.

## Como funciona

- Não há backend: todo o conteúdo está no próprio código, em `src/app/shared/service/` (experiências, formação, certificações, projetos) e nos componentes de `src/app/pages/` (competências, idiomas, resumo).
- As imagens (foto e logos) ficam no Cloudflare R2.
- Componentes **standalone** com change detection **OnPush** e **sem zone.js** (`provideZonelessChangeDetection`).
- Há uma única rota (`/`), que renderiza o `CurriculumComponent` e, dentro dele, os demais componentes.

```
src/
├── app/
│   ├── pages/             # seções do currículo (experience, certification, languages…) + testes *.spec.ts
│   ├── shared/
│   │   ├── components/    # footer
│   │   ├── models/        # tipos dos dados (interfaces)
│   │   └── service/       # dados do currículo + teste de consistência das datas
│   ├── app.component.ts
│   └── app.routes.ts
├── main.ts                # bootstrapApplication
└── test-providers.ts      # providers usados pelos testes
```

## Rodando localmente

Requisito: **Node 24.15+** (ou 22.22.3+). Veja `.nvmrc`; com nvm: `nvm use`.

```bash
npm install
npm start               # http://localhost:4200
npm test                # testes (Vitest)
npm run lint            # ESLint (angular-eslint)
npm run build:pages     # mesmo build que vai para o ar (dist/curriculum/browser)
```

## Atualizando o conteúdo

Edite os arquivos de `src/app/shared/service/` ou o componente da seção correspondente em `src/app/pages/`.
Os testes verificam, por exemplo, se as datas das experiências estão no formato certo e em ordem — rode `npm test` antes de publicar.

## Publicando

A publicação é automática pelo **GitHub Actions** (`.github/workflows/deploy.yml`):

- **Push na `main`** → lint, testes, build de produção e deploy no GitHub Pages.
- **Pull request para a `main`** → lint, testes e build, para validar antes do merge (não publica).
- **Manual** → aba *Actions* → *Build e deploy no GitHub Pages* → *Run workflow*.

> Configuração necessária (uma vez): *Settings → Pages → Build and deployment → Source: **GitHub Actions***.

## Próximos passos

Veja o [PLANO.md](PLANO.md): dados centralizados, SEO/Open Graph, versão para impressão/PDF e testes ponta a ponta.
