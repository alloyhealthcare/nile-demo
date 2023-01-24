<template>
  <div class="module-footer flex flex-row w-full px-4 pb-4 pt-4 justify-between bg-white/20">
    <div class="flex flex-row gap-x-3">
      <h-button :to="primaryButton.path" variant="success">{{ primaryButton.text }}</h-button>
      <h-button v-if="secondaryButton.path && secondaryButton.text" :to="secondaryButton.path" variant="secondary">
        {{ secondaryButton.text }}
      </h-button>
    </div>
    <div v-if="tertiaryButton != null">
      <h-button :to="tertiaryButton.path" v-on:click="$emit('tertiary-button-action', tertiaryButton.value)">
        {{ tertiaryButton.text }}
      </h-button>
    </div>
  </div>
</template>

<script>
import HButton from "~/components/Buttons/HButton.vue";

export default {
  name: "ModuleFooter",
  components: { HButton },
  props: {
    primaryButton: {
      path: String,
      text: String,
    },
    secondaryButton: {
      path: String,
      text: String,
    },
    tertiaryButton: {
      path: String,
      text: String,
      value: Boolean,
    },
  },
  emits: ["tertiary-button-action"],
  data() {
    return {};
  },
};
</script>

<style>
.module-footer {
  backdrop-filter: blur(12px);
}
</style>
