import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store/State";

import { LetterCard } from "./LetterCard";
import { winGameAction } from "../../store/game/GameActions";

export const WordForGuess: React.FC = () => {
  useEffect(() => {
    if (gotAllLetters) {
      dispatch(winGameAction());
    }
  });

  const dispatch = useDispatch();
  const selectedLetters: string[] = useSelector((state: State) => state.GameReducer.selectedLetters);
  const wordForGuess: string = useSelector((state: State) => state.GameReducer.wordToGuess);

  let gotAllLetters: boolean = true;
  const result: JSX.Element[] = [];
  for (const letter of wordForGuess) {
    if (selectedLetters.indexOf(letter) !== -1) {
      result.push(<LetterCard letter={letter} />);
    } else {
      result.push(<LetterCard letter=" " />);
      gotAllLetters = false;
    }
  }

  return (
    <div
      style={{
        display: "flex"
      }}
    >
      {result}
    </div>
  );
};
