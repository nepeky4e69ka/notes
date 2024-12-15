import { axiosInstance as $axios } from '@/utils';
import { notesRepository, NotesRepository } from '@/api';

export type Repository = {
  notes: NotesRepository;
};

const createRepository = (): Repository => {
  return {
    notes: notesRepository($axios),
  };
};

export const api = createRepository();
