import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'json', 'html', 'xml', 'Icov'],
      provider: 'v8',
      exclude: [
        'node_modules/',
      //   'src/main.ts',
      //   'src/router/**',
      //   'src/**/*.d.ts',
      //   'src/**/*.spec.ts',
      //   'vite.config.*',
      //   'vitest.config.*',
      //   'cypress.config.*'
      ],
      // include: ['src/**/*.{js,ts,vue}'],
    }
  }
})
