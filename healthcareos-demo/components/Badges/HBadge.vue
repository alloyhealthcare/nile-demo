<template>
  <div
    class="rounded-full flex flex-row items-center font-medium text-xs leading-none"
    :class="{
      primary: badgeVariant.primary,
      default: badgeVariant.default,
      secondary: badgeVariant.secondary,
      success: badgeVariant.success,
      solid: badgeStyle.solid,
      large: badgeSize.large,
    }">
    <font-awesome-icon
      :icon="leadingIcon"
      v-if="leadingIcon"
      class="h-3 mr-1" />
    <slot />
    <font-awesome-icon
      :icon="trailingIcon"
      v-if="trailingIcon"
      class="h-3 mr-1" />
  </div>
</template>

<script setup>
  const props = defineProps({
    variant: {
      type: String,
      default: 'default',
    },
    solid: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'default',
    },
    leadingIcon: {
      type: String,
      default: '',
    },
    trailingIcon: {
      type: String,
      default: '',
    },
  });

  const badgeVariant = {
    primary: props.variant === 'primary',
    default: props.variant === 'default',
    success: props.variant === 'success',
    secondary: props.variant === 'secondary',
  };

  const badgeStyle = {
    solid: props.solid === true,
  };

  const badgeSize = {
    large: props.size === 'large',
  };
</script>

<style lang="scss" scoped>
  .large {
    @apply text-base;
  }
  .primary {
    @apply text-blue-500;

    &.solid {
      @apply bg-blue-100 text-blue-600 py-1 px-2;
    }
  }

  .success {
    @apply bg-emerald-500 text-white hover:bg-emerald-600;

    &.solid {
      @apply bg-emerald-100 text-emerald-600 py-1 px-2;
    }
  }

  .secondary {
    @apply text-slate-600;
    &.solid {
      @apply bg-slate-200 text-slate-800 py-1 px-2;
    }
  }

  .default {
    @apply hover:bg-slate-200;
  }
</style>
