<template>
  <div class="flex flex-col flex-grow">
    <flow-navigation title="Now" context="Test" class="mb-6" />
    <div class="flex flex-row flex-grow px-6 space-x-6">
      <PatientSidebar :patient="{ name: 'Priscilla Edwards', mrn: 2, birthDate: 'February 12, 1983' }" />
      <!-- Main Note Area Wrapper-->
      <div class="flex flex-col flex-grow">
        <!-- Note Content and Suggestions Sidebar-->
        <div class="flex flex-row space-x-4 flex-grow">
          <!-- Note Content-->
          <div class="flex flex-col flex-grow w-2/5">
            <!-- Vital Signs-->
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
            <!-- Chief Complaint-->
            <div class="mb-6">
              <editor-content :editor="chiefComplaintDoc" class="tiptap-editor editor-container text-xl z-50" />
            </div>

            <!-- Note Editor-->
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
              <button
                @click="editor.chain().focus().toggleBold().run()"
                :class="{ 'is-active': editor.isActive('bold') }">
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
          <!--  Suggestions Sidebar-->
          <div class="bg-slate-900/5 p-4 rounded-lg flex-grow">
            <h2 class="font-semibold text-md text-slate-700">Suggestions</h2>
          </div>
        </div>
        <!-- Note Toolbar-->
        <div
          v-if="editor"
          class="flex flex-row px-3 mt-6 justify-between space-x-2 divide-slate-200 py-2 bg-white rounded-xl drop-shadow-xl inset-x-0 bottom-0 mb-6">
          <!-- Main Actions -->
          <div class="flex flex-row space-x-2 pr-3 border-r border-slate-200">
            <Popover class="relative">
              <PopoverButton
                class="text-sm font-medium py-2 px-3 hover:bg-slate-200 rounded-md transition-all duraiton-150">
                <font-awesome-icon icon="fa-regular fa-arrow-up-to-line" class="mr-2" />Add Template
              </PopoverButton>
              <PopoverPanel class="absolute z-10 bottom-12 bg-white rounded-lg w-[300%] flex flex-col">
                <div class="px-3 pt-3 pb-2 font-semibold text-slate-500 border-b border-slate-200">Add a Template</div>
                <!-- Render a combox box w/ search items for finding a template-->
                <Combobox v-model="selected" nullable>
                  <div class="relative mt-1">
                    <div
                      class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                      <ComboboxInput
                        class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                        :displayValue="(noteTemplate) => noteTemplate.name"
                        placeholder="Search for a template..."
                        @change="query = $event.target.value" />
                      <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                        <font-awesome-icon icon="fa-solid fa-sort"
                      /></ComboboxButton>

                      <TransitionRoot
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        @after-leave="query = ''">
                        <div>
                          <ComboboxOptions
                            v-if="filteredTemplate.length > 0"
                            static
                            class="mt-1 max-h-60 w-full overflow-auto py-1 text-base focus:outline-none sm:text-sm">
                            <div
                              v-if="filteredTemplate.length === 0 && query !== ''"
                              class="relative cursor-default select-none py-2 px-4 text-gray-700">
                              Nothing found.
                            </div>
                            <ComboboxOption
                              v-for="note in filteredTemplate"
                              as="template"
                              :key="note.id"
                              :value="note"
                              v-slot="{ selected, active }">
                              <li
                                class="relative cursor-default select-none py-2 pl-10 pr-4"
                                :class="{
                                  'bg-teal-600 text-white': active,
                                  'text-gray-900': !active,
                                }">
                                <span
                                  class="block truncate"
                                  :class="{ 'font-medium': selected, 'font-normal': !selected }">
                                  {{ note.name }}
                                </span>
                                <span
                                  v-if="selected"
                                  class="absolute inset-y-0 left-0 flex items-center pl-3"
                                  :class="{ 'text-white': active, 'text-teal-600': !active }">
                                </span>
                              </li>
                            </ComboboxOption>
                          </ComboboxOptions>
                        </div>
                      </TransitionRoot>
                    </div>
                  </div>
                </Combobox>
              </PopoverPanel>
            </Popover>
            <button
              class="text-sm space-x-1 font-medium py-2 px-3 hover:bg-slate-200 rounded-lg transition-all duraiton-150">
              <font-awesome-icon icon="fa-solid fa-chart-pie-simple" /><span> Insert Data</span>
            </button>
            <button
              class="text-sm space-x-1 font-medium py-2 px-3 hover:bg-slate-200 rounded-lg transition-all duraiton-150">
              <font-awesome-icon icon="fa-solid fa-plus" /><span> Diagnose</span>
            </button>
            <button
              class="text-sm space-x-1 font-medium py-2 px-3 hover:bg-slate-200 rounded-lg transition-all duraiton-150">
              <font-awesome-icon icon="fa-solid fa-prescription" /> <span>Create Order</span>
            </button>
          </div>
          <!-- Coding Actions-->
          <div class="flex flex-row flex-grow space-x-2 pr-3 border-r border-slate-200">
            <button
              class="text-sm flex-grow space-x-1 font-medium py-2 px-3 hover:bg-slate-200 rounded-lg transition-all duraiton-150">
              ICD-11
            </button>
            <button
              class="text-sm flex-grow space-x-1 font-medium py-2 px-3 hover:bg-slate-200 rounded-lg transition-all duraiton-150">
              CPT
            </button>
          </div>
          <!-- Wrap Up Button -->
          <div class="flex flex-row pl-3 w-[150px]">
            <button
              class="text-sm space-x-1 font-medium py-2 px-3 w-full bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-all duraiton-150">
              <font-awesome-icon icon="fa-solid fa-signature" /><span> Wrap Up</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import VitalItemCard from "@/components/Cards/VitalItemCard.vue";
import FlowNavigation from "@/components/Navigation/FlowNavigation.vue";
import PatientSidebar from "~~/components/Sidebars/PatientSidebar.vue";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/vue";
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from "@headlessui/vue";

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

// Note Templates to Render
const noteTemplate = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

// let selected = ref(noteTemplate[0]);
const query = ref("");
const open = ref(true);

let filteredTemplate = computed(() =>
  query.value === ""
    ? noteTemplate
    : noteTemplate.filter((note) =>
        note.name.toLowerCase().replace(/\s+/g, "").includes(query.value.toLowerCase().replace(/\s+/g, ""))
      )
);
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
