import { LoadAllSuccess } from '../actions';
import { Note } from '../model';
import * as Actions from '../actions';

import { createReducer, provideHandlers } from '../../../store';

export type Action = Actions.All;

export interface NoteSlice {
  all: Note[];
}

const initialState: NoteSlice = {
  all: []
};

const handlers = {};
handlers[Actions.LOAD_ALL_SUCCESS] = set;

export function notesReducer(slice = initialState, action: Action) {
  if (typeof handlers[action.type] === 'function') {
    return handlers[action.type](slice, action);
  }
  return slice;
}

function set(slice: NoteSlice, action: LoadAllSuccess) {
  return {
    ...slice,
    all: action.payload
  };
}
