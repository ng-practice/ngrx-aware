import { Action } from '@ngrx/store';

import { Note } from './model';

export const LOAD_ALL = '[Notes] Load all notes';
export const LOAD_ALL_SUCCESS = '[Notes] Loaded all notes successfully';
export const LOAD_ALL_ERROR = '[Notes] Loading all notes failed';
export const INCREMENT = '[Notes] Increment';
export const DECREMENT = '[Notes] Decrement';
export const RESET = '[Notes] Reset';

export class LoadAll implements Action {
  readonly type = LOAD_ALL;
}

export class LoadAllSuccess implements Action {
  readonly type = LOAD_ALL_SUCCESS;

  constructor(public payload: Note[]) {}
}

export class LoadAllError implements Action {
  readonly type = LOAD_ALL_ERROR;

  constructor(public err: Error) {}
}

export class Increment implements Action {
  readonly type = INCREMENT;
}

export class Decrement implements Action {
  readonly type = DECREMENT;
}

export class Reset implements Action {
  readonly type = RESET;

  constructor(public payload: number) {}
}

export type All
  = Increment
  | Decrement
  | Reset
  | LoadAll
  | LoadAllSuccess
  | LoadAllError;
