<template>
  <div>
    <flow-navigation title="Now" context="Test" />
    <div class="flex flex-row gap-x-6 flex-grow">
      <div class="w-3/5">
        <div class="mb-6 border-b border-slate-200">
          <h2 class="mb-3 text-lg font-semibold">Vitals</h2>
          <div class="flex flex-row mb-6 gap-x-2">
            <vital-item-card
              :item="{
                value: 145,
                vitalType: 'Weight',
                unit: 'lbs',
              }" />
            <vital-item-card
              :item="{
                value: 12,
                vitalType: 'Heart Rate',
                unit: 'bpm',
              }" />
            <vital-item-card :item="{ value: 134, vitalType: 'BP' }" />
            <vital-item-card
              :item="{
                value: 98.6,
                vitalType: 'Temp',
                unit: 'F',
              }" />
            <vital-item-card :item="{ value: 98, vitalType: 'Sp02', unit: '%' }" />
          </div>
        </div>
        <editor-content :editor="editor" class="tiptap-editor editor-container text-xl z-50" />
        <floating-menu
          :editor="editor"
          :tippyOptions="{ maxWidth: 'none' }"
          v-if="editor"
          class="hidden transition-all editor-toolbar">
          <button
            @click="
              editor
                .chain()
                .focus()
                .createParagraphNear()
                .insertContent(hpi)
                .toggleHeading({ level: 2 })
                .createParagraphNear()
                .insertContent('<p></p>')
                .run()
            "
            v-on:click="show = 0">
            HPI
          </button>
          <div class="flex flex-row items-center">
            <button
              @click="
                editor
                  .chain()
                  .focus()
                  .insertContent(exam)
                  .toggleHeading({ level: 2 })
                  .createParagraphNear()
                  .insertContent('<p></p>')
                  .run()
              "
              v-on:click="show = 1">
              Exam
            </button>
            <div class="overflow-hidden">
              <transition name="showSubMenu">
                <div v-if="show" class="flex flex-row overflow-hidden bg-gray-700 editor-subtoolbar">
                  <button
                    @click="
                      editor
                        .chain()
                        .focus()
                        .createParagraphNear()
                        .insertContent(general)
                        .toggleHeading({ level: 3 })
                        .createParagraphNear()
                        .insertContent('<p></p>')
                        .run()
                    ">
                    General
                  </button>
                  <button
                    @click="
                      editor
                        .chain()
                        .focus()
                        .createParagraphNear()
                        .insertContent(heent)
                        .toggleHeading({ level: 3 })
                        .createParagraphNear()
                        .insertContent('<p></p>')
                        .run()
                    ">
                    HEENT
                  </button>
                  <button
                    @click="
                      editor
                        .chain()
                        .focus()
                        .createParagraphNear()
                        .insertContent(chest)
                        .toggleHeading({ level: 3 })
                        .createParagraphNear()
                        .insertContent('<p></p>')
                        .run()
                    ">
                    Chest
                  </button>
                  <button
                    @click="
                      editor
                        .chain()
                        .focus()
                        .createParagraphNear()
                        .insertContent(heart)
                        .toggleHeading({ level: 3 })
                        .createParagraphNear()
                        .insertContent('<p></p>')
                        .run()
                    ">
                    Heart
                  </button>
                  <button
                    @click="
                      editor
                        .chain()
                        .focus()
                        .createParagraphNear()
                        .insertContent(abdomen)
                        .toggleHeading({ level: 3 })
                        .createParagraphNear()
                        .insertContent('<p></p>')
                        .run()
                    ">
                    Abdomen
                  </button>
                  <button
                    @click="
                      editor
                        .chain()
                        .focus()
                        .createParagraphNear()
                        .insertContent(skin)
                        .toggleHeading({ level: 3 })
                        .createParagraphNear()
                        .insertContent('<p></p>')
                        .run()
                    ">
                    Skin
                  </button>
                  <button
                    @click="
                      editor
                        .chain()
                        .focus()
                        .createParagraphNear()
                        .insertContent(extremities)
                        .toggleHeading({ level: 3 })
                        .createParagraphNear()
                        .insertContent('<p></p>')
                        .run()
                    "
                    v-on:click="
                      toolbarShow = 1;
                      show = 0;
                    ">
                    Extremities
                  </button>
                </div>
              </transition>
            </div>
            <button v-on:click="show = !show" class="bg-gray-900 rounded-lg subtoolbar-button">
              <font-awesome-icon :icon="['far', 'chevron-right']" class="text-xs" />
            </button>
          </div>
          <button
            @click="
              editor
                .chain()
                .focus()
                .insertContent(assessment)
                .toggleHeading({ level: 2 })
                .createParagraphNear()
                .insertContent('<p></p>')
                .run()
            "
            :class="{
              'is-active': editor.isActive('assessment', { level: 5 }),
            }"
            v-on:click="show = 0">
            Assessment
          </button>
          <button
            @click="
              editor
                .chain()
                .focus()
                .insertContent(plan)
                .toggleHeading({ level: 2 })
                .createParagraphNear()
                .insertContent('<p></p>')
                .run()
            "
            :class="{
              'is-active': editor.isActive('assessment', { level: 5 }),
            }"
            v-on:click="show = 0">
            Plan
          </button>
        </floating-menu>
        <bubble-menu
          :editor="editor"
          :tippy-options="{ duration: 100 }"
          class="bg-white p-2 border border-slate-200 flex flex-row gap-x-2"
          v-if="editor">
          <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
            bold
          </button>
          <button
            @click="editor.chain().focus().toggleItalic().run()"
            :class="{ 'is-active': editor.isActive('italic') }">
            italic
          </button>
          <button
            @click="editor.chain().focus().toggleStrike().run()"
            :class="{ 'is-active': editor.isActive('strike') }">
            strike
          </button>
        </bubble-menu>
      </div>
    </div>
  </div>
</template>

<script setup>
import VitalItemCard from "@/components/Cards/VitalItemCard.vue";
import FlowNavigation from "@/components/Navigation/FlowNavigation.vue";
import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Mention from "@tiptap/extension-mention";

const editor = useEditor({
  content: "<p>I’m running Tiptap with Vue.js. 🎉</p>",
  extensions: [StarterKit, FloatingMenu, Mention, BubbleMenu],
});
</script>

<script>
export default {
  data() {
    return {
      editor: null,
      chiefComplaintDoc: null,
      item: null,
      // General Note Toolbar
      hpi: "HPI",
      exam: "Exam",
      assessment: "Assessment",
      plan: "Plan",
      // Exam Toolbar
      general: "General",
      heent: "HEENT",
      chest: "Chest",
      heart: "Heart",
      abdomen: "Abdomen",
      skin: "Skin",
      extremities: "Extremities",
      // Show and Hide exam toolbar when exam button is clicked
      show: 0,
      toggleButtons: 1,
      variable: "variable ",
    };
  },
};
</script>

<style>
.editor-container {
  h2 {
    @apply font-semibold mt-4;
  }
  p {
    @apply mt-2;
  }
}
.editor-toolbar {
  @apply text-sm bg-gray-900 text-white rounded-lg flex flex-row overflow-hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  button {
    @apply px-3 py-2 hover:bg-gray-800 hover:text-gray-400 transition flex flex-row items-center;
    .is-active {
      @apply bg-blue-500 text-white;
    }
  }
  .subtoolbar-button {
    @apply text-gray-300 hover:bg-gray-700 hover:text-white;
  }
  .editor-subtoolbar {
    &::-webkit-scrollbar {
      display: none;
    }
    button {
      @apply hover:text-gray-400;
    }
  }
}
</style>
