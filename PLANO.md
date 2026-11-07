# Plano de ação — curriculum

Modernizar o currículo online em etapas, mantendo o site publicável ao fim de cada entrega.
Diagnóstico de origem: análise com o `repo-inspector` (MCP) + leitura do código em 07/11/2026.

**Legenda:** `[x]` feito · `[ ]` pendente · `[~]` depende de decisão/informação

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
- [ ] Otimizar a foto de perfil (PNG de 371 KB exibido em 200×200 → WebP ~400×400)
- [ ] Servir o R2 por domínio próprio em vez de `*.r2.dev` (o r2.dev tem limite de requisições e é indicado para desenvolvimento)
- [~] Revisar skills, certificações e projetos novos para 2026

### Fase 2: Limpeza e decisão de deploy
- [x] Manter só GitHub Pages: remover `Procfile`, `server.js` e a dependência `express`
- [x] Remover scripts de CDN não usados (jQuery, Popper, Bootstrap 4 JS)
- [x] Remover componentes declarados e nunca usados (`NavbarComponent`, `AboutComponent`)
- [x] `README.md`
- [x] `engines` + `.nvmrc` com a versão do Node
- [~] Preencher Website e tópicos no "About" do repositório no GitHub (a autora faz pela interface do GitHub)

## Entrega 2 — Deploy automático (Fase 3)
- [ ] Workflow do GitHub Actions: build + publicação no Pages a cada push na `main`
- [ ] Parar de versionar `docs/` (build passa a ser gerado na pipeline)
- [ ] Build também em pull requests

## Entrega 3 — Atualização do Angular (Fase 4)
- [ ] Node 22 LTS
- [ ] `ng update` uma versão major por vez (16 → 17 → … → atual), conferindo build e visual a cada passo
- [ ] Migrações automáticas: standalone components, control flow (`@for`/`@if`), builder `application`
- [ ] ⚠️ Builder `application` publica em `dist/curriculum/browser/` — ajustar o workflow
- [ ] `rxjs` 7, `@types/node` atual
- [ ] TSLint + codelyzer → ESLint (angular-eslint)
- [ ] Remover Protractor; Karma → Vitest
- [ ] `strict` no TypeScript

## Entrega 4 — Manutenção, qualidade e testes (Fases 5, 6, 7)

### Fase 5: Dados separados do código
- [ ] Um único arquivo de dados tipado com todo o conteúdo do currículo
- [ ] `models` de classes → interfaces
- [~] Versão em inglês (`curriculo.pt.ts` / `curriculo.en.ts`)?

### Fase 6: Qualidade do site
- [ ] Meta description + Open Graph (prévia ao compartilhar no LinkedIn/WhatsApp)
- [ ] Pré-renderização (HTML pronto no build)
- [ ] CSS de impressão ("Salvar como PDF" gera um currículo limpo)
- [ ] Acessibilidade e responsividade
- [ ] Lighthouse ≥ 90 nas quatro categorias

### Fase 7: Testes
- [ ] Teste por componente
- [ ] Teste ponta a ponta com Playwright
- [ ] Testes rodando no workflow

---

## Decisões em aberto
1. **Atualizar ou reescrever?** Recomendação: atualizar o Angular (preserva histórico, é a stack do dia a dia).
2. **Versão em inglês?** Se sim, a Fase 5 já nasce preparada para dois idiomas.
3. **Telefone público?** Hoje aparece no site e no código. Alternativa: manter só e-mail e LinkedIn.

## Histórico
| Data | Entrega | Branch | Observações |
|---|---|---|---|
| 07/11/2026 | 1 — Correções e limpeza | `melhorias/entrega-1` | Build validado e comparado visualmente (antes × depois, desktop e celular). `docs/` regenerado. Node fixado em 18 por compatibilidade com o Angular 16 (Node 18 está fora de suporte; sobe para 22 na Entrega 3). Pendente com a autora: revisão de conteúdo 2026 e “About” do GitHub. |
| 07/11/2026 | 1 — Experiências 2026 | `melhorias/entrega-1` | IBM encerrada em 12/2025; Mirante Tecnologia desde 01/2026 (atual). Logo e cliente passaram a ser opcionais no modelo, com marcador de inicial quando não há logo. Push fica a cargo da autora. |
| 07/11/2026 | 1 — Imagens no R2 | `melhorias/entrega-1` | A autora adicionou logo e cliente da Mirante (Sicoob) e migrou as 8 imagens para o Cloudflare R2 (todas validadas com HTTP 200). `docs/` regenerado. |
