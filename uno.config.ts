import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup,
  presetWebFonts,
  presetWind3,
  presetIcons,
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind3({
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
    'base-color-primary': 'text-gray-700 dark:text-gray-200',
    'base-color-secondary': 'text-gray-500 dark:text-gray-400',
    'base-color-link': 'text-sky-500 dark:text-sky-400',
    'base-hover-opacity': 'hover:opacity-60 transition-opacity duration-250',
    'base-hover-bg': 'hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors',
  },
})
