// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      title: "Demo | HealthcareOS",
      meta: [
        // <meta name="description" content="My amazing site">
        { name: "description", content: "HealthcareOS from Alloy Health" },
      ],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
    "nuxt-headlessui",
    "@nathanchase/nuxt-dayjs-module",
    "@pinia/nuxt",
  ],
  css: ["@fortawesome/fontawesome-svg-core/styles.css", "@/assets/styles/main.css"],
  headlessui: {
    prefix: "Headless",
  },
  dayjs: {
    plugins: ["duration", "relativeTime", "advancedFormat", "weekday", "customParseFormat", "badMutable"],
  },
  build: { transpile: ["@fortawesome/vue-fontawesome"] },
});
