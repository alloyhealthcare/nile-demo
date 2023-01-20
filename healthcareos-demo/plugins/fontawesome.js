// For Nuxt 3
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowDown, faBell, faArrowLeft, faArrowRight, fas, faTimes } from "@fortawesome/pro-solid-svg-icons";
import {} from "@fortawesome/pro-light-svg-icons";
import { far, faBicycle } from "@fortawesome/pro-regular-svg-icons";
// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas, far, faBicycle, faBell, faArrowRight, faArrowLeft, faArrowDown, faTimes);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
