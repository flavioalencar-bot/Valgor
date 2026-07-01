#!/bin/sh
# Diagnóstico rápido — rode em /opt/valgor
set -e

echo "== Git =="
git log -1 --oneline 2>/dev/null || echo "(sem git)"

echo ""
echo "== Containers =="
docker compose -f docker-compose.prod.yml ps

echo ""
echo "== Logs app (últimas 15 linhas) =="
docker compose -f docker-compose.prod.yml logs --tail 15 app

echo ""
echo "== Teste app interno (porta 3000) =="
docker compose -f docker-compose.prod.yml exec -T app \
  node -e "fetch('http://127.0.0.1:3000').then(r=>console.log('HTTP',r.status)).catch(e=>{console.error('FALHOU',e.message);process.exit(1)})"

echo ""
echo "== Teste caddy -> app =="
docker compose -f docker-compose.prod.yml exec -T caddy \
  wget -qO- http://app:3000/ 2>/dev/null | head -c 200 || echo "FALHOU: caddy não alcança app"

echo ""
echo "== Fim =="
