import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store/State";

import { LetterCard } from "./LetterCard";
import { winGameAction } from "../../store/game/GameActions";

interface IWordForGuessProps {
  word: string;
}

export const WordForGuess: React.FC<IWordForGuessProps> = (props: IWordForGuessProps) => {
  const selectedLetters: string[] = useSelector((state: State) => state.GameReducer.selectedLetters);
  const dispatch = useDispatch();

  const result: JSX.Element[] = [];
  let gotAllLetters: boolean = true;
  for (const letter of props.word) {
    if (selectedLetters.indexOf(letter) !== -1) {
      result.push(<LetterCard letter={letter} />);
    } else {
      result.push(<LetterCard letter=" " />);
      gotAllLetters = false;
    }
  }

  if (gotAllLetters) {
    // dispatch(winGameAction());
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
