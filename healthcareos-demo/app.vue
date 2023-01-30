<template>
  <NuxtLoadingIndicator />
  <NuxtPage />
</template>

<script setup>
// Call Data from Supabase
const client = useSupabaseClient();

// Get Encounters Data from Supabase
const { data: appointments } = await useAsyncData("encounters", async () => {
  const { data } = await client.from("encounters").select(`*, patient(*)`).order("encounter_time", { ascending: true });
  return data;
});
// Create useState to share Appointemnts
const useAppointments = useState("appointments", () => appointments);

// Get Patients Data from Supabase
const { data: patients } = await useAsyncData("patients", async () => {
  const { data } = await client.from("patients").select(`*`);
  return data;
});
// Create use Patients to share Patients
const usePatients = useState("patients", () => patients);
</script>
