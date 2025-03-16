import { definePerson } from 'nuxt-schema-org/schema'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/ui',
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
  css: ['~/assets/css/main.css'],
  router: {
    options: { scrollBehaviorType: 'smooth' },
  },
  site: {
    name: 'Sumomo\'s Blog',
    description: 'Sumomo のブログです。日々の学びや技術的なメモを書いています。',
    defaultLocale: 'ja',
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'github-dark',
          },
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      scripts: { googleAnalytics: { id: '' } },
    },
  },
  compatibilityDate: '2024-11-01',
  nitro: {
    prerender: { autoSubfolderIndex: false },
  },
  typescript: {
    tsConfig: { compilerOptions: { noUncheckedIndexedAccess: true } },
  },
  eslint: { config: { stylistic: true } },
  fonts: {
    families: [
      { name: 'Noto Sans JP', weights: [400, 500, 600, 700], styles: ['normal', 'italic'] },
      { name: 'JetBrains Mono', weights: [400, 600], styles: ['normal', 'italic'] },
    ],
  },
  icon: {
    clientBundle: { scan: true },
  },
  image: {
    ipx: { modifiers: { format: 'avif', quality: 75 } },
    static: { modifiers: { format: 'avif', quality: 75 } },
  },
  linkChecker: { enabled: false },
  ogImage: {
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
          '\'wasm-unsafe-eval\'',
          '\'nonce-{{nonce}}\'',
          'https://*.googletagmanager.com',
        ],
        'style-src': ['\'self\'', '\'unsafe-inline\''],
      },
      crossOriginEmbedderPolicy: 'require-corp',
      crossOriginOpenerPolicy: 'same-origin',
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
