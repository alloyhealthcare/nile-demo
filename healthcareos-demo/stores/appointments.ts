import { defineStore } from "pinia";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://qidousbvdqzwfmvqfptu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpZG91c2J2ZHF6d2ZtdnFmcHR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMyMTM2NjMsImV4cCI6MTk4ODc4OTY2M30.94J9sNo2U9zlULx2MVirFhlDUFu5nhTvKdatVHZ-bRQ"
);

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application

// const { data: appointments } = await useAsyncData("encounters", async () => {
//   const { data } = await supabase.from("encounters").select(`*, patient(*)`, { count: "exact", head: false });
//   return data;
// });
// const { data } = await supabase.from("encounters").select(`*, patient(*)`);

export const useAppointmentsStore = defineStore("appointments", {
  state: () => {
    return data;
  },
});
