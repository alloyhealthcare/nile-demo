<template>
  <div class="h-screen">
    <GlobalNavigation />
    <slot />
  </div>
</template>

<script setup>
import GlobalNavigation from "../components/Navigation/GlobalNavigation.vue";
</script>
