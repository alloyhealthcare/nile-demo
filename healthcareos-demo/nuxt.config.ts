// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase", "nuxt-headlessui", "@nathanchase/nuxt-dayjs-module"],
  css: ["@fortawesome/fontawesome-svg-core/styles.css", "@/assets/styles/main.css"],
  plugins: [{ src: "./plugins/posthog", mode: "client" }],
  headlessui: {
    prefix: "Headless",
  },
  dayjs: {
    plugins: ["duration", "relativeTime", "advancedFormat", "weekday", "customParseFormat"],
  },
  build: { transpile: ["@fortawesome/vue-fontawesome"] },
});
