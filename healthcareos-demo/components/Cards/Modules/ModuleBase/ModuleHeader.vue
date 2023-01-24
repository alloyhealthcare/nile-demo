<template>
  <div class="flex flex-row w-full px-4 py-3 border-b border-slate-200 text-sm gap-x-2 bg-slate-50 text-slate-600">
    <span class="font-semibold">
      {{ headerTitle }}
    </span>
    <span>
      {{ headerSubTitle }}
    </span>
    <h-badge variant="primary" icon="fa-check-circle">Test Text</h-badge>
  </div>
</template>

<script>
import HBadge from "~~/components/Buttons/HBadge.vue";
export default {
  name: "ModuleHeader",
  components: { HBadge },
  props: {
    headerTitle: String,
    headerSubTitle: String,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
