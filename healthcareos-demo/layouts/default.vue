<template>
  <div class="h-screen flex flex-col">
    <GlobalNavigation :current-page="thisPage" />
    <slot />
  </div>
</template>

<script setup>
import GlobalNavigation from "../components/Navigation/GlobalNavigation.vue";

const props = defineProps({
  thisPage: {
    type: String,
    required: true,
  },
});
</script>
