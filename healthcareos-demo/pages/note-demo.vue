<template>
  <div>
    Notes
    <editor-content :editor="chiefComplaintDoc" class="tiptap-editor text-xl z-50" />
  </div>
  <div>
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
      <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
        italic
      </button>
      <button @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
        strike
      </button>
    </bubble-menu>
  </div>
</template>

<script setup>
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import FloatingMenu from "@tiptap/extension-floating-menu";
import Mention from "@tiptap/extension-mention";

const editor = useEditor({
  content: "<p>I’m running Tiptap with Vue.js. 🎉</p>",
  extensions: [StarterKit, FloatingMenu, Mention, BubbleMenu],
});
</script>

<script></script>
