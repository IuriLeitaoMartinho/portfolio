import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Served by GitHub Pages at https://iurileitaomartinho.github.io/portfolio/
export default defineConfig({
  base: '/portfolio/',
  plugins: [
    vue({
      // Images live in public/ and are referenced as plain relative paths (img/...),
      // so leave template src/href values untouched instead of turning them into imports.
      template: { transformAssetUrls: false },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
