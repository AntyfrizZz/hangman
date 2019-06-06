import React from "react";

interface ICustomButtonProps {
    text: string;
}

export const CustomButton: React.FC<ICustomButtonProps> = (props: ICustomButtonProps): JSX.Element => {
  return <button type="button">{props.text}</button>;
};
