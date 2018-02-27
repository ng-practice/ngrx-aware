import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromNotes from './notes';

/** create base refrence to certain slice, corresponding to feature name */
export const getNotes = createFeatureSelector('notes');

export const getNoteSlice = createSelector(
  getNotes,
  (notes: any) => notes.models
);

export const getAllNotes = createSelector(getNoteSlice, fromNotes.getAllNotes);
