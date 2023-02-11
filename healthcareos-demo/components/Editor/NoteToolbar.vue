<template>
  <div
    v-if="editor"
    class="flex flex-row px-3 mt-6 justify-between space-x-2 divide-slate-200 py-2 bg-white rounded-xl drop-shadow-xl inset-x-0 bottom-0 mb-6">
    <!-- Main Actions -->
    <div class="flex flex-row space-x-2 pr-3 border-r border-slate-200">
      <Popover class="relative">
        <PopoverButton
          class="text-sm font-medium py-2 px-3 hover:bg-slate-200 rounded-md transition-all duraiton-150">
          <font-awesome-icon
            icon="fa-regular fa-arrow-up-to-line"
            class="mr-2" />Add Template
        </PopoverButton>
        <PopoverPanel
          class="absolute z-10 bottom-12 bg-white rounded-lg w-[300%] flex flex-col">
          <div
            class="px-3 pt-3 pb-2 font-semibold text-slate-500 border-b border-slate-200">
            Add a Template
          </div>
          <!-- Render a combox box w/ search items for finding a template-->
          <Combobox
            v-model="selected"
            nullable>
            <div class="relative mt-1">
              <div
                class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <ComboboxInput
                  class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                  :displayValue="(noteTemplate) => noteTemplate.name"
                  placeholder="Search for a template..."
                  @change="query = $event.target.value" />
                <ComboboxButton
                  class="absolute inset-y-0 right-0 flex items-center pr-2">
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
                            :class="{
                              'font-medium': selected,
                              'font-normal': !selected,
                            }">
                            {{ note.name }}
                          </span>
                          <span
                            v-if="selected"
                            class="absolute inset-y-0 left-0 flex items-center pl-3"
                            :class="{
                              'text-white': active,
                              'text-teal-600': !active,
                            }">
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
        <font-awesome-icon icon="fa-solid fa-chart-pie-simple" /><span>
          Insert Data</span
        >
      </button>
      <button
        class="text-sm space-x-1 font-medium py-2 px-3 hover:bg-slate-200 rounded-lg transition-all duraiton-150">
        <font-awesome-icon icon="fa-solid fa-plus" /><span> Diagnose</span>
      </button>
      <button
        class="text-sm space-x-1 font-medium py-2 px-3 hover:bg-slate-200 rounded-lg transition-all duraiton-150">
        <font-awesome-icon icon="fa-solid fa-prescription" />
        <span>Create Order</span>
      </button>
    </div>
    <!-- Coding Actions-->
    <div
      class="flex flex-row flex-grow space-x-2 pr-3 border-r border-slate-200">
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
</template>

<script setup>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
  import {
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
  } from '@headlessui/vue';

  // Note Templates to Render
  const noteTemplate = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
  ];

  // let selected = ref(noteTemplate[0]);
  const query = ref('');
  const open = ref(true);

  let filteredTemplate = computed(() =>
    query.value === ''
      ? noteTemplate
      : noteTemplate.filter((note) =>
          note.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.value.toLowerCase().replace(/\s+/g, ''))
        )
  );
</script>
