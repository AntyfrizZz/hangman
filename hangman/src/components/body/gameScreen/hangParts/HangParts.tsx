import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../../../store/State";
import * as SHangStyled from "../../../styled/HangStyled";
import { Ground } from "./Ground";
import { Hang } from "./Hang";
import { Rope } from "./Rope";
import { PersonHead } from "./PersonHead";
import { PersonBody } from "./PersonBody";
import { PersonLeftArm } from "./PersonLeftArm";
import { PersonRightArm } from "./PersonRightArm";
import { PersonLeftFoot } from "./PersonLeftFoot";
import { PersonRightFoot } from "./PersonRightFoot";

export const HangParts: React.FC = () => {
  const wrongLettersCount: number = useSelector((state: State) => state.GameReducer.wrongLettersCount);

  return (
    <SHangStyled.HangPartsContainer>
      {wrongLettersCount > 0 && <Hang />}
      {wrongLettersCount > 1 && <Rope />}
      {wrongLettersCount > 2 && <PersonHead />}
      {wrongLettersCount > 3 && <PersonBody />}
      {wrongLettersCount > 4 && <PersonLeftArm />}
      {wrongLettersCount > 5 && <PersonRightArm />}
      {wrongLettersCount > 6 && <PersonLeftFoot />}
      {wrongLettersCount > 7 && <PersonRightFoot />}
      <Ground />
    </SHangStyled.HangPartsContainer>
  );
};
