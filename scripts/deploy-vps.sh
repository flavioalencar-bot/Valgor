#!/bin/sh
# Deploy no VPS KingHost — rode dentro da pasta valgor
set -e

if [ ! -f .env ]; then
  echo "Crie o arquivo .env a partir de .env.production.example"
  exit 1
fi

echo ">> Atualizando código..."
git fetch origin
git reset --hard origin/main
echo "Commit: $(git log -1 --oneline)"

echo ">> Parando containers e removendo imagens antigas..."
docker compose -f docker-compose.prod.yml down --rmi local --remove-orphans
docker builder prune -af

echo ">> Build completo (sem cache)..."
docker compose -f docker-compose.prod.yml build --no-cache --pull migrate app

echo ">> Subindo banco e redis..."
docker compose -f docker-compose.prod.yml up -d db redis

echo ">> Aguardando banco..."
for i in 1 2 3 4 5 6 7 8 9 10; do
  if docker compose -f docker-compose.prod.yml exec -T db pg_isready -U "${POSTGRES_USER:-valgor}" >/dev/null 2>&1; then
    break
  fi
  sleep 2
done

echo ">> Aplicando schema Prisma..."
docker compose -f docker-compose.prod.yml run --rm migrate

echo ">> Subindo app e caddy..."
docker compose -f docker-compose.prod.yml up -d app caddy

echo ">> Aguardando app..."
for i in 1 2 3 4 5 6 7 8 9 10; do
  if docker compose -f docker-compose.prod.yml exec -T app \
    node -e "fetch('http://127.0.0.1:3000').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))" \
    >/dev/null 2>&1; then
    echo ">> App respondendo OK"
    break
  fi
  sleep 3
done

echo ""
docker compose -f docker-compose.prod.yml ps

echo ""
echo ">> Logs app:"
docker compose -f docker-compose.prod.yml logs --tail 8 app

echo ""
echo "Pronto. Teste:"
echo "  http://valgor.vps-uni5.net"
