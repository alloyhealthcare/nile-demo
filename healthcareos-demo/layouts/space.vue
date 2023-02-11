<template>
  <div class="h-screen flex flex-col w-full">
    <GlobalNavigation :pages="pages" />
    <div
      class="flex flex-row flex-grow"
      v-if="flowActive">
      <space-sidebar
        title="Appointments"
        meta="17 Appointments">
        <template #sidebarList>
          <item-card
            v-for="item in items"
            :key="item.id"
            item_type="appointments"
            :subHeading="item.subHeading"
            variant="tertiary"
            :path="'/appointments/' + item.id"
            :itemHeading="item.heading"
            :status="item.status"
        /></template>
      </space-sidebar>
      <div class="p-6 grow flex flex-col">
        <slot name="flowContent" />
      </div>
    </div>
    <div
      class="flex flex-row w-full h-full"
      v-if="flowActive == false">
      <slot name="flowDetail" />
    </div>
  </div>
</template>

<script setup>
  import GlobalNavigation from '~/components/Navigation/GlobalNavigation.vue';
  import SpaceSidebar from '~/components/Sidebars/SpaceSidebar.vue';
  import ItemCard from '~/components/Cards/ItemCard.vue';

  const props = defineProps({
    items: {
      type: Array,
    },
    flowActive: {
      type: Boolean,
      default: true,
    },
    pages: {
      type: Array,
    },
  });
</script>
