<template>
  <div class="p-6 flex-grow">Chief Commplaint</div>
</template>

<script setup>
  const route = useRoute();
  const id = route.params.id;

  const thisAppointment = useState('thisAppointment');
</script>
