@echo off
title Codigo de Etica Profesional - Servidor Local
color 0A
echo.
echo  ╔══════════════════════════════════════════════════════════╗
echo  ║                CODIGO DE ETICA PROFESIONAL               ║
echo  ║                    Nicolas Gamboa                        ║
echo  ╚══════════════════════════════════════════════════════════╝
echo.
echo 🚀 Iniciando servidor local...
echo.

REM Verificar si Node.js está instalado
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js no está instalado o no está en el PATH
    echo 💡 Descarga Node.js desde: https://nodejs.org
    pause
    exit /b 1
)

REM Verificar si el archivo HTML existe
if not exist "codigo-etica-profesional.html" (
    echo ❌ No se encuentra el archivo "codigo-etica-profesional.html"
    echo 💡 Asegurate de que este archivo esté en la misma carpeta
    pause
    exit /b 1
)

REM Iniciar el servidor
echo ✅ Todo listo! Iniciando servidor...
echo.
node servidor.js

pause
