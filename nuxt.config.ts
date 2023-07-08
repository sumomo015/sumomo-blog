// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@pinia/nuxt'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja-JP',
      },
    },
  },
  experimental: {
    payloadExtraction: false,
  },
});
