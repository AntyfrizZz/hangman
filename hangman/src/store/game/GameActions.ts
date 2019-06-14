export enum GameActionType {
  SELECT_LETTER = "SELECT_LETTER",
  WIN_GAME = "WIN_GAME",
  LOSE_GAME = "LOSE_GAME"
}

export type GameAction = GameSelectLetter | WinGame | LoseGame;

type GameSelectLetter = { type: GameActionType.SELECT_LETTER, letter: string };
export const selectLetterAction = (letter: string): GameSelectLetter => ({ type: GameActionType.SELECT_LETTER, letter });

type WinGame = { type: GameActionType.WIN_GAME};
export const winGameAction = (): WinGame => ({type: GameActionType.WIN_GAME});

type LoseGame = { type: GameActionType.LOSE_GAME};
export const loseGameAction = (): LoseGame => ({type: GameActionType.LOSE_GAME});
