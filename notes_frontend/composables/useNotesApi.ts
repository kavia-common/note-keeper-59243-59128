import { Ref } from 'vue';

export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
};

type FetchOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
};

/**
 * Helper to build API URLs using runtime public config.
 */
function apiUrl(path: string): string {
  const config = useRuntimeConfig();
  let base = config.public.apiBase || '/api';
  if (base.endsWith('/')) base = base.slice(0, -1);
  if (!path.startsWith('/')) path = '/' + path;
  return `${base}${path}`;
}

/**
 * Thin wrapper over $fetch with JSON handling and error surface.
 */
async function apiFetch<T>(path: string, options: FetchOptions = {}): Promise<T> {
  const { method = 'GET', body } = options;
  return await $fetch<T>(apiUrl(path), {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

// PUBLIC_INTERFACE
export function useNotesApi() {
  /**
   * PUBLIC_INTERFACE
   * listNotes fetches all notes.
   */
  async function listNotes(): Promise<Note[]> {
    return await apiFetch<Note[]>('/notes');
  }

  /**
   * PUBLIC_INTERFACE
   * getNote fetches a single note by id.
   */
  async function getNote(id: string): Promise<Note> {
    return await apiFetch<Note>(`/notes/${encodeURIComponent(id)}`);
  }

  /**
   * PUBLIC_INTERFACE
   * createNote creates a new note with provided title and content.
   */
  async function createNote(payload: { title: string; content: string }): Promise<Note> {
    return await apiFetch<Note>('/notes', { method: 'POST', body: payload });
  }

  /**
   * PUBLIC_INTERFACE
   * updateNote updates an existing note by id.
   */
  async function updateNote(id: string, payload: { title: string; content: string }): Promise<Note> {
    return await apiFetch<Note>(`/notes/${encodeURIComponent(id)}`, { method: 'PUT', body: payload });
  }

  /**
   * PUBLIC_INTERFACE
   * deleteNote removes a note by id.
   */
  async function deleteNote(id: string): Promise<{ success: boolean }> {
    return await apiFetch<{ success: boolean }>(`/notes/${encodeURIComponent(id)}`, { method: 'DELETE' });
  }

  return {
    listNotes,
    getNote,
    createNote,
    updateNote,
    deleteNote,
  };
}
