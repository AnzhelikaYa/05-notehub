import axios from 'axios';
import type { Note, FormValues } from '../types/note';

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

const instance = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
  },
});

export const fetchNotes = async (
  search: string,
  page: number
): Promise<FetchNotesResponse> => {
  const { data } = await instance.get('/notes', {
    params: { search, page, perPage: 12 },
  });
  return data;
};

export const createNote = async (
  values: FormValues
): Promise<Note> => {
  const { data } = await instance.post('/notes', values);
  return data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const { data } = await instance.delete(`/notes/${id}`);
  return data;
};
