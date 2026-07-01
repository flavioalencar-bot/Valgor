#!/bin/sh
set -e

if [ -n "$DATABASE_URL" ]; then
  echo ">> Aplicando schema Prisma..."
  i=0
  until ./node_modules/.bin/prisma db push --skip-generate; do
    i=$((i + 1))
    if [ "$i" -ge 10 ]; then
      echo ">> ERRO: prisma db push falhou após 10 tentativas"
      exit 1
    fi
    echo ">> Banco indisponível, tentativa $i/10..."
    sleep 3
  done
  echo ">> Schema aplicado."
fi

echo ">> Iniciando Next.js..."
if [ "$(id -u)" = "0" ]; then
  exec su-exec nextjs node server.js
else
  exec node server.js
fi
