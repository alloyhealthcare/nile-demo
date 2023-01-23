<template>
  <div class="p-6 flex-grow">Test{{ $route.params.id }} intake {{ thisAppointment.encounter_date }}</div>
</template>

<script setup>
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

const thisAppointment = appointments.value.find((appointments) => appointments.encounter_id == id);
</script>
