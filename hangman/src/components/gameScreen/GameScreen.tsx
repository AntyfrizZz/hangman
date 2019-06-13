import React from "react";
import { LetterCard } from "./LetterCard";
import { GameService } from "../../services/GameService";
import { useSelector } from "react-redux";
import { State } from "../../store/State";

export const GameScreen: React.FC = () => {
  const letters: string[] = GameService.getAllLetters();
  const letterCards: any[] = [];
  letters.forEach((letter: string) => {
    letterCards.push(<LetterCard letter={letter} />);
  });

  const selectedLetters: string[] = useSelector((state: State) => state.GameReducer.selectedLetters);

  return (
    <div>
      <div>{selectedLetters.join(", ")}</div>
      <div>{letterCards}</div>
    </div>
  );
};
