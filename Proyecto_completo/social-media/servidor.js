const http = require("http")
const fs = require("fs")
const path = require("path")
const os = require("os")

const PORT = 8080

// Función para obtener la IP local
function getLocalIP() {
  const interfaces = os.networkInterfaces()
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address
      }
    }
  }
  return "localhost"
}

// Crear el servidor
const server = http.createServer((req, res) => {
  // Servir el archivo HTML principal
  if (req.url === "/" || req.url === "/index.html" || req.url === "/codigo-etica-profesional.html") {
    fs.readFile("codigo-etica-profesional.html", "utf8", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" })
        res.end(
          '<h1>❌ Archivo no encontrado</h1><p>Asegúrate de que el archivo "codigo-etica-profesional.html" esté en la misma carpeta.</p>',
        )
        return
      }

      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
      res.end(data)
    })
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" })
    res.end("<h1>❌ Página no encontrada</h1>")
  }
})

// Iniciar el servidor
server.listen(PORT, "0.0.0.0", () => {
  const localIP = getLocalIP()

  console.log("\n🚀 ¡SERVIDOR INICIADO EXITOSAMENTE!")
  console.log("═══════════════════════════════════════")
  console.log(`📱 Link local:     http://localhost:${PORT}`)
  console.log(`🌐 Link para compartir: http://${localIP}:${PORT}`)
  console.log("═══════════════════════════════════════")
  console.log("✨ Tu Código de Ética está listo para compartir!")
  console.log("🔗 Copia cualquiera de los links de arriba")
  console.log("⚠️  Para detener el servidor: Ctrl + C")
  console.log('\n💡 Tip: El link "para compartir" funciona en tu red WiFi')

  // Intentar abrir automáticamente en el navegador
  const { exec } = require("child_process")
  const url = `http://localhost:${PORT}`

  // Detectar el sistema operativo y abrir el navegador
  const platform = process.platform
  let command

  if (platform === "win32") {
    command = `start ${url}`
  } else if (platform === "darwin") {
    command = `open ${url}`
  } else {
    command = `xdg-open ${url}`
  }

  exec(command, (error) => {
    if (!error) {
      console.log("🌟 ¡Navegador abierto automáticamente!")
    }
  })
})

// Manejar errores
server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.log(`❌ Error: El puerto ${PORT} ya está en uso.`)
    console.log("💡 Solución: Cierra otros servidores o cambia el puerto en servidor.js")
  } else {
    console.log("❌ Error del servidor:", err.message)
  }
})

// Manejar cierre del servidor
process.on("SIGINT", () => {
  console.log("\n\n👋 ¡Servidor detenido!")
  console.log("✨ Gracias por usar tu Código de Ética Profesional")
  process.exit(0)
})
