<template>
  <module-card-base
    :moduleInfo="moduleInfo"
    :primaryButton="primaryButton"
    :secondaryButton="secondaryButton"
    :tertiaryButton="tertiaryButton"
    class="h-144"
    v-if="showModule">
    <template #content>
      <div class="w-full">
        <div class="grid grid-cols-2 gap-2.5 w-full">
          <button
            v-for="medication in medicationList"
            :key="medication.id"
            @click="$emit('medicationSelected', medication.id)"
            class="bg-white border border-slate-200 p-2 rounded-lg flex flex-col gap-5 text-slate-500 hover:cursor-pointer">
            <div class="flex flex-col place-items-start gap-2">
              <span class="font-semibold text-sm leading-none">{{
                medication.Name
              }}</span>
              <span
                >{{ medication.dose_amount }}{{ medication.dose_unit }}
                {{ medication.delivery_method }}</span
              >
            </div>
            <span class="text-sm font-medium font-slate-500">{{
              medication.frequency
            }}</span>
          </button>
        </div>
      </div>
      {{ medicationSelected }}
    </template>
  </module-card-base>
</template>

<script>
  import ModuleCardBase from '../ModuleBase/ModuleCardBase.vue';
  export default {
    name: 'MedicationListModule',
    components: {
      ModuleCardBase,
    },
    data() {
      return {};
    },
    props: {
      patient: Object,
      medicationList: Array,
      encounter: Object,
      moduleInfo: Object,
      primaryButton: Object,
      secondaryButton: Object,
      tertiaryButton: Object,
      showModule: {
        type: Boolean,
        default: true,
      },
    },
    emits: ['medicationSelected'],
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
