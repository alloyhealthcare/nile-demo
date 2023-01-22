<template>
  <div class="container">
    <div class="mt-14">
      <h1 class="mb-4 text-3xl md:text-2xl leading-none">Welcome back, Dr. Cooper</h1>
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
          <space-preview-list :items="appointments" :n="5" :l="25" />
        </div>
        <div class="flex flex-col justify-between col-span-1 space-y-4 place-items-stretch">
          <space-preview-list :items="appointments" :n="2" :l="21" />
          <space-preview-list :items="appointments" :n="2" :l="21" />
        </div>
        {{ appointmentNum }}
      </div>
    </div>
  </div>
</template>

<script setup>
// Import components
import SpacePreviewList from "../components/Lists/SpacePreviewList.vue";

// Call Data from Supabase
const client = useSupabaseClient();

// Encounters
const { data: appointments } = await useAsyncData("encounters", async () => {
  const { data } = await client.from("encounters").select("*", { count: "exact", head: false });
  return data;
});

const appointmentNum = appointments.length;

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
