import React from "react";

import { LetterCard } from "./LetterCard";

import { GameService } from "../../services/GameService";

export const AllLetters: React.FC = () => {
  const letters: string[] = GameService.getAllLetters();
  const letterCards: any[] = [];
  letters.forEach((letter: string) => {
    letterCards.push(<LetterCard letter={letter} />);
  });

  return (
    <div
      style={{
        display: "flex",
      }}>
      {letterCards}
    </div>
  );
};
