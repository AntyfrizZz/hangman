import { GameAction, GameActionType } from './GameActions';
import { GameState } from './GameState';

import clone from 'clone';

export const GameInitialState: GameState = {
  selectedLetters: [],
};

export const GameReducer: (state: GameState | undefined, action: GameAction) => GameState = (
  state: GameState = GameInitialState,
  action: GameAction,
): GameState => {
  const newState: GameState = clone(state);

  switch (action.type) {
    case GameActionType.SELECT_LETTER:
      newState.selectedLetters.push(action.letter);
      break;
    default:
      return state;
  }

  return newState;
};