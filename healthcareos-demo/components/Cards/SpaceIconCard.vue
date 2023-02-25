<template>
  <NuxtLink
    href="#"
    class="flex flex-col justify-between p-3 bg-white shadow shadow-slate-900/10 rounded-xl aspect-square">
    <div>
      <div
        class="flex w-8 h-8 mb-1 bg-orange-100 rounded-lg place-content-center">
        <component :is="icon" />
      </div>
      <div class="font-semibold text-slate-700 pb-1">{{ name }}</div>
      <div class="text-xs text-slate-600">{{ meta }}</div>
    </div>
    <div class="text-xxs text-slate-500">{{ details }}</div>
  </NuxtLink>
</template>

<script setup>
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    meta: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
  });
</script>

<style scoped>
  a {
    width: 150px;
  }
</style>
