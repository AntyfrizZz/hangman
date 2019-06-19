import { GameAction, GameActionType } from "./GameActions";
import { GameState } from "./GameState";

import clone from "clone";
import { GameStateEnum } from "../../enums/GameStateEnum";

export const GameInitialState: GameState = {
  selectedLetters: [],
  gameResult: GameStateEnum.None,
  wordToGuess: "ABC",
  wrongLettersCount: 0
};

export const GameReducer: (state: GameState | undefined, action: GameAction) => GameState = (
  state: GameState = GameInitialState,
  action: GameAction
): GameState => {
  const newState: GameState = clone(state);

  switch (action.type) {
    case GameActionType.SELECT_LETTER:
      newState.selectedLetters.push(action.letter);
      if (state.wordToGuess.indexOf(action.letter) === -1) {
        newState.wrongLettersCount++;
      }
      break;
    case GameActionType.WIN_GAME:
      newState.gameResult = GameStateEnum.Win;
      break;
    case GameActionType.LOSE_GAME:
      newState.gameResult = GameStateEnum.Lose;
      break;
    case GameActionType.START_NEW_GAME:
      newState.wordToGuess = action.wordToGuess;
      break;
    default:
      return state;
  }

  return newState;
};
