import React from "react";

import { useSelector } from "react-redux";
import { State } from "../../store/State";

export const SelectedLetters: React.FC = () => {
  const selectedLetters: string[] = useSelector((state: State) => state.GameReducer.selectedLetters);

  return (
    <div
      style={{
        display: "flex",
      }}>
      {selectedLetters.join(", ")}
    </div>
  );
};
