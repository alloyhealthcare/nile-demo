<template>
  <div>Test</div>
</template>

<script setup>
  const route = useRoute();
  const id = route.params.id;

  const appointment = useState('thisAppointment');
</script>
