<template>
  <div class="p-6 flex-grow">
    <patient-overview-module
      :moduleInfo="{ title: 'Now', subTitle: thisAppointment.room }"
      :patient="thisAppointment.patient"
      :encounter="thisAppointment"
      :primaryButton="{ path: '/intake/vitals', text: 'Review' }"
      :secondaryButton="{ path: '/intake/vitals', text: 'Review' }"
      :tertiaryButton="{ path: '/note', text: 'Begin' }" />
  </div>
  <h-badge variant="primary" :solid="true" size="large">Badge</h-badge>
</template>

<script setup>
import PatientOverviewModule from "~/components/Cards/Modules/ModuleTemplates/PatientOverviewModule.vue";
import HBadge from "~/components/Badges/HBadge.vue";

const route = useRoute();
const id = route.params.id;

const client = useSupabaseClient();

const { data: appointments } = await useAsyncData("encounters", async () => {
  const { data } = await client
    .from("encounters")
    .select(`*, patient(*)`, { count: "exact", head: false })
    .order("encounter_time", { ascending: true });
  return data;
});

const thisAppointment = appointments.value.find((appointments) => appointments.encounter_id == id);
</script>
