<template>
  <div>Test {{ route.params.id }}</div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(true);

function setIsOpen(value) {
  isOpen.value = value;
}

const route = useRoute();
const id = route.params.id;

const appointment = useState("thisAppointment");
</script>
