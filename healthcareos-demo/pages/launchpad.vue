<template>
  <NuxtLayout>
    <div class="w-4/5 mx-auto">
      <div class="mt-14">
        <h1 class="mb-3 text-3xl md:text-2xl leading-none">
          Welcome back, Dr. Cooper
        </h1>
      </div>
      <div class="flex flex-row gap-x-4 justify-between relative">
        <div class="w-4/5">
          <div class="mb-12 text-2xl lg:mb-6 grid-header md:text-lg space-x-1">
            <h2 class="inline">Today is</h2>
            <h2 class="inline font-semibold">
              {{ todayExplicit }}
            </h2>
          </div>
          <div class="grid-wrapper">
            <div class="grid items-stretch grid-cols-2 gap-4">
              <div
                class="flex flex-col justify-between col-span-1 space-y-4 place-items-stretch">
                <space-preview-list
                  :items="appointmentList"
                  type="appointments"
                  :number="5"
                  :totalLength="21"
                  listMeta="12 New, 18 Follow Up, 5 Complaint" />
              </div>
              <div
                class="flex flex-col justify-between col-span-1 space-y-4 place-items-stretch">
                <space-preview-list
                  :items="messageList"
                  type="messages"
                  :number="2"
                  :totalLength="21"
                  listMeta="15 Care team, 10 Patient, 10 External" />
                <space-preview-list
                  :items="orderList"
                  type="orders"
                  :number="2"
                  :totalLength="21"
                  listMeta="10 Prescription, 4 Imaging, 8 Labs, 2 Tests" />
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/3 opacity-25">
          <div class="mb-12 text-2xl lg:mb-6 grid-header md:text-lg space-x-1">
            <h2 class="inline">Tomorrow</h2>
          </div>
          <div class="grid-wrapper">
            <div class="grid items-stretch grid-cols-1 gap-4">
              <div
                class="flex flex-col justify-between col-span-1 space-y-4 place-items-stretch">
                <space-preview-list
                  :items="appointmentList"
                  type="appointments"
                  :number="5"
                  :totalLength="21"
                  listMeta="12 New, 18 Follow Up, 5 Complaint" />
              </div>
            </div>
          </div>
        </div>
        <div
          class="absolute top-0 right-0 shrink grid grid-cols-2 grid-flow-row gap-y-2 gap-x-[10px]">
          <space-icon-card
            name="Appointments"
            meta="17 Appointments"
            details="4 New Patients, 12 Follow Ups, 1 Chief Complaint" />
          <space-icon-card
            name="Orders"
            meta="17 Appointments"
            details="4 New Patients, 12 Follow Ups, 1 Chief Complaint" />
          <space-icon-card
            name="Billing"
            meta="17 Appointments"
            details="4 New Patients, 12 Follow Ups, 1 Chief Complaint" />
          <space-icon-card
            name="Messages"
            meta="17 Appointments"
            details="4 New Patients, 12 Follow Ups, 1 Chief Complaint" />
          <space-icon-card
            name="Patients"
            meta="17 Appointments"
            details="4 New Patients, 12 Follow Ups, 1 Chief Complaint" />
          <space-icon-card
            name="Care Team"
            meta="17 Appointments"
            details="4 New Patients, 12 Follow Ups, 1 Chief Complaint" />
          <space-icon-card
            name="Marketing"
            meta="17 Appointments"
            details="4 New Patients, 12 Follow Ups, 1 Chief Complaint" />
          <space-icon-card
            name="Hiring"
            meta="17 Appointments"
            details="4 New Patients, 12 Follow Ups, 1 Chief Complaint" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
  // Import components
  import SpacePreviewList from '../components/Lists/SpacePreviewList.vue';
  import SpaceIconCard from '~/components/Cards/SpaceIconCard.vue';

  const appointments = useState('appointments');

  const appointmentList = appointments.value.map((appointment) => ({
    id: appointment.encounter_id,
    heading: appointment.patient.name,
    subHeading: appointment.encounter_date,
    status: appointment.encounter_status,
  }));

  const orderList = [
    {
      id: 1,
      heading: 'Dr. Cooper',
      subHeading: 'Today at 10:00 AM',
      status: 'unread',
    },
    {
      id: 2,
      heading: 'Dr. Cooper',
      subHeading: 'Today at 10:00 AM',
      status: 'unread',
    },
    {
      id: 3,
      heading: 'Dr. Cooper',
      subHeading: 'Today at 10:00 AM',
      status: 'unread',
    },
    {
      id: 4,
      heading: 'Dr. Cooper',
      subHeading: 'Today at 10:00 AM',
      status: 'unread',
    },
    {
      id: 5,
      heading: 'Dr. Cooper',
      subHeading: 'Today at 10:00 AM',
      status: 'unread',
    },
  ];

  const messageList = [
    {
      id: 1,
      heading: 'Dr. Cooper',
      subHeading: 'Today at 10:00 AM',
      status: 'unread',
    },
    {
      id: 2,
      heading: 'Dr. Cooper',
      subHeading: 'Today at 10:00 AM',
      status: 'unread',
    },
    {
      id: 3,
      heading: 'Dr. Cooper',
      subHeading: 'Today at 10:00 AM',
      status: 'unread',
    },
    {
      id: 4,
      heading: 'Dr. Cooper',
      subHeading: 'Today at 10:00 AM',
      status: 'unread',
    },
    {
      id: 5,
      heading: 'Dr. Cooper',
      subHeading: 'Today at 10:00 AM',
      status: 'unread',
    },
  ];

  // Get Today's Date
  const today = new Date();
  const day = today.getDate();
  const weekDay = today.getDay();
  const month = today.getMonth();

  var weekDayName = new Array(7);
  weekDayName[0] = 'Sunday';
  weekDayName[1] = 'Monday';
  weekDayName[2] = 'Tuesday';
  weekDayName[3] = 'Wednesday';
  weekDayName[4] = 'Thursday';
  weekDayName[5] = 'Friday';
  weekDayName[6] = 'Saturday';

  var monthName = new Array(12);
  monthName[0] = 'January';
  monthName[1] = 'February';
  monthName[2] = 'March';
  monthName[3] = 'April';
  monthName[4] = 'May';
  monthName[5] = 'June';
  monthName[6] = 'July';
  monthName[7] = 'August';
  monthName[8] = 'September';
  monthName[9] = 'October';
  monthName[10] = 'November';
  monthName[11] = 'December';

  const todayExplicit =
    weekDayName[weekDay] + ', ' + monthName[month] + ' ' + day;
</script>
