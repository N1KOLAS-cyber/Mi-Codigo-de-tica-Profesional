#!/bin/bash

# Colores para la terminal
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}"
echo "  ╔══════════════════════════════════════════════════════════╗"
echo "  ║                CODIGO DE ETICA PROFESIONAL               ║"
echo "  ║                    Nicolas Gamboa                        ║"
echo "  ╚══════════════════════════════════════════════════════════╝"
echo -e "${NC}"

echo -e "${GREEN}🚀 Iniciando servidor local...${NC}"
echo

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js no está instalado${NC}"
    echo -e "${YELLOW}💡 Instala Node.js desde: https://nodejs.org${NC}"
    exit 1
fi

# Verificar si el archivo HTML existe
if [ ! -f "codigo-etica-profesional.html" ]; then
    echo -e "${RED}❌ No se encuentra el archivo 'codigo-etica-profesional.html'${NC}"
    echo -e "${YELLOW}💡 Asegúrate de que este archivo esté en la misma carpeta${NC}"
    exit 1
fi

# Hacer el script ejecutable
chmod +x "$0"

# Iniciar el servidor
echo -e "${GREEN}✅ Todo listo! Iniciando servidor...${NC}"
echo
node servidor.js
