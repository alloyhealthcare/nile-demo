<template>
  <NuxtLayout>
    <div class="container">
      <EasyDataTable
        :headers="headers"
        :items="tableItems"
        hide-footer>
        <template #item-encounter_link="{ encounter_link }">
          <NuxtLink :to="encounter_link">Visit</NuxtLink>
        </template>
      </EasyDataTable>
    </div>
  </NuxtLayout>
</template>

<script setup>
  //import type { Header, Item } from 'vue3-easy-data-table';

  const appointments = useState('appointments');

  const headers = [
    { text: 'Status', value: 'encounter_status', sortable: true },
    { text: 'Link', value: 'encounter_link' },
  ];

  const tableItems = appointments.value.map((appointment) => ({
    encounter_status: appointment.encounter_status,
    encounter_link: '/appointments/' + appointment.encounter_id,
  }));

  //   const items = appointments.map((appointment) => ({
  //     id: appointment.encounter_id,
  //     heading: appointment.patient.name,
  //     subHeading: appointment.encounter_time,
  //     status: appointment.encounter_status,
  //   }));

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
