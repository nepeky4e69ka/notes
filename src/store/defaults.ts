import { Note, UserPopup, UserPopupType as UPT } from '@/store';
import { random } from '@/utils';

export const mss = 200;
export const defaultNote = (): Note => ({
  slug: 'new_note',
  title: 'Новая заметка',
  id: random(),
  userId: random(),
  completed: false,
});

export const defaultPopup = (): UserPopup => ({
  type: UPT.NOTE_EDIT,
  show: false,
  active: false,
  data: {},
});
