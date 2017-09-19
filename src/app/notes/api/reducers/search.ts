import { Action } from '@ngrx/store';

import { Note } from '../model';

export interface NotesSearchSlice {
  query: string;
  results: Note[];
}

const initialState = {
  query: '',
  results: []
};

export function notesSearchReducer(slice = initialState, action: Action) {
  return slice;
}
