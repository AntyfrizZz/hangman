import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { selectLetterAction } from "../../store/game/GameActions";

import * as SGameScreen from "../styled/GameScreenStyled";

interface ILetterCardProps {
  letter: string;
}

export const LetterCard: React.FC<ILetterCardProps> = (props: ILetterCardProps) => {
  const [disabled, setDisabled] = useState(false);

  const dispatch = useDispatch();

  const onLetterClick = (): void => {
    if (disabled) {
      return;
    }

    dispatch(selectLetterAction(props.letter));
    setDisabled(true);
  };

  return (
    <SGameScreen.LetterCard disabled={disabled} onClick={onLetterClick}>
      {props.letter}
    </SGameScreen.LetterCard>
  );
};
