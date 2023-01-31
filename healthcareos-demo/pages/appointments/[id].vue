<template>
  <NuxtLayout :name="'space'" :pages="pages" :items="todayAppointments">
    <template #pageContent>
      <div class="flex flex-row flex-grow">
        <patient-overview-module
          :moduleInfo="{ title: 'Now', subTitle: thisAppointment.room }"
          :patient="thisAppointment.patient"
          :encounter="thisAppointment"
          :primaryButton="{ path: '/intake/vitals', text: 'Begin' }"
          :secondaryButton="{ path: '/detail', text: 'Review' }"
          :tertiaryButton="{ path: '/note', text: 'Begin' }" />
      </div>
      <div
        class="bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200 flex shadow-mg flex-row space-x-4 p-3">
        <NuxtLink
          :to="'/appointments/' + nextItem.encounter_id"
          class="space-x-4 py-5 px-6 rounded-xl border border-slate-200"
          v-if="nextItem">
          <span class="font-semibold">Next</span>
          <span>{{ nextItem.patient.name }}</span>
          <font-awesome-icon icon="fa-regular fa-arrow-down" />
        </NuxtLink>
        <button class="py-5 px-6 border border-slate-200 rounded-xl" v-if="prevItem">
          <span class="font-semibold">Previous</span>
          {{ prevItem.patient.name }}
          <font-awesome-icon icon="fa-regular fa-arrow-up" />
        </button>
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
  status: appointment.encounter_status,
}));

const pages = [
  {
    name: "Today",
    path: "/",
    index: 0,
  },
  {
    name: "Appointments",
    path: "/appointments/" + thisAppointment.encounter_id,
    index: 1,
  },
  {
    name: thisAppointment.patient.name,
    path: "/appointments/" + thisAppointment.encounter_id,
    index: 2,
  },
];

const nextItem = computed(() => {
  const filteredNext = appointments.value.filter((appointment) => {
    return appointment != thisAppointment.encounter_time && appointment.encounter_time > thisAppointment.encounter_time;
  });
  return filteredNext.length ? filteredNext[0] : null;
});

const prevItem = computed(() => {
  const filteredPrev = appointments.value.filter((appointment) => {
    return appointment != thisAppointment.encounter_time && appointment.encounter_time < thisAppointment.encounter_time;
  });
  return filteredPrev.length ? filteredPrev[0] : null;
});
</script>
