<template>
  <div
    class="w-full h-screen flex flex-col items-center justify-center bg-white relative">
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
      class="flex flex-row pb-8 items-stretch divide-x divide-slate-200 z-10 absolute bottom-0">
      <div class="flex flex-col items-center pr-8">
        <span
          class="font-bold uppercase tracking-wider text-xxs text-slate-500 mb-2"
          >Proudly built with
        </span>

        <div class="flex flex-row items-center space-x-8">
          <NuxtLink
            class="group flex flex-row"
            v-for="logo in logos"
            :key="logo.id"
            :to="logo.link"
            target="_blank">
            <component
              :is="logo.icon"
              class="h-5 logoIcon" />
          </NuxtLink>
        </div>
      </div>
      <!-- <div class="flex flex-col pl-8">
        <span class="font-bold uppercase tracking-wider text-xxs text-slate-500"
          >Follow</span
        >
        <div
          class="flex flex-row space-x-4 h-6 items-center grow justify-center">
          <NuxtLink
            v-for="social in socials"
            :key="social.id"
            to="{{ social.link } }}"
            target="_blank">
            <font-awesome-icon
              :icon="social.icon"
              class="text-2xl" />
          </NuxtLink>
        </div>
      </div> -->
    </div>
    <img
      src="@/assets/img/landing-bg-gradient.png"
      class="w-3/5 absolute mx-auto rotate-180" />
  </div>
</template>

<script setup>
  import VueLogo from 'assets/img/logo/vuejs.svg';
  import NuxtLogo from 'assets/img/logo/nuxt.svg';
  import SupabaseLogo from 'assets/img/logo/supabase.svg';
  import TailwindLogo from 'assets/img/logo/tailwindcss.svg';
  import Vercel from 'assets/img/logo/vercel.svg';

  const logos = [
    {
      id: 1,
      name: 'Vue',
      link: 'https://vuejs.org/',
      icon: VueLogo,
    },
    {
      id: 2,
      name: 'Nuxt',
      link: 'https://nuxt.com/',
      icon: NuxtLogo,
    },
    {
      id: 3,
      name: 'TailwindCSS',
      link: 'https://tailwindcss.com/',
      icon: TailwindLogo,
    },
    {
      id: 4,
      name: 'Supabase',
      link: 'https://supabase.com/',
      icon: SupabaseLogo,
    },
    {
      id: 5,
      name: 'Vercel',
      link: 'https://vercel.com/',
      icon: Vercel,
    },
  ];

  const socials = [
    {
      id: 1,
      name: 'Github',
      icon: 'fa-brands fa-github',
      link: '#',
    },
    {
      id: 1,
      name: 'YouTube',
      icon: 'fa-brands fa-youtube',
      link: '#',
    },
  ];
</script>

<style lang="scss">
  .logoIcon .logo {
    @apply fill-slate-400 transition-all duration-100;

    &.logo-1 {
      @apply group-hover:fill-[#1F1F1F];
    }

    &.logo-1a {
      @apply group-hover:fill-[#3ECF8E];
    }

    &.logo-2 {
      @apply group-hover:fill-[#38bdf8];
    }

    &.logo-2a {
      @apply group-hover:fill-[#0f172a];
    }

    &.logo-3 {
      @apply group-hover:fill-[#00DC82];
    }

    &.logo-3a {
      @apply group-hover:fill-[#000];
    }

    &.logo-4 {
      @apply group-hover:fill-[#41b883];
    }
    &.logo-4a {
      @apply group-hover:fill-[#34495e];
    }
    &.logo-5 {
      @apply group-hover:fill-[#000];
    }
  }
</style>
