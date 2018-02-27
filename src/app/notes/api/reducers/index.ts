import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromNotes from './notes';

export interface PinboardSlice {
  notes: fromNotes.NoteSlice;
}

export const reducers: ActionReducerMap<PinboardSlice> = {
  notes: fromNotes.reducer
};

/** create base refrence to certain slice, corresponding to feature name */
export const getNotes = createFeatureSelector('pinboard');

export const getNoteSlice = createSelector(
  getNotes,
  (pinboard: PinboardSlice) => pinboard.notes
);

export const allNotes = createSelector(getNoteSlice, fromNotes.allNotes);
export const isLoading = createSelector(getNoteSlice, fromNotes.isLoading);
export const isLoaded = createSelector(getNoteSlice, fromNotes.isLoaded);
