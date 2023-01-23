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
    <div class="p-6 flex-grow flex flex-col">
      <NuxtPage />
      <div
        class="bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200 flex shadow-mg flex-row space-x-4 p-3">
        <div>
          <button
            v-for="(appointment, index) in appointments"
            :key="appointment.encounter_id"
            class="hidden first:block space-x-4 py-5 px-6 rounded-xl border border-slate-200">
            <span class="font-semibold">Next</span>
            <span>{{ appointment.patient.name }}</span>
            <font-awesome-icon icon="fa-regular fa-arrow-down" />
          </button>
        </div>
        <div>
          <button
            v-for="(appointment, index) in appointments"
            :key="appointment.encounter_id"
            class="hidden last:block py-5 px-6 border border-slate-200 rounded-xl">
            <span class="font-semibold">Previous</span>
            {{ appointment.patient.name }}
            <font-awesome-icon icon="fa-regular fa-arrow-up" />
          </button>
        </div>
      </div>
    </div>
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
