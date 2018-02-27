import * as Actions from '../actions';
import { Note } from '../model';

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

export function notesReducer(slice = initialState, action: Actions.All) {
  switch (action.type) {
    case Actions.LOAD_ALL_SUCCESS:
      return set(slice, action);
  }

  return slice;
}

function set(slice: NoteSlice, action: Actions.LoadAllSuccess) {
  return {
    ...slice,
    all: action.payload
  };
}

export const getAllNotes = (slice: NoteSlice) => slice.all;
