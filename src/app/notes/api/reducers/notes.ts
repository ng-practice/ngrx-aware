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

// const handlers = {};
// handlers[Actions.LOAD_ALL_SUCCESS] = set;

const handlers = provideHandlers([
  { type: Actions.LOAD_ALL_SUCCESS, reducerFn: set}
]);

// export function notesReducer(slice = initialState, action: Action) {
//   if (typeof handlers[action.type] === 'function') {
//     return handlers[action.type](slice, action);
//   }
//   return slice;
// }

export const notesReducer = createReducer(initialState, handlers);

function set(slice: NoteSlice, action: LoadAllSuccess) {
  return {
    ...slice,
    all: action.payload
  };
}
