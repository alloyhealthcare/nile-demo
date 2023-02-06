<template>
  <NuxtLayout
    :name="'space'"
    :pages="pages"
    :items="todayAppointments">
    <template #pageContent>
      <div class="flex flex-row flex-grow space-x-3">
        <component
          v-for="(module, index) in modules"
          :is="module.component"
          :key="index"
          v-bind="module.props"
          :patient="thisAppointment.patient"
          :encounter="thisAppointment"
          class="mr-4" />
        <!-- <medication-list-module
          :moduleInfo="{
            title: 'Medication List',
            subTitle: thisAppointment.patient.name,
          }"
          :patient="thisAppointment.patient"
          :medicationList="thisAppointment.patient.medicationList"
          :primaryButton="{ text: 'Prescribe' }"
          :secondaryButton="{
            path: thisAppointment.path,
            text: 'Review',
          }"
          :tertiaryButton="{ text: 'Close' }" /> -->

        <!-- <PatientOverviewModule
          :moduleInfo="{ title: 'Now', subTitle: thisAppointment.room }"
          :patient="thisAppointment.patient"
          :encounter="thisAppointment"
          :primaryButton="{ path: '/intake/vitals', text: 'Begin' }"
          :secondaryButton="{ path: '/detail', text: 'Review' }"
          :tertiaryButton="{ path: '/note', text: 'Begin' }" /> -->
      </div>
      <div
        class="bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200 flex shadow-mg flex-row space-x-4 p-3">
        <NuxtLink
          :to="'/appointments/' + nextItem.encounter_id"
          class="group space-x-4 py-5 px-6 rounded-xl border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
          v-if="nextItem">
          <span class="font-semibold">Next</span>
          <span>{{ nextItem.patient.name }}</span>
          <font-awesome-icon
            icon="fa-regular fa-arrow-down"
            class="group-hover:animate-bounce" />
        </NuxtLink>
        <NuxtLink
          class="py-5 px-6 border border-slate-200 rounded-xl"
          v-if="prevItem">
          <span class="font-semibold">Previous</span>
          {{ prevItem.patient.name }}
          <font-awesome-icon icon="fa-regular fa-arrow-up" />
        </NuxtLink>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup>
  import PatientOverviewModule from '~/components/Cards/Modules/ModuleTemplates/PatientOverviewModule.vue';
  import MedicationListModule from '~/components/Cards/Modules/ModuleTemplates/MedicationListModule.vue';

  // Add route
  const route = useRoute();
  const id = route.params.id;

  // Add state for appointments and calculate current appointment

  const appointments = useState('appointments');

  const thisAppointment = appointments.value.find(
    (appointments) => appointments.encounter_id == id
  );

  // const appointmentDetail = useState('thisAppointment', () => thisAppointment);

  // Add computed for today's appointments
  const todayAppointments = appointments.value.map((appointment) => ({
    id: appointment.encounter_id,
    heading: appointment.patient.name,
    subHeading: appointment.encounter_time,
    status: appointment.encounter_status,
  }));

  // Pages for navigation
  const pages = [
    {
      name: 'Today',
      path: '/',
      index: 0,
    },
    {
      name: 'Appointments',
      path: '/appointments/' + thisAppointment.encounter_id,
      index: 1,
    },
    {
      name: thisAppointment.patient.name,
      path: '/appointments/' + thisAppointment.encounter_id,
      index: 2,
    },
  ];

  // Add modules
  const modules = [
    {
      id: 1,
      type: 'patient-overview',
      component: PatientOverviewModule,
      showModule: true,
      props: {
        type: 'Follow Up',
        moduleInfo: {
          title: 'Now',
          subTitle: thisAppointment.room,
        },
        primaryButton: {
          path: '/intake/vitals',
          text: 'Begin',
        },
        secondaryButton: {
          path: '/detail',
          text: 'Review',
        },
        tertiaryButton: {
          path: '/note',
          text: 'Begin',
        },
      },
    },
    {
      id: 2,
      type: 'medication-list',
      component: MedicationListModule,
      showModule: true,
      medicationList: thisAppointment.patient.medication_list,
      props: {
        type: 'Follow Up',
        moduleInfo: {
          title: 'Now',
          subTitle: thisAppointment.room,
        },
        primaryButton: {
          path: '/intake/vitals',
          text: 'Begin',
        },
        secondaryButton: {
          path: '/detail',
          text: 'Review',
        },
        tertiaryButton: {
          path: '/note',
          text: 'Begin',
        },
      },
    },
  ];

  // Add computed for next and previous appointments
  const nextItem = computed(() => {
    const filteredNext = appointments.value.filter((appointment) => {
      return (
        appointment != thisAppointment.encounter_time &&
        appointment.encounter_time > thisAppointment.encounter_time
      );
    });
    return filteredNext.length ? filteredNext[0] : null;
  });

  const prevItem = computed(() => {
    const filteredPrev = appointments.value.filter((appointment) => {
      return (
        appointment != thisAppointment.encounter_time &&
        appointment.encounter_time < thisAppointment.encounter_time
      );
    });
    return filteredPrev.length ? filteredPrev[0] : null;
  });
</script>
