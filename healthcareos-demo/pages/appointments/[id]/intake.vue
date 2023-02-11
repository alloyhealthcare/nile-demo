<template>
  <NuxtLayout :name="'default'"
    >{{ id }} {{ thisAppointment.patient.name }} Intake<NuxtPage
  /></NuxtLayout>
</template>

<script setup>
  const route = useRoute();
  const id = route.params.id;
  const appointments = useState('appointments');

  const thisAppointment = appointments.value.find(
    (appointments) => appointments.encounter_id == id
  );
</script>
