<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useNotesStore, useUserStore } from '@/store'
import { onBeforeMount, onBeforeUnmount, computed } from 'vue'
import { _completed } from '@/utils'
import { useRoute } from 'vue-router';
const route = useRoute();
const notesStore = useNotesStore();
const userStore = useUserStore();
const { note } = storeToRefs(notesStore)
const { loading } = storeToRefs(userStore);
const isCompleted = computed(() => _completed(note.value.completed))
const loadNote = () => notesStore.getNote(route.params.slug as string)
onBeforeMount(loadNote)
onBeforeUnmount(notesStore.resetNote)
</script>
<template>
  <main class="container">
    <ui-back/>
    <ui-loading v-if="loading"/>
    <section class="note" v-else>
      <div class="col">
        <label>Заголовок заметки</label>
        <h1>{{ note.title }}</h1>
      </div>
      <div class="col">
        <label>Статус</label>
        <p>{{ isCompleted }}</p>
      </div>
    </section>
  </main>
</template>
