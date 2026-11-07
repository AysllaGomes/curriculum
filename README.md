# Currículo online — Ayslla Gomes

Currículo pessoal em formato de página única, feito com **Angular 16** e **Bootstrap 5**.

🌐 **No ar:** https://aysllagomes.github.io/curriculum/

## O que tem na página

Dados pessoais, resumo, experiências profissionais, projetos pessoais, formação acadêmica e especializações, competências, idiomas e certificações.

## Como funciona

- Não há backend: todo o conteúdo está no próprio código, em `src/app/shared/service/` (experiências, formação, certificações, projetos) e nos componentes de `src/app/pages/` (competências, idiomas, resumo).
- As imagens (foto e logos) ficam no Cloudflare Images (`imagedelivery.net`).
- Há uma única rota (`/`), que renderiza o `CurriculumComponent` e, dentro dele, os demais componentes.

```
src/app/
├── pages/             # seções do currículo (experience, certification, languages…)
├── shared/
│   ├── components/    # footer
│   ├── models/        # tipos dos dados
│   └── service/       # dados do currículo
├── app.module.ts
└── app.routes.ts
```

## Rodando localmente

Requisito: **Node 18** (veja `.nvmrc`; com nvm: `nvm use`).

```bash
npm install
npm start          # http://localhost:4200
```

## Atualizando o conteúdo

Edite os arquivos de `src/app/shared/service/` ou o componente da seção correspondente em `src/app/pages/`.

## Publicando

A publicação é automática pelo **GitHub Actions** (`.github/workflows/deploy.yml`):

- **Push na `main`** → build de produção e deploy no GitHub Pages.
- **Pull request para a `main`** → só o build, para validar antes do merge.
- **Manual** → aba *Actions* → *Build e deploy no GitHub Pages* → *Run workflow*.

Para testar localmente o mesmo build que vai para o ar:

```bash
npm run build:pages     # gera dist/curriculum com base-href /curriculum/
```

> Configuração necessária (uma vez): *Settings → Pages → Build and deployment → Source: **GitHub Actions***.

## Próximos passos

Veja o [PLANO.md](PLANO.md): deploy automático, atualização do Angular, dados centralizados, SEO/PDF e testes.
