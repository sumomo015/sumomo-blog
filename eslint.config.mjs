// @ts-check
import eslint from '@eslint/js'
import pluginTs from '@typescript-eslint/eslint-plugin'
import parserTs from '@typescript-eslint/parser'
import pluginVue from 'eslint-plugin-vue'
import parserVue from 'vue-eslint-parser'
import tseslint from 'typescript-eslint'
import unocss from '@unocss/eslint-config/flat'

import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  // @ts-ignore
  { name: 'unocss', ...unocss },
])
  // @ts-ignore
  .replace('nuxt/typescript/setup', {
    name: 'nuxt/typescript/setup',
    plugins: {
      '@typescript-eslint': pluginTs,
      'vue': pluginVue,
    },
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        parser: parserTs,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        computed: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        defineProps: 'readonly',
        onMounted: 'readonly',
        onUnmounted: 'readonly',
        reactive: 'readonly',
        ref: 'readonly',
        shallowReactive: 'readonly',
        shallowRef: 'readonly',
        toRef: 'readonly',
        toRefs: 'readonly',
        watch: 'readonly',
        watchEffect: 'readonly',
      },
    },
  })
  .replace('nuxt/typescript/rules', {
    name: 'nuxt/typescript/rules',
    files: ['**/*.ts', '**/*.vue'],
    rules: {
      ...tseslint.config(
        eslint.configs.recommended,
        tseslint.configs.strictTypeChecked,
        tseslint.configs.stylisticTypeChecked,
      )
        .map(c => c.rules).reduce((a, b) => ({ ...a, ...b }), {}),
      // Custom rules
      'no-console': 'warn',
      '@typescript-eslint/consistent-type-imports': ['error', {
        disallowTypeAnnotations: false,
        prefer: 'type-imports',
      }],
      '@typescript-eslint/no-import-type-side-effects': 'error',
    },
  })
  .remove('nuxt/vue/setup')
