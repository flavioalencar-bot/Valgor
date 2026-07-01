#!/bin/sh
set -e

echo ">> Iniciando Next.js..."
if [ "$(id -u)" = "0" ]; then
  exec su-exec nextjs node server.js
else
  exec node server.js
fi
