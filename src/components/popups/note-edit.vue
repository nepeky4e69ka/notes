<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore, useNotesStore } from "@/store"
import { computed } from 'vue'
import { isValid } from '@/utils'
const notesStore = useNotesStore();
const userStore = useUserStore()
const { note } = storeToRefs(notesStore)
const { togglePopup } = userStore
const { updateNote } = notesStore
const classes = computed(() => [ isValid(note.value) ?  '--primary': '--disabled' ])
const close = () => togglePopup({ state: false })
const save = () => {
  if (isValid(note.value)){
    updateNote(note.value).then(close)
  }
}
</script>
<template>
  <div class="ui-popup-head" @click="close">
    <h5>Редактирование заметки</h5>
    <i-close @click="close" />
  </div>
  <div class="ui-popup-body">
    <n-note :row="note" @toggle="notesStore.toggleNote"/>
  </div>
  <div class="ui-popup-actions">
    <ui-button @click="close" :value="'Отмена'"/>
    <ui-button @click="save" :classes="classes" :value="'Сохранить'"/>
  </div>
</template>
