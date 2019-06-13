export enum GameActionType {
  SELECT_LETTER = "SELECT_LETTER",
}

export type GameAction = GameSelectLetter;

type GameSelectLetter = { type: GameActionType.SELECT_LETTER, letter: string };
export const selectLetterAction = (letter: string): GameSelectLetter => ({ type: GameActionType.SELECT_LETTER, letter });
