/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: { unoptimized: true },
  // Akses dev server dari host lain di jaringan lokal (mis. 192.168.56.1)
  allowedDevOrigins: ['192.168.56.1', '127.0.0.1', 'localhost'],
};

export default nextConfig;
