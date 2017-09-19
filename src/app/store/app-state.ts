import { NoteSlice, NotesSearchSlice } from '../notes/api';

export interface AppState {
  notes: {
    models: NoteSlice,
    search: NotesSearchSlice
  };
}
