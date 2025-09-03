import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      root: fileURLToPath(new URL('./', import.meta.url)),
      include: ['src/components/__tests__/**'],
      coverage: {
        all: true,
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        include: ['**/*.vue'],
        exclude: ['src/components/icons/**'],
      },
    },
  })
)
