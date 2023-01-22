<template>
  <div class="col-span-1 p-6 rounded-3xl bg-slateTransparent-3">
    <div class="mb-5">
      <span class="block pb-2 text-xl text-slate-700">Appointments</span>
      <span class="block text-slate-700">37 Appointments Today</span>
    </div>
    <div class="flex flex-col mb-6 space-y-3">
      <item-card
        v-for="item in items.slice(0, n)"
        :key="item.id"
        item_type="appointment"
        :appointmentTime="item.encounter_time"
        variant="tertiary"
        :path="'/'"
        :itemHeading="item.Patient"
        :status="item.encounter_status" />
      <button to="">+{{ l - n }} More</button>
    </div>
    <div class="pt-2 border-t border-slate-200">
      <span class="text-sm text-slate-700">14 Follow Ups, 7 New Patients, 3 Physicals</span>
    </div>
  </div>
</template>

<script setup>
import ItemCard from "../Cards/ItemCard.vue";
import { defineProps } from "vue";

const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
  l: {
    type: Number,
    required: true,
  },
  n: {
    type: Number,
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
