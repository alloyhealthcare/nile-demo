<template>
  <div class="flex flex-row flex-grow">
    <space-sidebar title="Appointments" meta="17 Appointments">
      <template #sidebarList>
        <item-card
          v-for="appointment in appointments"
          :key="appointment.encounter_id"
          item_type="appointment"
          :appointmentTime="appointment.encounter_time"
          variant="tertiary"
          :path="'/appointments/' + appointment.encounter_id"
          :itemHeading="appointment.patient.name"
          :status="appointment.encounter_status"
      /></template>
    </space-sidebar>
    <div class="p-6 flex-grow"><NuxtPage /></div>
  </div>
</template>

<script setup>
import SpaceSidebar from "~/components/Sidebars/SpaceSidebar.vue";
import ItemCard from "~/components/Cards/ItemCard.vue";

const route = useRoute();
const id = route.params.id;

const client = useSupabaseClient();

const { data: appointments } = await useAsyncData("encounters", async () => {
  const { data } = await client
    .from("encounters")
    .select(`*, patient(name)`, { count: "exact", head: false })
    .order("encounter_time", { ascending: true });
  return data;
});
</script>
