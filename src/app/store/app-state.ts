import { NoteSlice } from '../notes/api';

export interface AppState {
  notes: {
    models: NoteSlice
  };
}
