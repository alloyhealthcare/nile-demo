<template>
  <div
    class="bg-white w-moduleCard relative flex flex-col rounded-xl overflow-hidden shadow-md shadow-slate-900/10 flex-none snap-center">
    <module-header :headerTitle="moduleInfo.title" :headerSubTitle="moduleInfo.subTitle" />
    <div class="px-4 pt-4 py-9 flex-grow overflow-scroll">
      <slot name="content" />
    </div>
    <module-footer
      class="absolute inset-x-0 bottom-0"
      :primaryButton="primaryButton"
      :secondaryButton="secondaryButton"
      :tertiaryButton="tertiaryButton" />
  </div>
</template>

<script>
import ModuleFooter from "./ModuleFooter.vue";
import ModuleHeader from "./ModuleHeader.vue";

export default {
  name: "ModuleCardBase",
  props: {
    moduleInfo: {
      title: String,
      subTitle: String,
    },
    primaryButton: Object,
    secondaryButton: Object,
    tertiaryButton: Object,
  },
  components: {
    ModuleHeader,
    ModuleFooter,
  },
};
</script>

<style></style>
