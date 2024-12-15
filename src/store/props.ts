import { Note } from '@/store';

export type TProp = {
  row: Note;
};
export type TProps = {
  rows: Note[];
  isActive: boolean | undefined;
};
