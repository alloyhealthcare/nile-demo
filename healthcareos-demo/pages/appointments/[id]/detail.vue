<template>
  <div>{{ id }} {{ thisAppointment.patient.name }} Detail</div>
</template>

<script setup>
  const route = useRoute();
  const id = route.params.id;
  const appointments = useState('appointments');

  const thisAppointment = appointments.value.find(
    (appointments) => appointments.encounter_id == id
  );
</script>
