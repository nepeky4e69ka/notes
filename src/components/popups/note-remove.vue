<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore, useNotesStore } from "@/store"
import { computed } from 'vue'
const userStore = useUserStore()
const noteStore = useNotesStore();
const { note } = storeToRefs(noteStore);
const { removeNote } = noteStore;
const title = computed(() => `${note.value.title.slice(0, 20)}...`)
const close = () => userStore.togglePopup({ state: false })
const remove = () => removeNote(note.value.id).then(close)
</script>
<template>
  <div class="ui-popup-head" @click="close">
    <h5>Удаление заметки</h5>
  </div>
  <div class="ui-popup-body">
    <p>Подтверждаете удаление заметки <i>{{ title }}</i>?</p>
  </div>
  <div class="ui-popup-actions">
    <ui-button @click="close" :value="'Отмена'"/>
    <ui-button @click="remove" :classes="['--red']" :value="'Удалить'"/>
  </div>
</template>
