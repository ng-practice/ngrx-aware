import * as Actions from './actions';

export type Action = Actions.All;

export function reducer(state: number = 0, action: Action) {
  switch (action.type) {
    case Actions.INCREMENT:
      return state + 1;
    case Actions.DECREMENT:
      return state - 1;
    case Actions.RESET:
      return action.payload;
    default:
      return state;
  }
}
