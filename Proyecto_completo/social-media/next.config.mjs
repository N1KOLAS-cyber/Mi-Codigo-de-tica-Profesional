/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración de orígenes permitidos para el servidor de desarrollo
  experimental: {
    allowedOrigins: [
      'localhost:8080',
      '127.0.0.1:8080',
      '0.0.0.0:8080',
      // También permitir el puerto por defecto por si acaso
      'localhost:3000',
      '127.0.0.1:3000'
    ]
  },
  
  // Configuración del servidor de desarrollo
  devIndicators: {
    buildActivity: false, // Oculta el indicador de build
    buildActivityPosition: 'bottom-right'
  },
  
  // Headers de seguridad para desarrollo
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      }
    ]
  },
  
  // Configuración para ESLint y TypeScript
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Configuración para imágenes
  images: {
    unoptimized: true,
  },
}

export default nextConfig
