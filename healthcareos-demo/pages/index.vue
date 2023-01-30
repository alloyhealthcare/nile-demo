<template>
  <NuxtLayout>
    <div class="w-4/5 mx-auto">
      <div class="mt-14">
        <h1 class="mb-3 text-3xl md:text-2xl leading-none">Welcome back, Dr. Cooper</h1>
        <div class="mb-12 text-2xl lg:mb-6 grid-header md:text-lg space-x-1">
          <h2 class="inline">Today is</h2>
          <h2 class="inline font-semibold">
            {{ todayExplicit }}
          </h2>
        </div>
      </div>
      <div class="grid-wrapper">
        <div class="grid items-stretch grid-cols-3 gap-4">
          <div class="flex flex-col justify-between col-span-1 space-y-4 place-items-stretch">
            <div class="col-span-1 p-6 rounded-3xl bg-slateTransparent-3">
              <div class="mb-5">
                <span class="block pb-2 text-xl text-slate-700">Appointments</span>
                <span class="block text-slate-700">37 Appointments Today</span>
              </div>
              <div class="flex flex-col mb-6 space-y-3">
                <item-card
                  v-for="appointment in appointments"
                  :key="appointment.encounter_id"
                  item_type="appointment"
                  :subHeading="appointment.encounter_time"
                  variant="tertiary"
                  :path="'/appointments/' + appointment.encounter_id"
                  :itemHeading="appointment.patient.name"
                  :status="appointment.encounter_status" />
                <button to="">+15 More</button>
              </div>
              <div class="pt-2 border-t border-slate-200">
                <span class="text-sm text-slate-700">14 Follow Ups, 7 New Patients, 3 Physicals</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-between col-span-1 space-y-4 place-items-stretch">
            <space-preview-list :items="appointments" :n="2" :l="21" />
            <space-preview-list :items="appointments" :n="2" :l="21" />
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
// Import components
import SpacePreviewList from "../components/Lists/SpacePreviewList.vue";
import ItemCard from "../components/Cards/ItemCard.vue";

const appointments = useState("appointments");

// Get Today's Date
const today = new Date();
const day = today.getDate();
const weekDay = today.getDay();
const month = today.getMonth();

var weekDayName = new Array(7);
weekDayName[0] = "Sunday";
weekDayName[1] = "Monday";
weekDayName[2] = "Tuesday";
weekDayName[3] = "Wednesday";
weekDayName[4] = "Thursday";
weekDayName[5] = "Friday";
weekDayName[6] = "Saturday";

var monthName = new Array(12);
monthName[0] = "January";
monthName[1] = "February";
monthName[2] = "March";
monthName[3] = "April";
monthName[4] = "May";
monthName[5] = "June";
monthName[6] = "July";
monthName[7] = "August";
monthName[8] = "September";
monthName[9] = "October";
monthName[10] = "November";
monthName[11] = "December";

const todayExplicit = weekDayName[weekDay] + ", " + monthName[month] + " " + day;
</script>
