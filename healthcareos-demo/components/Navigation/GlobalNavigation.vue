<template>
  <div
    class="sticky top-0 z-50 flex items-stretch w-full px-8 space-x-4 bg-white border border-gray-200 divide-gray-200 navigation drop-shadow">
    <div class="border-r border-gray-300 border-solid pr-4 flex items-center">
      <a tag="router-link" href="/" :to="{ path: '/' }" class="">
        <svg width="50" height="20" viewBox="0 0 49 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.50562 14.4045C0.501873 13.2809 0 11.8127 0 10C0 8.18727 0.501873 6.72659 1.50562 5.61798C2.52434 4.49438 3.78277 3.93258 5.2809 3.93258C6.28464 3.93258 7.19101 4.23221 8 4.83146C8.34457 5.11611 8.6367 5.41573 8.8764 5.73034H8.98876V4.26966H12.1348V15.7303H8.98876V14.2697H8.8764C8.6367 14.5843 8.34457 14.8839 8 15.1685C7.19101 15.7678 6.28464 16.0674 5.2809 16.0674C3.78277 16.0674 2.52434 15.5131 1.50562 14.4045ZM4.04494 7.52809C3.5206 8.12734 3.25843 8.95131 3.25843 10C3.25843 11.0487 3.5206 11.8727 4.04494 12.4719C4.56929 13.0712 5.24345 13.3708 6.06742 13.3708C6.93633 13.3708 7.64045 13.0787 8.17978 12.4944C8.7191 11.8951 8.98876 11.0637 8.98876 10C8.98876 8.93633 8.7191 8.11236 8.17978 7.52809C7.64045 6.92884 6.93633 6.62921 6.06742 6.62921C5.24345 6.62921 4.56929 6.92884 4.04494 7.52809Z"
            fill="#1A1E23" />
          <path d="M14.0449 15.7303V0H17.191V15.7303H14.0449Z" fill="#1A1E23" />
          <path d="M19.1011 15.7303V0H22.2472V15.7303H19.1011Z" fill="#1A1E23" />
          <path
            d="M25.2809 14.3146C24.0824 13.1311 23.4831 11.6929 23.4831 10C23.4831 8.30712 24.0824 6.8764 25.2809 5.70786C26.4794 4.52434 27.9775 3.93258 29.7753 3.93258C31.5581 3.93258 33.0487 4.52434 34.2472 5.70786C35.4607 6.8764 36.0674 8.30712 36.0674 10C36.0674 11.6929 35.4607 13.1311 34.2472 14.3146C33.0487 15.4831 31.5581 16.0674 29.7753 16.0674C27.9775 16.0674 26.4794 15.4831 25.2809 14.3146ZM27.618 7.57303C27.0337 8.20225 26.7416 9.01124 26.7416 10C26.7416 10.9888 27.0337 11.7978 27.618 12.427C28.2022 13.0562 28.9213 13.3708 29.7753 13.3708C30.6292 13.3708 31.3483 13.0562 31.9326 12.427C32.5169 11.7978 32.809 10.9888 32.809 10C32.809 9.01124 32.5169 8.20225 31.9326 7.57303C31.3483 6.94382 30.6292 6.62921 29.7753 6.62921C28.9213 6.62921 28.2022 6.94382 27.618 7.57303Z"
            fill="#1A1E23" />
          <path
            d="M36.3 4.26966H39.5585L41.8057 12.5843H42.7045L45.1764 4.26966H48.4349L44.9517 16.0674C44.5472 17.4307 43.9555 18.427 43.1764 19.0562C42.3974 19.6854 41.2663 20 39.7832 20H37.6483V17.3034H39.7832C40.3974 17.3034 40.8469 17.1835 41.1315 16.9438C41.4311 16.7191 41.6558 16.3146 41.8057 15.7303L41.918 15.2809H39.3113L36.3 4.26966Z"
            fill="#1A1E23" />
        </svg>
      </a>
    </div>

    <div class="flex flex-row items-center py-2 pr-4 space-x-3 text-gray-500 border-r border-gray-800 border-solid">
      <div class="flex flex-col items-center date-wrapper">
        <div class="leading-none">
          {{ date }}
        </div>
        <div class="font-extrabold tracking-wider uppercase text-xxs">
          {{ weekDay }}
        </div>
      </div>
      <div class="text-sm uppercase">
        {{ todayTime }}
      </div>
    </div>

    <div class="flex-grow h-full pr-4 border-r border-gray-300 rounded-lg"></div>

    <div class="items-center px-5 py-2 border-r border-gray-300">
      <font-awesome-icon icon="fas fa-bell" class="text-slate-500" />
    </div>

    <div class="flex items-center">
      <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton
            class="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Options
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0">
          <MenuItems
            class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-violet-500 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]">
                  Edit
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-violet-500 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]">
                  Duplicate
                </button>
              </MenuItem>
            </div>
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-violet-500 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]">
                  Archive
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-violet-500 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]">
                  Move
                </button>
              </MenuItem>
            </div>

            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-violet-500 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]">
                  Delete
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
</script>

<script>
export default {
  name: "Navigation",
  components: {},
  data() {
    return {
      todayTime: "",
    };
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  computed: {
    date: function () {
      const today = new Date();
      const day = today.getDate();
      return day;
    },
    weekDay: function () {
      const today = new Date();
      const weekDay = today.getDay();
      var weekDayName = new Array(7);
      weekDayName[0] = "Sun";
      weekDayName[1] = "Mon";
      weekDayName[2] = "Tue";
      weekDayName[3] = "Wed";
      weekDayName[4] = "Thu";
      weekDayName[5] = "Fri";
      weekDayName[6] = "Sat";
      return weekDayName[weekDay];
    },
  },
  methods: {
    getNow: function () {
      const today = new Date();
      var hours = today.getHours(); //
      var AmOrPm = hours >= 12 ? "pm" : "am";
      hours = hours % 12 || 12;
      var minutes = ("0" + today.getMinutes()).slice(-2);
      var finalTime = hours + ":" + minutes + " " + AmOrPm;
      this.todayTime = finalTime;
    },
  },
};
</script>

<style lang="scss" scoped></style>
