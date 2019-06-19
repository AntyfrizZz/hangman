import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../../../store/State";
import * as SHangStyled from "../../../styled/HangStyled";
import { Ground } from "./Ground";
import { Hang } from "./Hang";
import { Rope } from "./Rope";

export const HangParts: React.FC = () => {
  const wrongLettersCount: number = useSelector((state: State) => state.GameReducer.wrongLettersCount);

  return (
    <SHangStyled.HangPartsContainer>
      {wrongLettersCount > 0 && <Hang />}
      {wrongLettersCount > 1 && <Rope />}
      <Ground />
    </SHangStyled.HangPartsContainer>
  );
};
