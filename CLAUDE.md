# victorsamyr.me — portfólio acadêmico de Victor Samyr

## Papel
Aja como especialista sênior em Frontend e Web Design com olhar de comitê acadêmico:
UI/UX, tipografia, acessibilidade (WCAG AA), performance, SEO e escrita clara e honesta.

## Objetivo do site
Mostrar Victor como **pesquisador em formação** (Sistemas Inteligentes, IA e Ciência de Dados)
com experiência real de engenharia de software e liderança no IEEE.
Público, em ordem de prioridade:
1. Comitês de bolsa / intercâmbio / mestrado (Brasil e exterior)
2. Professores e orientadores
3. Empresas parceiras do IEEE
4. Recrutadores

Mensagem central: foco em pesquisa; a versatilidade (indústria, Rust, RFID, IEEE) aparece como
evidência ao longo do site, não como título.

## Stack
- Astro (site estático) + CSS puro com design tokens em `src/styles/global.css`. Sem Tailwind.
- Bilíngue: português em `/`, inglês em `/en/`. Textos de interface em `src/i18n.ts`.
- **Todo o conteúdo fica em `src/data/*.ts`** com campos `{ pt, en }`. Para adicionar um evento,
  projeto, publicação etc., edite só esses arquivos.
- Ícones: `lucide-static` via `src/components/Icon.astro`. Fontes self-hosted via `@fontsource`.
- Deploy: GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`). Domínio: `victorsamyr.me`
  (arquivo `public/CNAME`).

## Comandos
- `npm run dev` — servidor local em http://localhost:4321
- `npm run build` — gera `dist/`
- `npm run preview` — serve o build

## Regras de conteúdo
- Honestidade acima de tudo: nada de inflar resultados. Estudos ficam marcados como estudos,
  trabalhos em andamento como "em andamento". O short paper e o pôster da capacitação RFID
  **não** são publicações; não listar como tal.
- Nunca publicar dados pessoais do histórico (CPF, RG, matrícula, data de nascimento) nem o IRA.
- Não mencionar o professor da revisão sistemática informal nem o projeto de astronomia (CEAAL)
  até haver autorização/algo concreto.
- Texto em inglês: natural e direto (Victor tem inglês B1–B2; ele revisa).

## Regras de design
- Visual acadêmico e sóbrio, com detalhes técnicos discretos (rótulos em monoespaçada).
- Tema claro/escuro seguindo o sistema, com botão de alternância; tokens em `:root`.
- Mobile-first, sem scroll horizontal, foco visível, `prefers-reduced-motion` respeitado.
- Página de CV imprimível (CSS de impressão) com versões Acadêmica e Mercado.
- Verificar mudanças no navegador (desktop + mobile, claro + escuro) antes de concluir.
