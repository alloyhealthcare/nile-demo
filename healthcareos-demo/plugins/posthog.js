/*import posthog from "posthog-js";

/*export default {
  install(app) {
    app.config.globalProperties.$posthog = posthog.init("phc_mbCPc8pLdEzaePrHJkRJS8ciGyhEbPzSbT4nijoILrW", {
      api_host: "https://app.posthog.com",
    });
  },
};*/

/*export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.$posthog = posthog.init("phc_mbCPc8pLdEzaePrHJkRJS8ciGyhEbPzSbT4nijoILrW", {
    api_host: "https://app.posthog.com",
  });
});

/*export default function ({ app: { router } }, inject) {
  // Init PostHog
  posthog.init(phc_mbCPc8pLdEzaePrHJkRJS8ciGyhEbPzSbT4nijoILrW, {
    api_host: "https://app.posthog.com",
    capture_pageview: true,
    // loaded: () => posthog.identify("unique_id"), // If you can already identify your user
  });

  // Inject PostHog into the application and make it available via this.$posthog (or app.$posthog)
  inject("posthog", posthog);

  // Make sure that pageviews are captured with each route change
  router.afterEach((to) => {
    Vue.nextTick(() => {
      /* Note: this might also be a good place to call posthog.register(...) in order to update your properties
      on each page view
      
      posthog.capture("$pageview", {
        $current_url: to.fullPath,
      });
    });
  });
}*/
