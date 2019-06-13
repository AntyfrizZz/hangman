import React from "react";

import { SelectedLetters } from "./SelectedLetters";
import { AllLetters } from "./AllLetters";

export const GameScreen: React.FC = () => {
  return (
    <div>
      <SelectedLetters />
      <AllLetters />
    </div>
  );
};
