<template>
  <div class="h-screen">
    <GlobalNavigation />
    <div class="container pt-6">
      <slot />
    </div>
  </div>
</template>

<script setup>
import GlobalNavigation from "../components/Navigation/GlobalNavigation.vue";
</script>
