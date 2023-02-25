<template>
  <div class="col-span-1 p-6 rounded-3xl bg-slate-900/[.022]">
    <div class="mb-5">
      <span class="block pb-1 text-xl text-slate-700 capitalize font-medium">{{
        type
      }}</span>
      <span class="block text-slate-700 capitalize"
        >{{ totalLength }} {{ type }} Today</span
      >
    </div>
    <div class="flex flex-col mb-6 space-y-3">
      <item-card
        v-for="item in items.slice(0, number)"
        :key="item.id"
        :item_type="type"
        :subHeading="item.subHeading"
        :path="type + '/' + item.id"
        :itemHeading="item.heading"
        :status="item.status" />
      <button to="">+{{ totalLength - number }} More</button>
    </div>
    <div class="pt-2 border-t border-slate-200">
      <span class="text-sm text-slate-700">{{ listMeta }}</span>
    </div>
  </div>
</template>

<script setup>
  import ItemCard from '../Cards/ItemCard.vue';
  import { defineProps } from 'vue';

  const props = defineProps({
    items: {
      type: Object,
      required: true,
    },
    totalLength: {
      type: Number,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    listMeta: {
      type: String,
      required: true,
    },
  });
</script>
<script>
  export default {
    components: {
      ItemCard,
    },
    //  props: {
    //    items: {
    //      type: Object,
    //      required: true,
    //    },
    //    l: {
    //      type: Number,
    //      required: true,
    //    },
    //    n: {
    //     type: Number,
    //      required: true,
    //    },
    //  },
  };
</script>
