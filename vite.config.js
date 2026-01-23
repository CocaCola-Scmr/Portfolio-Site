import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0', // Bind to all interfaces
    // Allow access when using localtunnel (lhr.life) or the specific subdomain provided
    allowedHosts: ['lhr.life', '91e285bb5c3a64.lhr.life'],
    port: 5173,
    hmr: {
      protocol: 'wss',
      clientPort: 443,
    },
  },
});
