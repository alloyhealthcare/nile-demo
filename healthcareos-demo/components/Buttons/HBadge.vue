<template>
  <div
    class="py-1 px-2 rounded-full flex flex-row items-center font-medium text-xs leading-none"
    :class="{
      primary: badgeVariant.primary,
      default: badgeVariant.default,
      secondary: badgeVariant.secondary,
      success: badgeVariant.success,
      solid: badgeStyle.solid,
    }">
    <font-awesome-icon :icon="icon" v-if="icon" class="h-3 mr-1" />
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "default",
  },
  solid: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
  },
});

const badgeVariant = {
  primary: props.variant === "primary",
  default: props.variant === "default",
  success: props.variant === "success",
  secondary: props.variant === "secondary",
};

const badgeStyle = {
  solid: props.solid === true,
};
</script>

<style lang="scss" scoped>
.primary {
  @apply text-blue-500;

  &.solid {
    @apply bg-blue-100 text-blue-600;
  }
}

.success {
  @apply bg-emerald-500 text-white hover:bg-emerald-600;
}

.secondary {
  @apply bg-slate-200 text-slate-600;
}

.default {
  @apply hover:bg-slate-200;
}
</style>
