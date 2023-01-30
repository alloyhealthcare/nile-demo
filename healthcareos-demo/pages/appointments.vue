<template>
  <NuxtLayout :name="'space'" :pages="pages" :items="appointments">
    <template #pageContent>
      <div class="flex flex-row flex-grow">
        <div class="p-6 flex-grow flex flex-col">
          <NuxtPage />
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;

const appointments = useState("appointments");

const pages = [
  {
    name: "Today",
    path: "/",
    index: 0,
  },
  {
    name: "Appointments",
    path: "/appointments",
    index: 1,
  },
];
</script>
