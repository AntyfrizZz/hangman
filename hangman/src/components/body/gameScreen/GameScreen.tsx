import React from "react";

import { useSelector } from "react-redux";
import { State } from "../../../store/State";

import { AllLetters } from "./AllLetters";
import { WordForGuess } from "./WordForGuess";
import { GameStateEnum } from "../../../enums/GameStateEnum";
import { HangParts } from "./hangParts/HangParts";

export const GameScreen: React.FC = () => {
  const gameResult: GameStateEnum = useSelector((state: State) => state.GameReducer.gameResult);
  const wrongLetters: GameStateEnum = useSelector((state: State) => state.GameReducer.wrongLettersCount);

  if (gameResult === GameStateEnum.Win) {
    return <div>win</div>;
  }

  return (
    <div>
      <HangParts />
      <WordForGuess />
      <AllLetters />
    </div>
  );
};
