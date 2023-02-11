<template>
  <NuxtLink
    class="p-4 leading-none rounded-2xl bg-white/60 border border-transparent transition hover:shadow hover:bg-white/100 hover:shadow-slate-900/10 hover:border-slate-200 flex flex-row items-center justify-between"
    :exact-active-class="'bg-white/100 shadow shadow-slate-900/10'"
    :active-class="'opacity-100'"
    :to="path">
    <div>
      <div class="mb-2">
        <span class="text-base font-medium leading-none">{{
          itemHeading
        }}</span>
      </div>
      <div v-if="item_type != 'message'">
        <div class="flex flex-row space-x-3 leading-none items-center">
          <div
            class="text-xs font-semibold flex flex-row gap-x-1 text-slate-500 items-center">
            <font-awesome-icon
              icon="fa-solid fa-clock"
              v-if="item_type == 'appointment'" />
            <div v-if="isNow || isNext">
              <span v-if="isNow">Now</span>
              <span v-if="isNext">Next</span>
            </div>
            <span v-else>{{ formattedTime }} </span>
          </div>
          <div
            v-if="item_type === 'appointments'"
            class="flex flex-row space-x-3">
            <div
              class="text-xs"
              :class="[isCheckedIn ? 'text-blue-600' : 'text-slate-400']"
              v-if="status">
              <font-awesome-icon
                icon="fa-regular fa-circle-check"
                class="mr-0.5" />
              Checked In
            </div>
            <div
              class="text-xs"
              :class="[isRoomed ? 'text-blue-600' : 'text-slate-400']"
              v-if="status != 'No Status'">
              <font-awesome-icon
                icon="fa-regular fa-sign-in"
                class="mr-1" />Roomed
            </div>
          </div>
          <div
            v-if="item_type === 'order'"
            class="flex flex-row space-x-3">
            <div
              class="text-xs"
              :class="[orderStatus ? 'text-blue-600' : 'text-slate-400']">
              <font-awesome-icon
                icon="fa-regular fa-circle-check"
                class="mr-0.5" />
              {{ status }}
            </div>
          </div>
        </div>

        <div
          class=""
          v-if="item_type === 'order'"></div>
      </div>
    </div>
    <div class="currentItem">
      <font-awesome-icon
        icon="fa-regular fa-arrow-right"
        class="text-slate-400" />
    </div>
  </NuxtLink>
</template>

<script setup>
  import { useDateFormat } from '@vueuse/core';
  const props = defineProps({
    path: String,
    itemHeading: String,
    item_type: String,
    subHeading: String,
    status: String,
  });

  const time = ref(props.subHeading);

  const formattedTime = useDateFormat(time, 'HH:mm a');

  const isCheckedIn = ref(props.status != 'No Status');
  const isRoomed = ref(props.status === 'Roomed');
  const orderStatus = ref(props.status === 'Filled');
  const isNow = ref(formattedTime === '08:30 am');
  const isNext = ref(formattedTime == '08:45 am');
</script>

<style scoped>
  .active--exact .currentItem {
    display: block;
  }
  a .currentItem {
    display: none;
  }
</style>
