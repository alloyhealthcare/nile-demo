<template>
  <div class="flex flex-col">
    <div class="flex flex-row items-center justify-between px-6 py-2 text-sm bg-white">
      <div class="font-semibold">
        {{ title }}
      </div>
      <div class="flex flex-row items-center gap-x-2" v-if="context == 'Intake'">
        <a class="stepper-link">Vital Signs</a>
        <a class="stepper-link">Social Hx</a>
        <a class="stepper-link">PMHx</a>
        <a class="stepper-link">Chief Complaint</a>
        <a class="stepper-link">Review</a>
      </div>
      <div v-else class="text-base font-bold">
        <span>Progress Note</span>
      </div>
      <div>
        <button><font-awesome-icon icon="fa-regular faTimes" /></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlowDetailNavigation",
  props: {
    title: String,
    context: String,
    navigationPath: String,
  },
  data() {
    return {};
  },
};
</script>

<style>
.stepper-link {
  @apply font-semibold text-sm text-slate-500 p-3 hover:bg-slate-100 hover:text-slate-700 rounded-lg active:bg-slate-100;
}
</style>
