<template>
  <div class="flex flex-col px-4 py-3 bg-white border border-slate-200 rounded-xl gap-y-1">
    <span class="text-xs font-medium capitalize text-slate-600">{{ item.vitalType }}</span>
    <div class="flex flex-row items-baseline font-medium gap-x-2">
      <span class="text-xl">{{ item.value }}</span>
      <span class="text-base text-slate-500" v-if="item.unit">{{ item.unit }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "VitalItemCard",
  props: {
    item: {
      value: String,
      unit: String,
      vitalType: String,
    },
  },
};
</script>

<style></style>
