#!/bin/bash

# Script para ejecutar el servidor de desarrollo en puerto 8080
echo "🚀 Iniciando servidor de desarrollo en puerto 8080..."
echo  Accede a: http://localhost:8080
echo  Red local:  192.168.0.62
echo ""

# Ejecutar Next.js en puerto 8080
npm run dev

# Alternativa con host personalizado:
# npm run dev:custom
