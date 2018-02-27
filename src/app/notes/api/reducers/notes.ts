import * as Actions from '../actions';
import { Note } from '../model';

export interface NoteSlice {
  entities: { [id: string]: Note };
  loaded: boolean;
  loading: boolean;
}

const initialState: NoteSlice = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(slice = initialState, action: Actions.All) {
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
  const entities = action.payload.reduce(
    (notes: { [id: string]: Note }, note) => ({
      ...notes,
      [note.guid]: note
    }),
    { ...slice.entities }
  );

  return {
    ...slice,
    entities,
    loading: false,
    loaded: true
  };
}

function resetLoading(
  slice: NoteSlice,
  action: Actions.LoadAllError
): NoteSlice {
  return {
    ...slice,
    loading: false,
    loaded: false
  };
}

export const allNotesEntities = (slice: NoteSlice) => slice.entities;
export const allNotes = (entities: {[id: string]: Note}) => Object.keys(entities).map(guid => entities[guid]);

export const isLoading = (slice: NoteSlice) => slice.loading;
export const isLoaded = (slice: NoteSlice) => slice.loaded;
