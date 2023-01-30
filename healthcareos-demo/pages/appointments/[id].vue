<template>
  <NuxtLayout :name="'space'" :pages="pages" :items="todayAppointments">
    <template #pageContent>
      <div class="flex flex-row flex-grow">
        <div class="p-6 flex-grow flex flex-col">
          <div class="p-6 flex-grow">
            <patient-overview-module
              :moduleInfo="{ title: 'Now', subTitle: thisAppointment.room }"
              :patient="thisAppointment.patient"
              :encounter="thisAppointment"
              :primaryButton="{ path: '/intake/vitals', text: 'Begin' }"
              :secondaryButton="{ path: '/detail', text: 'Review' }"
              :tertiaryButton="{ path: '/note', text: 'Begin' }" />
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup>
import PatientOverviewModule from "~/components/Cards/Modules/ModuleTemplates/PatientOverviewModule.vue";
const route = useRoute();
const id = route.params.id;

const appointments = useState("appointments");

const thisAppointment = appointments.value.find((appointments) => appointments.encounter_id == id);

const appointmentDetail = useState("thisAppointment", () => thisAppointment);

const todayAppointments = appointments.value.map((appointment) => ({
  id: appointment.encounter_id,
  heading: appointment.patient.name,
  subHeading: appointment.encounter_time,
  status: appointment.status,
}));

const pages = [
  {
    name: "Today",
    path: "/",
    index: 0,
  },
  {
    name: "Appointments",
    path: "/appointments",
    index: 1,
  },
  {
    name: thisAppointment.patient.name,
    path: "/appointments/" + thisAppointment.encounter_id,
    index: 2,
  },
];
</script>
