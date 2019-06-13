import React from "react";

import { useSelector } from "react-redux";
import { State } from "../../store/State";
import { LetterCard } from "./LetterCard";

interface IWordForGuessProps {
  word: string;
}

export const WordForGuess: React.FC<IWordForGuessProps> = (props: IWordForGuessProps) => {
  const selectedLetters: string[] = useSelector((state: State) => state.GameReducer.selectedLetters);

  const result: JSX.Element[] = [];
  for (const letter of props.word) {
    if (selectedLetters.indexOf(letter) !== -1) {
      result.push(<LetterCard letter={letter} />);
    } else {
      result.push(<div>_</div>);
    }
  }

  return (
    <div
      style={{
        display: "flex",
      }}>
      {result}
    </div>
  );
};
