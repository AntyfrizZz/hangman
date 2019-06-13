import React, { useState } from "react";
import * as SGameScreen from "../styled/GameScreenStyled";
import { useDispatch } from "react-redux";
import { GameActionType, selectLetterAction } from "../../store/game/GameActions";

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
