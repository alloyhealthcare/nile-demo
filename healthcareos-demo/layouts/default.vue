<template>
  <div class="h-screen flex flex-col">
    <GlobalNavigation :pages="pages" />
    <slot />
  </div>
</template>

<script setup>
import GlobalNavigation from "../components/Navigation/GlobalNavigation.vue";

const props = defineProps({
  pages: {
    type: Array,
  },
});
</script>
