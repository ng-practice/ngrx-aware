import { reducer as notesReducer } from './reducer';

import * as NotesActions from './actions';
export const Actions = NotesActions;

export const reducers = {
  counter: notesReducer
};
