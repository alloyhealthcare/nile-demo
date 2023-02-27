<template>
  <NuxtLayout
    :name="'space'"
    :pages="pages"
    :items="todayAppointments"
    :flowActive="isParentRoute">
    <template #flowContent>
      <div class="flex flex-row grow w-full overflow-scroll gap-x-6">
        <component
          v-for="(module, id) in allModules"
          v-show="module.props.showModule"
          :is="module.component"
          :key="id"
          v-bind="module.props"
          :patient="thisAppointment.patient"
          :encounter="thisAppointment" />
        <div class="w-96 flex-none ml-6">
          <div class="mb-12">
            <div class="bg-white rounded-md border p-2 border-slate-200">
              Search
            </div>
          </div>
          <div class="mb-4">
            <span class="font-semibold text-slate-500">Open...</span>
          </div>
          <div class="grid grid-cols-3 w-full mb-8 gap-4">
            <h-button
              variant="buttonXL"
              @click="openModule, 2">
              Last Appointment
            </h-button>
            <button
              variant="buttonXL"
              @click="openModule(2)">
              Medications
            </button>
            <h-button variant="buttonXL">Medical History</h-button>
            <h-button variant="buttonXL">Allergies</h-button>
            <h-button variant="buttonXL">Results</h-button>
          </div>
          <div class="mb-4">
            <span class="font-semibold text-slate-500">Create...</span>
          </div>
          <div class="grid grid-cols-2 w-full mb-8 gap-4">
            <h-button variant="buttonXL">Send Message</h-button>
            <h-button variant="buttonXL">Create Order</h-button>
            <h-button variant="buttonXL">Refill</h-button>
            <h-button variant="buttonXL">Referral</h-button>
          </div>
        </div>
      </div>
      <space-toolbar
        :nextItem="{
          baseLink: '/appointments',
          id: nextItem.encounter_id,
          name: nextItem.patient.name,
        }"
        :prevItem="{
          baseLink: '/appointments',
          //id: prevItem.encounter_id,
          //name: prevItem.patient.name,
        }" />
    </template>
    <template #flowDetail><NuxtPage /></template>
  </NuxtLayout>
</template>

<script setup>
  import PatientOverviewModule from '~/components/Cards/Modules/ModuleTemplates/PatientOverviewModule.vue';
  import MedicationListModule from '~/components/Cards/Modules/ModuleTemplates/MedicationListModule.vue';
  import MedicationDetailModule from '~~/components/Cards/Modules/ModuleTemplates/MedicationDetailModule.vue';
  import SpaceToolbar from '~/components/Toolbars/SpaceToolbar.vue';
  import HButton from '~/components/Buttons/HButton.vue';

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

  const isParentRoute = computed(() => {
    return (
      route.path === '/appointments/' + id ||
      route.path === '/appointments/' + id + '/'
    );
  });

  const appointments = useState('appointments');

  const medications = useState('medications');

  const thisAppointment = appointments.value.find(
    (appointments) => appointments.encounter_id == id
  );

  //const thisAppointmentState = useState('thisAppointment', thisAppointment);

  // const appointmentDetail = useState('thisAppointment', () => thisAppointment);

  // Add computed for today's appointments
  const todayAppointments = appointments.value.map((appointment) => ({
    id: appointment.encounter_id,
    heading: appointment.patient.name,
    subHeading: appointment.encounter_date,
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
          badge: {
            variant: 'primary',
            solid: true,
            text: 'Follow Up',
          },
        },
        moduleActions: {
          primary: {
            path: '/intake/detail',
            text: 'Begin Encounter',
          },
          secondary: {
            path: '/appointments/' + id + '/detail',
            text: 'Review',
          },
          tertiary: {
            path: '/note',
            text: 'Cancel',
          },
        },
      },
    },
    {
      id: 2,
      type: 'medication-list',
      component: MedicationListModule,
      props: {
        showModule: null,
        type: 'Follow Up',
        medicationList: patientMedList,
        moduleInfo: {
          title: 'Now',
          subTitle: thisAppointment.room,
        },
        moduleActions: {
          primary: {
            path: '/intake/vitals',
            text: 'Begin',
          },
          secondary: {
            path: '/detail',
            text: 'Review',
          },
          tertiary: {
            path: '/note',
            text: 'Begin',
          },
        },
      },
    },
  ];

  const medicationModules = patientMedList.map((medication) => ({
    component: MedicationDetailModule,
    id: '1' + medication.medication_id,
    type: 'medication-detail',
    props: {
      showModule: false,
      medicationItem: {
        id: medication.medication_id,
        dose_amount: medication.dose_amount,
        dose_unit: medication.dose_unit,
        frequency: medication.frequency,
        Name: medication.Name,
      },
      moduleInfo: {
        title: thisAppointment.patient.name,
        subTitle: medication.Name,
      },
      moduleActions: {
        primary: {
          path: '/intake/vitals',
          text: 'Begin',
        },
        secondary: {
          path: '/detail',
          text: 'Review',
        },
        tertiary: {
          path: '/note',
          text: 'Begin',
        },
      },
    },
  }));

  const allModules = patientModules.concat(medicationModules);
  //const chooseMedication = (modules[2] = !showModule);

  function openModule(id) {
    allModules.forEach((module) => {
      if (module.id == id) {
        module.props.showModule = true;
      } else {
        module.props.showModule = false;
      }
    });
  }

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
