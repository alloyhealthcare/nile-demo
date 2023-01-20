// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase", "nuxt-headlessui"],
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  headlessui: {
    prefix: "Headless",
  },
});
