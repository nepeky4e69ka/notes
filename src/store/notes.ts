import { defineStore, storeToRefs } from 'pinia';
import { ref } from 'vue';
import { defaultNote } from './defaults';
import { api } from '@/api';
import { useUserStore } from '@/store';
import { withSlug, notesWithSlug, router, RouteNames as RN } from '@/utils';
import { Note, NotesStore, NotesActionNames as NAN } from './notes.interface';

export const useNotesStore = defineStore('notes', (): NotesStore => {
  /**
   * @implements states
   */
  const notes = ref([] as Note[]);
  const note = ref(defaultNote());
  const userStore = useUserStore();
  const { isCompleted } = storeToRefs(userStore);
  const { toggleLoading } = userStore;

  /**
   * @implements actions
   */
  async function getNotes(loader = true) {
    try {
      toggleLoading(loader);
      const req = api.notes[NAN.GET_NOTES];
      const completed = isCompleted.value;
      const { data } = await req({ completed });
      notes.value = notesWithSlug(data);
    } catch (e) {
      void e;
    }
    toggleLoading(false);
  }

  async function getNote(slug: string) {
    try {
      if (!notes.value.length) {
        await getNotes();
      }
      const exist = notes.value.find((n) => n.slug === slug);
      if (!exist) {
        throw new Error('Not found');
      }
      toggleLoading(true);
      const req = api.notes[NAN.GET_NOTE];
      const { data } = await req(exist.id);
      note.value = withSlug(data);
      void data;
    } catch (e) {
      router.push({ name: RN.NOTES });
    }
    toggleLoading(false);
  }

  async function updateNote(n: Note) {
    const idx = notes.value.findIndex((nn) => nn.id === n.id);
    if (idx < 0) {
      return;
    }
    try {
      const note = withSlug(n);
      const req = api.notes[NAN.UPD_NOTE];
      await req(note);
      notes.value.splice(idx, 1);
      notes.value.push(note);
    } catch (e) {
      void e;
    }
  }

  async function removeNote(id: number) {
    const idx = notes.value.findIndex((n) => n.id === id);
    if (idx < 0) {
      return;
    }
    try {
      const note = notes.value[idx];
      const req = api.notes[NAN.REM_NOTE];
      await req(note);
      notes.value.splice(idx, 1);
    } catch (e) {
      void e;
    }
  }

  async function addNote() {
    try {
      const req = api.notes[NAN.ADD_NOTE];
      const { data } = await req(note.value);
      notes.value.unshift(withSlug(data));
      resetNote();
    } catch (e) {
      void e;
    }
  }

  /**
   * @implements helpers
   */
  function completed(id: number) {
    const idx = notes.value.findIndex((n) => n.id === id);
    if (idx < 0) {
      return;
    }
    notes.value[idx].completed = !notes.value[idx].completed;
    updateNote(notes.value[idx]);
  }

  function toggleNote() {
    note.value.completed = !note.value.completed;
  }

  function setNote(n: Note) {
    note.value = withSlug(n);
  }

  function resetNote() {
    note.value = defaultNote();
  }
  //
  return {
    notes,
    note,
    getNotes,
    getNote,
    addNote,
    updateNote,
    removeNote,
    toggleNote,
    resetNote,
    setNote,
    completed,
  };
});
