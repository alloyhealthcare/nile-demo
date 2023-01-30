<template>
  <div class="p-6 flex-grow">
    <patient-overview-module
      :moduleInfo="{ title: 'Now', subTitle: thisAppointment.room }"
      :patient="thisAppointment.patient"
      :encounter="thisAppointment"
      :primaryButton="{ path: '/intake/vitals', text: 'Begin' }"
      :secondaryButton="{ path: '/detail', text: 'Review' }"
      :tertiaryButton="{ path: '/note', text: 'Begin' }" />
  </div>
</template>

<script setup>
import PatientOverviewModule from "~/components/Cards/Modules/ModuleTemplates/PatientOverviewModule.vue";

const route = useRoute();
const id = route.params.id;

const appointments = useState("appointments");

const thisAppointment = appointments.value.find((appointments) => appointments.encounter_id == id);

const appointmentDetail = useState("thisAppointment", () => thisAppointment);

const usePatient = useState("thisPatient", () => thisAppointment.patient);
</script>
