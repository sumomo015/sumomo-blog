import { defineVitestConfig } from '@nuxt/test-utils/config'
import { coverageConfigDefaults } from 'vitest/config'

export default defineVitestConfig({
  test: {
    coverage: {
      provider: 'v8',
      include: ['**/components/**/*.vue', '**/composables/**/*.ts', '**/utils/**/*.ts'],
      exclude: [...coverageConfigDefaults.exclude, '**/*.story.vue'],
    },
    environment: 'happy-dom',
  },
})
