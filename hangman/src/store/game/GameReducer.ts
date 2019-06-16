import { GameAction, GameActionType } from "./GameActions";
import { GameState } from "./GameState";

import clone from "clone";

export const GameInitialState: GameState = {
  selectedLetters: [],
  winGame: false,
  loseGame: false,
  wordToGuess: "ABC"
};

export const GameReducer: (state: GameState | undefined, action: GameAction) => GameState = (
  state: GameState = GameInitialState,
  action: GameAction
): GameState => {
  const newState: GameState = clone(state);

  switch (action.type) {
    case GameActionType.SELECT_LETTER:
      newState.selectedLetters.push(action.letter);
      break;
    case GameActionType.WIN_GAME:
      newState.winGame = true;
      break;
    case GameActionType.LOSE_GAME:
      newState.loseGame = true;
      break;
    case GameActionType.START_NEW_GAME:
      newState.wordToGuess = action.wordToGuess;
      break;
    default:
      return state;
  }

  return newState;
};
