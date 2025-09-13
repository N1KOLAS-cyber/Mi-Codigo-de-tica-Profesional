#!/bin/bash

# Script para ejecutar en producción en puerto 8080
echo "🏗️  Construyendo aplicación..."
npm run build

echo "🚀 Iniciando servidor de producción en puerto 8080..."
echo "📱 Accede a: http://localhost:8080"
echo ""

npm run start
