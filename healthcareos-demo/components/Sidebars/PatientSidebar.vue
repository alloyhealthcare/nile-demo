<template>
  <div class="w-sidebar">
    <div class="px-6 py-4 bg-white border border-slate-200 rounded-xl flex flex-col items-center">
      <span class="text-xl font-bold pb-2">{{ patient.name }}</span>
      <div class="font-sm align-center flex flex-col">
        {{ patient.birthDate }}
        <div><span class="font-bold">MRN</span> {{ patient.mrn }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PatientSidebar",
  props: {
    patient: Object,
  },
};
</script>

<style></style>
