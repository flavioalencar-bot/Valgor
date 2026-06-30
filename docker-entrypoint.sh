#!/bin/sh
set -e

if [ -n "$DATABASE_URL" ]; then
  echo ">> Aplicando schema Prisma..."
  ./node_modules/.bin/prisma db push --skip-generate
fi

echo ">> Iniciando Next.js..."
exec node server.js
