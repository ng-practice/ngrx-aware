import * as Actions from '../actions';

import { Note } from '../model';
import { createReducer, provideHandlers } from '../../../store';

export interface NoteSlice {
  all: Note[];
  loaded: boolean;
  loading: boolean;
}

const initialState: NoteSlice = {
  all: [],
  loaded: false,
  loading: false
};

const handlers = provideHandlers([
  { type: Actions.LOAD_ALL_SUCCESS, reducerFn: set }
]);

export function notesReducer(slice = initialState, action: Actions.All) {
  if (typeof handlers[action.type] === 'function') {
    return handlers[action.type](slice, action);
  }
  return slice;
}

// Hmpf, ...Angular Compiler. :D
// export const notesReducer = createReducer(initialState, handlers);

function set(slice: NoteSlice, action: Actions.LoadAllSuccess) {
  return {
    ...slice,
    all: action.payload
  };
}

export const getAllNotes = (slice: NoteSlice) => slice.all;
