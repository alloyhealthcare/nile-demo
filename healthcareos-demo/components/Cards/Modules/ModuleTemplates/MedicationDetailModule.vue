<template>
  <transition
    name="fade"
    appear>
    <module-card-base
      :moduleInfo="moduleInfo"
      :primaryButton="primaryButton"
      :secondaryButton="secondaryButton"
      :tertiaryButton="tertiaryButton"
      class="h-144">
      <template #content>
        <div class="w-full">
          <div class="w-full flex flex-row items-center justify-between mb-6">
            <t-tag variant="medication"
              >{{ medicationItem.dose_amount }}{{ medicationItem.dose_unit }}
              {{ medicationItem.delivery_method }}</t-tag
            >
            <div class="flex flex-row text-xs gap-x-2">
              <span>Refills 7</span>
            </div>
          </div>
          <div class="flex flex-col gap-y">
            <span class="font-semibold text-slate-800">{{
              medicationItem.name
            }}</span>
            <span class="text-slate-500">{{ medicationItem.frequency }}</span>
          </div>
          <div>Reason</div>
        </div>
      </template>
    </module-card-base>
  </transition>
</template>

<script>
  import ModuleCardBase from '../ModuleBase/ModuleCardBase.vue';
  export default {
    name: 'MedicationDetailModule',
    components: {
      ModuleCardBase,
    },
    data() {
      return {};
    },
    props: {
      patient: Object,
      medicationItem: Object,
      encounter: Object,
      moduleInfo: Object,
      primaryButton: Object,
      secondaryButton: Object,
      tertiaryButton: Object,
    },
  };
</script>

<style>
  .fade-enter-active {
    transition: all 0.2s;
  }

  .fade-enter {
    opacity: 0;
    transform: translateY(10px);
  }
</style>
