import React from "react";
import * as SHangStyled from "../../../styled/HangStyled";

export const Hang: React.FC = () => {
  return (
    <>
      <SHangStyled.Hang.LeftPart />
      <SHangStyled.Hang.TopPart />
      <SHangStyled.Hang.RightPart />
    </>
  );
};
