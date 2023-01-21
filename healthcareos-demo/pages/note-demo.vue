<template>
  <div>
    <flow-navigation title="Now" context="Test" class="mb-4" />
    <div class="flex flex-row gap-x-6 flex-grow">
      <PatientSidebar :patient="{ name: 'Priscilla Edwards', mrn: 2, birthDate: 'February 12, 1983' }" />
      <div class="w-3/5 mx-auto">
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
        <div class="mb-6">
          <editor-content :editor="chiefComplaintDoc" class="tiptap-editor editor-container text-xl z-50" />
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
              <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-xs" />
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

        <div class="flex flex-row px-3 py-2 bg-white rounded-xl drop-shadow-xl absolute inset-x-0 bottom-0 mb-6 mr-6">
          <Listbox v-model="selectedPerson">
            <div class="relative mt-1">
              <ListboxButton
                class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span class="block truncate">{{ selectedPerson.name }}</span>
                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <font-awesome-icon icon="fa-solid fa-sort" class="text-slate-400" aria-hidden="true" />
                </span>
              </ListboxButton>

              <transition
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0">
                <ListboxOptions
                  class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  <ListboxOption
                    v-slot="{ active, selected }"
                    v-for="person in people"
                    :key="person.name"
                    :value="person"
                    as="template">
                    <li
                      :class="[
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-10 pr-4',
                      ]">
                      <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">{{
                        person.name
                      }}</span>
                      <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <font-awesome-icon icon="fa-regular fa-check" aria-hidden="true" />
                      </span>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
          <button>Wrap Up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import VitalItemCard from "@/components/Cards/VitalItemCard.vue";
import FlowNavigation from "@/components/Navigation/FlowNavigation.vue";
import PatientSidebar from "~~/components/Sidebars/PatientSidebar.vue";

import { Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/vue";

// Tiptap
import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Mention from "@tiptap/extension-mention";
import Placeholder from "@tiptap/extension-placeholder";

// Initialize TipTap editor
const chiefComplaintDoc = useEditor({
  extensions: [StarterKit],
  content: `<h2>Chief Complaint</h2><p><mark>This is a chief complaint.</mark></p>`,
});

const editor = useEditor({
  extensions: [
    StarterKit,
    FloatingMenu,
    Mention,
    BubbleMenu,
    Placeholder.configure({
      placeholder: ({ node }) => {
        if (node.type.name === "heading") {
          return "What’s the title?";
        }

        return "Starting typing or select a template...";
      },
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "my-custom-is-empty-class",
    }),
  ],
});

const people = ["Durward Reynolds", "Kenton Towne", "Therese Wunsch", "Benedict Kessler", "Katelyn Rohan"];
const selectedPerson = ref(people[0]);
const query = ref("");
</script>

<script>
export default {
  data() {
    return {
      editor: null,
      chiefComplaintDoc: null,
      item: null,
      patient: {
        name: "Priscilla",
        mrn: 2,
        birthDate: "May 2, 2012",
      },
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
  components: { PatientSidebar },
};
</script>

<style>
.ProseMirror {
  @apply focus:outline-none;
}

.ProseMirror p.is-editor-empty:first-child::before {
  @apply text-slate-300;
  content: attr(data-placeholder);
  float: left;
  color: #adb5bd;
  pointer-events: none;
  height: 0;
}

.ProseMirror p.is-empty::before {
  @apply text-slate-300;
  content: attr(data-placeholder);
  float: left;

  pointer-events: none;
  height: 0;
}

.editor-container {
  @apply outline-none focus:outline-none focus:outline-0 active:outline-none;

  h2 {
    @apply font-semibold mt-4;
  }
  p {
    @apply mt-2;
  }
}
.editor-toolbar {
  @apply text-sm bg-gray-900 text-white rounded-lg flex flex-row overflow-hidden ml-3;
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
.showSubMenu-enter {
  @apply w-0;
}
.showSubMenu-leave {
  width: 508px;
}
.showSubMenu-enter-to {
  width: 508px;
}
.showSubMenu-leave-to {
  width: 0;
}
.showSubMenu-enter-active {
  @apply transition-all duration-500;
}
.showSubMenu-leave-active {
  @apply transition-all duration-500;
}
</style>
