# Fox Solution — Site institucional

**TypeScript · Next.js 16 · Tailwind CSS 4 · Prisma · PostgreSQL · Docker**

Layout totalmente novo — dark mode, tipografia Plus Jakarta Sans, identidade Fox (magenta).

## Rodar com Docker (recomendado)

```bash
cd foxsolution-app
docker compose up --build
```

- Site: http://localhost:3000  
- Postgres: `localhost:5432`

Na primeira subida, as migrations rodam automaticamente.

## Rodar sem Docker

```bash
cp .env.example .env
npm install
# Suba um Postgres local ou use docker compose up db -d
npm run db:push
npm run dev
```

## Estrutura

```
src/
  app/              # Rotas (mesmas URLs do site PHP)
  components/       # UI e seções
  lib/              # SEO, Prisma, dados
  data/             # Navegação
prisma/             # Schema (contato, portfólio)
docker-compose.yml
```

## Deploy produção

```bash
docker build -t foxsolution-web .
# + Postgres gerenciado + variáveis DATABASE_URL e NEXT_PUBLIC_SITE_URL
```

## Legado PHP

O site antigo na raiz do repositório permanece até o cutover com redirects 301.
