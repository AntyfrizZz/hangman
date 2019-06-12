import React from "react";

interface ILetterCardProps {
  letter: string;
}

export const LetterCard: React.FC<ILetterCardProps> = (props: ILetterCardProps) => {
  return <div>{props.letter}</div>;
};
