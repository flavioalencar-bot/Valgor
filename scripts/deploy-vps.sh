#!/bin/sh
# Deploy no VPS KingHost — rode dentro da pasta valgor
set -e

if [ ! -f .env ]; then
  echo "Crie o arquivo .env a partir de .env.production.example"
  exit 1
fi

echo ">> Parando containers antigos..."
docker compose -f docker-compose.prod.yml down --remove-orphans

echo ">> Build completo (sem cache)..."
docker compose -f docker-compose.prod.yml build --no-cache migrate app

echo ">> Subindo banco e redis..."
docker compose -f docker-compose.prod.yml up -d db redis

echo ">> Aguardando banco..."
sleep 5

echo ">> Aplicando schema Prisma..."
docker compose -f docker-compose.prod.yml run --rm migrate

echo ">> Subindo app e caddy..."
docker compose -f docker-compose.prod.yml up -d app caddy

echo ">> Status:"
docker compose -f docker-compose.prod.yml ps

echo ""
echo ">> Logs do app (últimas 5 linhas):"
docker compose -f docker-compose.prod.yml logs --tail 5 app

echo ""
echo "Pronto. Teste:"
echo "  http://valgor.vps-uni5.net"
echo "  https://www.valgor.com.br (após DNS apontar para o VPS)"
