import { defineVitestConfig } from '@nuxt/test-utils/config'
import { coverageConfigDefaults } from 'vitest/config'

export default defineVitestConfig({
  test: {
    coverage: {
      provider: 'v8',
      include: ['**/components/**', '**/composables/**', '**/utils/**'],
      exclude: [...coverageConfigDefaults.exclude, '**/*.story.vue'],
    },
    environment: 'happy-dom',
  },
})
