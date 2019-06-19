import React from "react";

import { useSelector } from "react-redux";
import { State } from "../../../store/State";

import { SelectedLetters } from "./SelectedLetters";
import { AllLetters } from "./AllLetters";
import { WordForGuess } from "./WordForGuess";
import { GameStateEnum } from "../../../enums/GameStateEnum";

export const GameScreen: React.FC = () => {
  const gameState: GameStateEnum = useSelector((state: State) => state.GameReducer.gameResult);
  const wrongLetters: GameStateEnum = useSelector((state: State) => state.GameReducer.wrongLetters);

  if (gameState === GameStateEnum.Win) {
    return <div>win</div>;
  }

  return (
    <div>
      {wrongLetters}
      <SelectedLetters />
      <WordForGuess />
      <AllLetters />
    </div>
  );
};
