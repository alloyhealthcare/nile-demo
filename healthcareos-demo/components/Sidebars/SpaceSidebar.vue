<template>
  <div
    class="sidebar z-1 flex flex-col justify-between px-6 w-sidebar bg-white/25 pt-9 h-full shrink-0">
    <div class="flex flex-col grow">
      <div class="mb-4">
        <h1 class="text-xl text-slate-700">{{ title }}</h1>
        <h3 class="text-sm text-slate-600">{{ meta }}</h3>
      </div>
      <div class="flex flex-col space-y-4">
        <slot name="sidebarList" />
      </div>
    </div>
    <div
      v-if="actions"
      class="p-4">
      <slot name="sidebarActions" />
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    title: String,
    meta: String,
    actions: Boolean,
  });
</script>

<style>
  .sidebar {
    backdrop-filter: blur(12px);
  }
</style>
