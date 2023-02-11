<template>
  <div
    class="bg-white w-moduleCard relative flex flex-col rounded-xl overflow-hidden shadow-md shadow-slate-900/10 flex-none snap-center">
    <module-header
      :headerTitle="moduleInfo.title"
      :headerSubTitle="moduleInfo.subTitle"
      :badge="moduleInfo.badge" />
    <div class="px-4 pt-4 py-9 flex-grow overflow-scroll">
      <slot name="content" />
    </div>
    <module-footer
      class="absolute inset-x-0 bottom-0"
      :primaryButton="moduleActions.primary"
      :secondaryButton="moduleActions.secondary"
      :tertiaryButton="moduleActions.tertiary" />
  </div>
</template>

<script setup>
  import ModuleFooter from './ModuleFooter.vue';
  import ModuleHeader from './ModuleHeader.vue';

  const props = defineProps({
    moduleInfo: {
      title: String,
      subTitle: String,
      badge: Object,
    },
    moduleActions: {
      primary: Object,
      secondary: Object,
      tertiary: Object,
    },
  });
</script>

<!-- <script>
  export default {
    name: 'ModuleCardBase',
    props: {
      moduleInfo: {
        title: String,
        subTitle: String,
      },
      moduleActions: {
        primary: Object,
        secondary: Object,
        tertiary: Object,
      },
    },
    components: {
      ModuleHeader,
      ModuleFooter,
    },
  };
</script> -->

<style></style>
