<template>
  <div class="w-full h-screen flex flex-col items-center justify-center">
    <div
      class="flex flex-col items-center bg-white/80 border border-solid border-slate-100/80 rounded-xl shadow-md w-2/5 text-center p-5 space-y-6">
      <div class="flex flex-col space-y-2">
        <h1 class="text-2xl font-bold text-slate-700">
          Welcome to healthcareOS
        </h1>
        <span class="text-sm text-slate-500"
          >This is a non-functioning prototype of healthcareOS. Please do not
          submit real world data or rely on it for any clinical use.</span
        >
      </div>
      <div>
        <NuxtLink href="/launchpad">Log in</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  import HButton from '@/components/Buttons/HButton.vue';
</script>
