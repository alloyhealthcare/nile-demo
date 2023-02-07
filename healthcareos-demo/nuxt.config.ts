// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {},
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    'nuxt-headlessui',
    '@nathanchase/nuxt-dayjs-module',
    '@pinia/nuxt',
    'nuxt-svgo',
  ],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/styles/main.css',
  ],
  headlessui: {
    prefix: 'Headless',
  },
  dayjs: {
    plugins: [
      'duration',
      'relativeTime',
      'advancedFormat',
      'weekday',
      'customParseFormat',
      'badMutable',
    ],
  },
  extends: ['nuxt-seo-kit'],
  build: { transpile: ['@fortawesome/vue-fontawesome'] },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
      siteName: 'Demo | HealthcareOSe',
      siteDescription: 'Welcome to my awesome site!',
      language: 'en', // prefer more explicit language codes like `en-AU` over `en`
    },
  },
});
