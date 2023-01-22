<template>
  <div class="h-screen flex flex-col">
    <GlobalNavigation />
    <slot />
  </div>
</template>

<script setup>
import GlobalNavigation from "../components/Navigation/GlobalNavigation.vue";
</script>
