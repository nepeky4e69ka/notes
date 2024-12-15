<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Note, useNotesStore, useUserStore, UserPopupType as P } from '@/store'
import { onBeforeMount, onMounted, computed } from 'vue'
const userStore = useUserStore()
const notesStore = useNotesStore()
const { notes } = storeToRefs(notesStore)
const { loading, isCompleted } = storeToRefs(userStore)
const { completed, setNote, getNotes } = notesStore;
const { togglePopup, toggleFilter, preload } = userStore;
const sotred = computed(() => notes.value.sort((a, b) => a.id - b.id))
const isActive = computed(() => isCompleted.value !== undefined);
const empty = computed(() => !notes.value.length)
const load = () => empty.value ? getNotes() : false
const edit = (data: Note) => {
  setNote(data);
  togglePopup({ state: true, type: P.NOTE_EDIT })
}
const remove = (data: Note) => {
  setNote(data)
  togglePopup({ state: true, type: P.NOTE_REMOVE })
}
const toggle = () => {
  toggleFilter();
  getNotes(false)
}
onBeforeMount(preload)
onMounted(load)
</script>
<template>
  <main class="container">
    <ui-loading v-if="loading"/>
    <ui-empty v-if="empty && !loading"/>
    <n-table 
      v-if="!empty && !loading"
      :rows="sotred"
      :isActive="isActive"
      @completed="completed"
      @edit="edit"
      @remove="remove"
      @toggleFilter="toggle"
    />
  </main>
</template>
