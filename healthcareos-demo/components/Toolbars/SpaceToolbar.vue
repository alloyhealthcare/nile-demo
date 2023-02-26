<template>
  <div
    class="bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200 flex shadow-mg flex-row space-x-4 p-3">
    <NuxtLink
      :to="'/appointments/' + nextItem.encounter_id"
      class="group space-x-4 py-5 px-6 rounded-xl border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
      v-if="nextItem">
      <span class="font-semibold">Next</span>
      <span>{{ nextItem.name }}</span>
      <font-awesome-icon
        icon="fa-regular fa-arrow-down"
        class="group-hover:animate-bounce" />
    </NuxtLink>
    <NuxtLink
      class="py-5 px-6 border border-slate-200 rounded-xl"
      v-if="prevItem">
      <span class="font-semibold">Previous</span>
      {{ prevItem.name }}
      <font-awesome-icon icon="fa-regular fa-arrow-up" />
    </NuxtLink>
  </div>
</template>

<script setup></script>
