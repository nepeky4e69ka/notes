<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useNotesStore } from '@/store'
const notesStore = useNotesStore();
const { note } = storeToRefs(notesStore)
onMounted(notesStore.resetNote)
</script>
<template>
  <main class="container">
    <ui-back/>
    <n-note 
      :row="note" 
      @toggle="notesStore.toggleNote"
    />
  </main>
</template>
