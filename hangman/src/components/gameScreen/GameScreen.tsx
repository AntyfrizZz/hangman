import React from "react";
import { LetterCard } from "./LetterCard";
import { GameService } from "../../services/GameService";

export const GameScreen: React.FC = () => {
  const letters: string[] = GameService.getAllLetters();
  const letterCards: any[] = [];
  letters.forEach((letter: string) => {
    letterCards.push(<LetterCard letter={letter} />);
  });

  return <div>{letterCards}</div>
};
