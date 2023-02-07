<template>
  <NuxtLayout
    :name="'space'"
    :pages="pages"
    :items="todayAppointments">
    <template #pageContent>
      <div class="flex flex-row grow space-x-3 w-full overflow-scroll">
        <component
          v-for="(module, index) in patientModules"
          v-show="module.props.showModule"
          :is="module.component"
          :key="index"
          v-bind="module.props"
          :patient="thisAppointment.patient"
          :encounter="thisAppointment"
          @medicationSelected="selectedMedicationId"
          class="mr-4" />

        {{ selectedMedication }}
        <!-- <component
          v-for="medication in patientMedList"
          :is="MedicationDetailModule"
          :key="medication.id"
          v-bind="patientMedList" /> -->
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
  import MedicationDetailModule from '~~/components/Cards/Modules/ModuleTemplates/MedicationDetailModule.vue';

  const props = [
    {
      patientMedList: {
        type: Array,
        default: () => [],
      },
    },
    {
      medDetail: {
        type: Object,
        default: null,
      },
    },
  ];

  // Add route
  const route = useRoute();
  const id = route.params.id;

  const client = useSupabaseClient();

  // Add state for appointments and calculate current appointment

  const appointments = useState('appointments');

  const medications = useState('medications');

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

  const patientMedList = medications.value.filter(
    (medication) => medication.patient == thisAppointment.patient.mrn
  );

  const medDetail = patientMedList.findIndex(
    (medication) => medication.index == patientMedList.index
  );

  const eachMedication = patientMedList.forEach((medication) => {
    return medication;
  });

  // Add modules
  const patientModules = [
    {
      id: 1,
      type: 'patient-overview',
      component: PatientOverviewModule,
      props: {
        showModule: true,
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

      props: {
        showModule: true,
        type: 'Follow Up',
        medicationList: patientMedList,
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

  //const chooseMedication = (modules[2] = !showModule);

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
