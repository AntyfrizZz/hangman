import React, { useState } from "react";
import * as SGameScreen from "../styled/GameScreenStyled";

interface ILetterCardProps {
  letter: string;
}

export const LetterCard: React.FC<ILetterCardProps> = (props: ILetterCardProps) => {
  const [disabled, setDisabled] = useState(false);

  const onLetterClick = (): void => {
    if (disabled) {
      return;
    }

    setDisabled(true);
  };

  return (
    <SGameScreen.LetterCard disabled={disabled} onClick={onLetterClick}>
      {props.letter}
    </SGameScreen.LetterCard>
  );
};
