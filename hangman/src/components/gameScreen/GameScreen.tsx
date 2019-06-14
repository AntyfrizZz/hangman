import React from "react";

import { useSelector } from "react-redux";
import { State } from "../../store/State";

import { SelectedLetters } from "./SelectedLetters";
import { AllLetters } from "./AllLetters";
import { WordForGuess } from "./WordForGuess";

export const GameScreen: React.FC = () => {
  const winGame: boolean = useSelector((state: State) => state.GameReducer.winGame);
  const loseGame: boolean = useSelector((state: State) => state.GameReducer.loseGame);

  if (winGame) {
    return <div>win</div>;
  }

  return (
    <div>
      <SelectedLetters />
      <WordForGuess word="S" />
      <AllLetters />
    </div>
  );
};
