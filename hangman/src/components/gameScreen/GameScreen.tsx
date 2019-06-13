import React from "react";

import { SelectedLetters } from "./SelectedLetters";
import { AllLetters } from "./AllLetters";
import { WordForGuess } from "./WordForGuess";

export const GameScreen: React.FC = () => {
  return (
    <div>
      <SelectedLetters />
      <WordForGuess word="SHAREPOINT" />
      <AllLetters />
    </div>
  );
};
