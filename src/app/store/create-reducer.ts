import { Action } from '@ngrx/store';

export function createReducer(initialState, handlers) {
  return function reducer(slice = initialState, action: Action) {
    if (typeof handlers[action.type] === 'function') {
      return handlers[action.type](slice, action);
    }
    return slice;
  };
}
