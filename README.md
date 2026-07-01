# VALGOR — Site institucional

**TypeScript · Next.js 16 · Tailwind CSS 4 · Prisma · PostgreSQL · Docker**

Site da VALGOR (Alencar & Filho) — São José do Rio Preto.

## Desenvolvimento local

```bash
cp .env.example .env
docker compose up --build
# ou: npm install && npm run db:push && npm run dev
```

Site: http://localhost:3005 (porta 3000 reservada ao Salesflow)

## Deploy no VPS (KingHost + Docker)

Requisitos: Ubuntu com Docker, portas 80/443 abertas.

```bash
git clone https://github.com/flavioalencar-bot/Valgor.git valgor
cd valgor
cp .env.production.example .env
nano .env   # senhas e NEXT_PUBLIC_SITE_URL
chmod +x scripts/deploy-vps.sh
./scripts/deploy-vps.sh
```

DNS (`valgor.com.br` e `www`) → IP do VPS. HTTPS via Caddy (automático).

## Estrutura

```
src/app/          # Rotas Next.js
src/components/   # UI
src/lib/          # Dados, SEO, Prisma
prisma/           # Banco de dados
docker-compose.prod.yml
Caddyfile
```

## Redirects

URLs antigas (`/fox-score`, `/diagnostico-digital`, etc.) redirecionam para as rotas atuais.
