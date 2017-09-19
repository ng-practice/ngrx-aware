import { AppState } from '../../store';

export const allNotes = (state: AppState) => state.notes.models.all;
