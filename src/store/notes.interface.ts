import { Ref } from 'vue';

export interface NoteOrigin {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export interface Note extends NoteOrigin {
  slug: string;
}
export enum NotesActionNames {
  GET_NOTES = 'getNotes',
  GET_NOTE = 'getNote',
  ADD_NOTE = 'addNote',
  UPD_NOTE = 'updateNote',
  REM_NOTE = 'removeNote',
  TOG_NOTE = 'toggleNote',
  SET_NOTE = 'setNote',
  RESET = 'resetNote',
  COMPLETED = 'completed',
}
export interface NotesStore {
  notes: Ref<Note[]>;
  note: Ref<Note>;
  [NotesActionNames.GET_NOTES]: (loader?: boolean) => Promise<void>;
  [NotesActionNames.GET_NOTE]: (slug: string) => Promise<void>;
  [NotesActionNames.UPD_NOTE]: (note: Note) => Promise<void>;
  [NotesActionNames.SET_NOTE]: (note: Note) => void;
  [NotesActionNames.REM_NOTE]: (id: number) => Promise<void>;
  [NotesActionNames.TOG_NOTE]: () => void;
  [NotesActionNames.COMPLETED]: (id: number) => void;
  [NotesActionNames.RESET]: () => void;
  [NotesActionNames.ADD_NOTE]: () => Promise<void>;
}
