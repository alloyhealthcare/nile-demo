<template>
  <button
    class="py-2 px-4 text-sm leading-none rounded-xl transition-all duration-100 font-medium"
    @click="handleClick"
    :class="{
      primary: variant.primary,
      default: variant.default,
      secondary: variant.secondary,
      success: variant.success,
      buttonXL: variant.buttonXL,
    }">
    <slot />
  </button>
</template>

<script setup>
  const props = defineProps({
    variant: {
      type: String,
      default: 'default',
    },
    customClasses: {
      type: String,
      default: '',
    },
  });

  const emit = defineEmits(['click']);

  function handleClick() {
    emit('click');
  }

  const variant = {
    primary: props.variant === 'primary',
    default: props.variant === 'default',
    success: props.variant === 'success',
    secondary: props.variant === 'secondary',
    buttonXL: props.variant === 'buttonXL',
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

  .buttonXL {
    @apply px-2 py-6 bg-white/50 border-slate-200/50 border border-solid hover:bg-white hover:border-slate-200/90 hover:shadow-sm;
  }

  .default {
    @apply hover:bg-slate-200 transition-all duration-100;
  }
</style>
