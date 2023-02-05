<template>
  <div
    class="w-full h-screen flex flex-col items-center bg-white relative justify-center">
    <div
      class="w-1/2 h-[350px] p-0.5 bg-slate-200/50 backdrop-blur-[144px] rounded-2xl z-10">
      <div
        class="flex flex-col w-full h-full justify-center items-center bg-white rounded-[.875em] text-center p-8 space-y-6">
        <div class="flex flex-col space-y-2 w-2/3">
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
    <div
      class="flex flex-row py-5 items-stretch divide-x divide-slate-200 z-10">
      <div class="flex flex-col items-center px-4">
        <span class="font-bold uppercase tracking-wider text-xxs text-slate-500"
          >Proudly built with:
        </span>

        <div class="flex flex-row items-center space-x-5">
          <NuxtLink class="flex flex-row h-10">
            <img src="@/assets/img/logo/vuejs-ar21.svg" />
          </NuxtLink>
          <NuxtLink class="flex flex-row h-5">
            <img src="@/assets/img/logo/full-logo-green-dark.svg" />
          </NuxtLink>
          <NuxtLink class="flex flex-row h-4">
            <img
              src="@/assets/img/logo/tailwindcss-logotype.svg"
              class="w-auto h-full" />
          </NuxtLink>
        </div>
      </div>
      <div class="flex flex-col px-4">
        <span class="font-bold uppercase tracking-wider text-xxs text-slate-500"
          >Connect</span
        >
        <div class="flex flex-row space-x-4">
          <NuxtLink>
            <font-awesome-icon
              icon="fa-brands fa-github"
              class="text-2xl" />
          </NuxtLink>
          <NuxtLink>
            <font-awesome-icon
              icon="fa-brands fa-youtube"
              class="text-2xl" />
          </NuxtLink>
        </div>
      </div>
    </div>
    <img
      src="@/assets/img/landing-bg-gradient.png"
      class="w-3/5 absolute top-3/5 rotate-180" />
  </div>
</template>

<script setup>
  import HButton from '@/components/Buttons/HButton.vue';
</script>
