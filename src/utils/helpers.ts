import { Note, NoteOrigin } from '@/store';
import { LocationAsRelativeRaw as LRR } from 'vue-router';
import { RouteNames as RN } from '@/utils';

export const replace = (s: string): string =>
  s.replace(/[\|&;\$%@"<>\(\)\+,/\s/]/g, '-');

export const withSlug = (note: NoteOrigin): Note => ({
  ...note,
  slug: replace(note.title),
});
export const isValid = (note: Note): boolean => {
  const len = note.title?.length;
  return len > 3 && len < 50;
};

export const notesWithSlug = (notes: NoteOrigin[]): Note[] =>
  notes.map(withSlug);

export const random = (min = 10e3, max = 10e9): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const _completed = (state: boolean): string =>
  state ? 'Выполнено' : 'Не выполнено';

export const toAdd = (): LRR => ({ name: RN.ADD });
export const toNotes = (): LRR => ({ name: RN.NOTES });
export const toNote = ({ slug }: Note): LRR => ({
  name: RN.NOTE,
  params: { slug },
});
