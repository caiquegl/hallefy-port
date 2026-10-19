# Hallefy – Portfólio (Next.js)

Portfólio estático migrado do WordPress/Elementor (`hallefy.com.br`) para Next.js, pronto para deploy na Vercel.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- Conteúdo em `content/*.ts` (sem CMS)

## Desenvolvimento

```bash
cd hallefy-next
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy na Vercel

1. Crie um repositório só com a pasta `hallefy-next` (ou aponte o root do projeto Vercel para ela).
2. Importe no [Vercel](https://vercel.com/new) — framework Next.js é detectado automaticamente.
3. Build command: `next build` / Output: padrão.
4. Após o deploy, você recebe um domínio `*.vercel.app`.
5. Quando o DNS de `hallefy.com.br` estiver ativo no Registro.br, adicione o domínio customizado no painel Vercel (A/CNAME conforme as instruções).

## Conteúdo

| Arquivo | Uso |
|---------|-----|
| `content/site.ts` | Textos da home, contatos, galeria |
| `content/projects.ts` | Cases (`/fernandinho`, `/manchester-city`, etc.) |
| `public/images/` | Assets copiados do backup WP |
| `public/fonts/` | Nimbus Sans (woff2) |

Alguns cases estão marcados com `recoveredPartial` — textos reconstruídos a partir do Wayback Machine e fontes públicas, pois o dump MySQL não estava no backup.

### Re-extrair textos do Archive

```bash
node scripts/extract-wayback.mjs /
node scripts/extract-wayback.mjs /rockinrio/ 20240913100456
```

## Rotas

- `/` — home (hero, projetos, clientes, sobre, galeria, contato)
- `/cases` — listagem de cases
- `/fernandinho`, `/manchester-city`, `/soulphia`, `/rockinrio`, `/incendiarios`
