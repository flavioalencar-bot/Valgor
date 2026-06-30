#!/bin/sh
# Deploy no VPS KingHost — rode dentro da pasta foxsolution-app
set -e

if [ ! -f .env ]; then
  echo "Crie o arquivo .env a partir de .env.production.example"
  exit 1
fi

echo ">> Build e subida dos containers..."
docker compose -f docker-compose.prod.yml up -d --build

echo ">> Status:"
docker compose -f docker-compose.prod.yml ps

echo ""
echo "Pronto. Teste:"
echo "  http://valgor.vps-uni5.net"
echo "  https://www.valgor.com.br (após DNS apontar para o VPS)"
