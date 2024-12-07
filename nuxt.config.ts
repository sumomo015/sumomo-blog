import { definePerson } from 'nuxt-schema-org/schema'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/seo',
    '@nuxtjs/html-validator',
    'nuxt-security',
    '@nuxt/test-utils/module',
  ],
  $test: {
    ogImage: { enabled: false },
  },
  devtools: { enabled: true },
  app: {
    rootAttrs: { id: '__nuxt' },
    head: {
      htmlAttrs: { lang: 'ja' },
      link: [{ rel: 'icon', type: 'image/png', href: '/images/icon.png' }],
      titleTemplate: '%s %separator %siteName',
      templateParams: {
        separator: '|',
        siteName: 'Sumomo\'s Blog',
      },
    },
  },
  css: ['@unocss/reset/tailwind.css'],
  site: {
    name: 'Sumomo\'s Blog',
    description: 'Sumomo のブログです。日々の学びや技術的なメモを書いています。',
    defaultLocale: 'ja',
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
  },
  compatibilityDate: '2024-11-01',
  typescript: {
    tsConfig: { compilerOptions: { noUncheckedIndexedAccess: true } },
  },
  eslint: { config: { stylistic: true } },
  htmlValidator: { failOnError: true },
  image: {
    dir: 'assets/images',
    ipx: { modifiers: { format: 'avif', quality: 75 } },
    static: { modifiers: { format: 'webp', quality: 75 } },
  },
  linkChecker: {
    failOnError: true,
  },
  ogImage: {
    zeroRuntime: true,
    defaults: { component: 'Sumomo' },
    fonts: [
      'Noto+Sans+JP:400',
      'Noto+Sans+JP:700',
    ],
  },
  schemaOrg: {
    identity: definePerson({
      name: 'スモモ',
      image: '/images/icon.png',
      sameAs: [
        'https://github.com/sumomo015',
        'https://bsky.app/profile/sumomo015.dev',
      ],
    }),
  },
  security: {
    strict: true,
    rateLimiter: false,
    requestSizeLimiter: false,
    xssValidator: false,
    removeLoggers: false,
    headers: {
      contentSecurityPolicy: {
        'font-src': ['\'self\'', 'https://fonts.gstatic.com'],
        'img-src': ['\'self\'', 'data:'],
      },
    },
    sri: true,
    ssg: {
      meta: true,
      hashScripts: true,
      hashStyles: false,
      exportToPresets: true,
    },
  },
  seo: { fallbackTitle: false },
})
