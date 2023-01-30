<template>
  <button
    class="py-2 px-4 text-sm leading-none rounded-xl transition-all duration-100 font-medium"
    :class="{
      primary: variant.primary,
      default: variant.default,
      secondary: variant.secondary,
      success: variant.success,
    }">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "default",
  },
  customClasses: {
    type: String,
    default: "",
  },
});

const variant = {
  primary: props.variant === "primary",
  default: props.variant === "default",
  success: props.variant === "success",
  secondary: props.variant === "secondary",
};
</script>

<style scoped>
.primary {
  @apply bg-blue-500 text-white hover:bg-blue-600 transition-all duration-100;
}

.success {
  @apply bg-emerald-500 text-white hover:bg-emerald-600 transition-all duration-100;
}

.secondary {
  @apply bg-slate-200 text-slate-600 hover:bg-slate-300 hover:text-slate-800 transition-all duration-100;
}

.default {
  @apply hover:bg-slate-200;
}
</style>
