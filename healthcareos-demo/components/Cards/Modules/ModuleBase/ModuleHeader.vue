<template>
  <div class="flex flex-row w-full px-4 py-3 border-b border-slate-200 text-sm gap-x-2 bg-slate-50 text-slate-600">
    <span class="font-semibold">
      {{ headerTitle }}
    </span>
    <span>
      {{ headerSubTitle }}
    </span>
  </div>
</template>

<script>
export default {
  name: "ModuleHeader",
  components: {},
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
