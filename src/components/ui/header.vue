<script setup lang="ts">
import { watch, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNotesStore } from '@/store'
import { storeToRefs } from 'pinia'
import { RouteTitles, toAdd, toNotes, isValid, RouteNames as RN } from '@/utils'
const route = useRoute();
const router = useRouter();
const noteStore = useNotesStore()
const { note } = storeToRefs(noteStore);
const { addNote } = noteStore;
const title = ref('');
const canShowAdd = computed(() => route.name === RN.NOTES)
const canShowSave = computed(() => route.name === RN.ADD)
const classes = computed(() => [ isValid(note.value) ?  '--primary': '--disabled' ])
const setTitle = () => title.value = RouteTitles[route.name as RN];
const newNote = () => router.push(toAdd());
const saveNote = () => {
  if (isValid(note.value)) {
    addNote().then(() => router.push(toNotes()))
  }
}
watch(() => route.name, setTitle)
</script>
<template>
  <header>
    <div class="container">
      <div class="row align-items-center">
        <div class="col align-self-center">
          <h3>{{ title }}</h3>
          <ui-button 
            @click="newNote" 
            :value="'Добавить'"
            :icon="'i-add'" 
            :classes="['--primary']"
            v-if="canShowAdd"
          />
          <ui-button 
            @click="saveNote" 
            :value="'Сохранить'"
            :icon="'i-save'"
            :classes="classes"
            v-if="canShowSave"
          />
        </div>
      </div>
    </div>
  </header>
</template>
