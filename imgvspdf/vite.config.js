import { defineConfig } from 'vite';

export default defineConfig({
  // Base path for GitHub Pages deployment under the repository name
  base: '/imgvspdf/',

  // Development server configuration
  server: {
    // Allows requests from your specific ngrok tunnel or any ngrok host
    allowedHosts: [
      'hypertext-tremor-theme.ngrok-free.dev', // Your current ngrok URL
      '.ngrok-free.dev',                        // Allows any future ngrok tunnel URLs
      'all'                                     // Alternatively, allows all hosts in dev mode
    ]
  },

  build: {
    outDir: 'docs',
    emptyOutDir: false
  },

  optimizeDeps: {
    // Tells Vite to leave the PDF.js worker alone during dev mode
    exclude: ['pdfjs-dist']
  }
});