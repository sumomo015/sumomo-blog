import { definePerson } from 'nuxt-schema-org/schema'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/seo',
    '@nuxt/scripts',
    '@nuxt/content',
    '@nuxtjs/html-validator',
    'nuxt-security',
    '@nuxt/test-utils/module',
  ],
  $development: {
    security: { enabled: false },
  },
  $production: {
    scripts: { registry: { googleAnalytics: true } },
  },
  $test: {
    ogImage: { enabled: false },
  },
  components: {
    dirs: [{ extensions: ['vue'], path: '~/components' }],
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
  content: {
    highlight: {
      theme: {
        'default': 'vitesse-light',
        'dark-mode': 'vitesse-dark',
      },
    },
  },
  runtimeConfig: {
    public: {
      scripts: { googleAnalytics: { id: '' } },
    },
  },
  compatibilityDate: '2024-11-01',
  typescript: {
    tsConfig: { compilerOptions: { noUncheckedIndexedAccess: true } },
  },
  eslint: { config: { stylistic: true } },
  image: {
    dir: 'assets/images',
    ipx: { modifiers: { format: 'avif', quality: 75 } },
    static: { modifiers: { format: 'avif', quality: 75 } },
  },
  linkChecker: {
    failOnError: true,
  },
  ogImage: {
    strictNuxtContentPaths: true,
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
        'img-src': [
          '\'self\'',
          'data:',
          'https://*.google-analytics.com',
          'https://*.googletagmanager.com',
        ],
        'connect-src': [
          '\'self\'',
          'https://*.google-analytics.com',
          'https://*.analytics.google.com',
          'https://*.googletagmanager.com',
        ],
        'script-src': [
          '\'self\'',
          '\'nonce-{{nonce}}\'',
          'https://*.googletagmanager.com',
        ],
        'style-src': ['\'self\'', '\'unsafe-inline\''],
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
  sitemap: { strictNuxtContentPaths: true },
})
