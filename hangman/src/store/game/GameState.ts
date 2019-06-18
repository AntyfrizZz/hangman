import { GameStateEnum } from "../../enums/GameStateEnum";

export type GameState = {
  selectedLetters: string[];
  gameResult: GameStateEnum;
  wordToGuess: string;
  wrongLetters: number;
};
