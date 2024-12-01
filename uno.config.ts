import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup,
  presetWebFonts,
  presetMini,
  presetIcons,
} from 'unocss'

export default defineConfig({
  presets: [
    presetMini({
      dark: {
        dark: '.dark-mode',
        light: '.light-mode',
      },
    }),
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: [{
          name: 'Noto Sans JP',
          weights: [400, 500, 600, 700],
          italic: true,
        }],
        mono: [{
          name: 'JetBrains Mono',
          weights: [400, 600],
          italic: true,
        }],
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
  shortcuts: {
    'base-bg': 'bg-white dark:bg-gray-900',
    'base-color-header': 'text-gray-900 dark:text-white',
    'base-color-text': 'text-gray-700 dark:text-gray-200',
    'base-hover-opacity': 'hover:opacity-60 transition-opacity duration-250',
    'base-hover-bg': 'hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors',
  },
})
