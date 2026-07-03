import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

/**
 * Vite plugin: converts render-blocking CSS <link> to async (non-render-blocking) loading.
 * Uses the preload + onload pattern with <noscript> fallback.
 * @see https://web.dev/articles/defer-non-critical-css
 */
function asyncCSSPlugin(): Plugin {
  return {
    name: 'async-css',
    apply: 'build',
    enforce: 'post',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const htmlPath = path.join(distDir, 'index.html');

      if (!fs.existsSync(htmlPath)) return;

      let html = fs.readFileSync(htmlPath, 'utf-8');

      // Replace render-blocking CSS <link> with async preload pattern
      html = html.replace(
        /<link rel="stylesheet" crossorigin href="(\/assets\/index-[^"]+\.css)">/,
        (_match: string, href: string) =>
          `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'">\n    <noscript><link rel="stylesheet" href="${href}"></noscript>`,
      );

      fs.writeFileSync(htmlPath, html, 'utf-8');
      console.log('  ✓ CSS converted to async (non-render-blocking) loading');
    },
  };
}

export default defineConfig({
  plugins: [react(), asyncCSSPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
