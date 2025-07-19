/* eslint-disable @typescript-eslint/no-magic-numbers */
import { definePerson } from 'nuxt-schema-org/schema'

export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxtjs/html-validator',
  ],
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
  compatibilityDate: '2025-07-19',
  typescript: {
    tsConfig: {
      compilerOptions: { noUncheckedIndexedAccess: true },
      include: [
        '../eslint.config.ts',
        '../content.config.ts',
        '../cdk.ts',
        '../lib/**/*.ts',
      ],
    },
  },
  fonts: {
    families: [
      { name: 'Noto Sans JP', weights: [400, 500, 600, 700], styles: ['normal', 'italic'] },
      { name: 'JetBrains Mono', weights: [400, 600], styles: ['normal', 'italic'] },
    ],
  },
  image: {
    provider: 'ipx',
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
        'https://bsky.app/profile/sumomo015.com',
      ],
    }),
  },
  seo: { fallbackTitle: false },
})
