<template>
  <NuxtLayout>
    <div class="container">
      <EasyDataTable
        :headers="headers"
        :items="appointments" />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
  import type { Header, Item } from 'vue3-easy-data-table';

  const appointments = useState('appointments');

  const headers: Header[] = [
    { text: 'Status', value: 'encounter_status', sortable: true },
  ];

  //   const items: Item[] = [
  //     {
  //       player: 'Stephen Curry',
  //       team: 'GSW',
  //       number: 30,
  //       position: 'G',
  //       indicator: { height: '6-2', weight: 185 },
  //       lastAttended: 'Davidson',
  //       country: 'USA',
  //     },
  //     {
  //       player: 'Lebron James',
  //       team: 'LAL',
  //       number: 6,
  //       position: 'F',
  //       indicator: { height: '6-9', weight: 250 },
  //       lastAttended: 'St. Vincent-St. Mary HS (OH)',
  //       country: 'USA',
  //     },
  //     {
  //       player: 'Kevin Durant',
  //       team: 'BKN',
  //       number: 7,
  //       position: 'F',
  //       indicator: { height: '6-10', weight: 240 },
  //       lastAttended: 'Texas-Austin',
  //       country: 'USA',
  //     },
  //     {
  //       player: 'Giannis Antetokounmpo',
  //       team: 'MIL',
  //       number: 34,
  //       position: 'F',
  //       indicator: { height: '6-11', weight: 242 },
  //       lastAttended: 'Filathlitikos',
  //       country: 'Greece',
  //     },
  //   ];
</script>

<style lang="scss" scoped></style>
