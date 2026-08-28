import { defineConfig } from 'vite';

export default defineConfig({
  // Root base path for primary domain deployment (https://ebinoff.github.io/)
  base: '/',

  // Development server configuration for local testing and ngrok
  server: {
    allowedHosts: [
      'hypertext-tremor-theme.ngrok-free.dev',
      '.ngrok-free.dev',
      'all'
    ]
  },
  
  plugins: [],

  build: {
    // Output folder for GitHub Pages deployment
    outDir: 'docs',
    emptyOutDir: true,

    // Performance optimization: Split large dependencies into separate chunks
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('pdfjs-dist')) {
              return 'pdfjs';
            }
            if (id.includes('html2canvas')) {
              return 'html2canvas';
            }
            return 'vendor';
          }
        }
      }
    }
  },

  optimizeDeps: {
    exclude: ['pdfjs-dist']
  }
});