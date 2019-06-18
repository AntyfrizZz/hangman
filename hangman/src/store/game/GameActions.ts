export enum GameActionType {
  SELECT_LETTER = "SELECT_LETTER",
  WIN_GAME = "WIN_GAME",
  LOSE_GAME = "LOSE_GAME",
  START_NEW_GAME = "START_NEW_GAME",
}

export type GameAction = SelectLetter | WinGame | LoseGame | StartNewGame;

type SelectLetter = { type: GameActionType.SELECT_LETTER, letter: string };
export const selectLetterAction = (letter: string): SelectLetter => ({ type: GameActionType.SELECT_LETTER, letter });

type WinGame = { type: GameActionType.WIN_GAME};
export const winGameAction = (): WinGame => ({type: GameActionType.WIN_GAME});

type LoseGame = { type: GameActionType.LOSE_GAME};
export const loseGameAction = (): LoseGame => ({type: GameActionType.LOSE_GAME});

type StartNewGame = {type: GameActionType.START_NEW_GAME, wordToGuess: string }
export const startNewGameAction = (wordToGuess: string): StartNewGame => ({type: GameActionType.START_NEW_GAME, wordToGuess})

