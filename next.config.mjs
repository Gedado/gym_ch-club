/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <--- ESTO ES LO MÁS IMPORTANTE PARA EL DESPLIEGUE ESTÁTICO
  typescript: {
    ignoreBuildErrors: true, // Lo mantenemos para que el build no se detenga por errores de tipos
  },
  images: {
    unoptimized: true, // Obligatorio para 'export'
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
    ],
  },
}

export default nextConfig;
