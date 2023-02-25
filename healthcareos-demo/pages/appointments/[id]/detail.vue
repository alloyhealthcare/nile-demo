<template>
  <div class="w-full">
    <flow-navigation
      context="intake"
      :title="thisAppointment.patient.name" />
  </div>
</template>

<script setup>
  import FlowNavigation from '~/components/Navigation/FlowNavigation.vue';
  const route = useRoute();
  const id = route.params.id;
  const appointments = useState('appointments');

  const thisAppointment = appointments.value.find(
    (appointments) => appointments.encounter_id == id
  );
</script>
