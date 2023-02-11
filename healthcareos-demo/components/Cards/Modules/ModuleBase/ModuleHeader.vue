<template>
  <div
    class="flex flex-row w-full px-4 py-3 border-b border-slate-200 text-sm gap-x-2 bg-slate-50 text-slate-600">
    <span class="font-semibold">
      {{ headerTitle }}
    </span>
    <span>
      {{ headerSubTitle }}
    </span>
    <h-badge
      :variant="badge.variant"
      size="small"
      :icon="badge.icon"
      >{{ badge.content }}</h-badge
    >
  </div>
</template>

<script setup>
  import HBadge from '~/components/Badges/HBadge.vue';

  const props = defineProps({
    headerTitle: {
      type: String,
      default: '',
    },
    headerSubTitle: {
      type: String,
      default: '',
    },
    badge: {
      type: Object,
      default: () => ({}),
    },
  });
</script>

<!-- <script>
  export default {
    name: 'ModuleHeader',
    components: { HBadge },
    props: {
      headerTitle: String,
      headerSubTitle: String,
    },
    data() {
      return {};
    },
  };
</script> -->

<style></style>
