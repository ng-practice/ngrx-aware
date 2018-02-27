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
    case Actions.LOAD_ALL:
      return indicateLoading(slice, action);
    case Actions.LOAD_ALL_SUCCESS:
      return set(slice, action);
    case Actions.LOAD_ALL_ERROR:
      return resetLoading(slice, action);
  }

  return slice;
}

function indicateLoading(slice: NoteSlice, action: Actions.LoadAll): NoteSlice {
  return {
    ...slice,
    loading: true
  };
}

function set(slice: NoteSlice, action: Actions.LoadAllSuccess): NoteSlice {
  return {
    ...slice,
    all: action.payload,
    loading: false,
    loaded: true
  };
}

function resetLoading(slice: NoteSlice, action: Actions.LoadAllError): NoteSlice {
  return {
    ...slice,
    loading: false,
    loaded: false
  };
}

export const getAllNotes = (slice: NoteSlice) => slice.all;
