import axios from "axios";
import type { FormValues, Note } from "../types/note";

interface NoteResponse {
  notes: Note[]
  totalPages: number
}

export async function fetchNotes(search: string, page: number): Promise<NoteResponse> {
    const url = 'https://notehub-public.goit.study/api/notes'
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`
      },
      params: {
          search: search,
          page: page,
          perPage: 12
      }
    }

  const response = await axios.get<NoteResponse>(url, options)

  return response.data
}

export async function createNote(objet: FormValues): Promise<Note> {
  const url = 'https://notehub-public.goit.study/api/notes'
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`
    },
  }

  const response = await axios.post<Note>(url, objet, options)

  return response.data
}

export async function deleteNote(id: string): Promise<Note> {
  const url = `https://notehub-public.goit.study/api/notes/${id}`
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`
    },
  }

  const response = await axios.delete<Note>(url, options)

  return response.data
}