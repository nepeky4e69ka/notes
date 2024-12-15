import { AxiosInstance } from 'axios';
import { NoteOrigin, Note, NotesActionNames as NAN } from '@/store';
import { Params } from './notes.interface';

export const notesRepository = (axios: AxiosInstance) => ({
  [NAN.GET_NOTES](params?: Params) {
    return axios.get<NoteOrigin[]>('/', { params });
  },
  [NAN.GET_NOTE](id: number) {
    return axios.get<NoteOrigin>(`/${id}`);
  },
  [NAN.ADD_NOTE](body: Note) {
    return axios.post<NoteOrigin>(`/`, body);
  },
  [NAN.UPD_NOTE](body: Note) {
    return axios.patch<NoteOrigin>(`/${body.id}`, body);
  },
  [NAN.REM_NOTE]({ id }: Note) {
    return axios.delete<NoteOrigin>(`/${id}`);
  },
});

export type NotesRepository = ReturnType<typeof notesRepository>;
