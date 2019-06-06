import React from "react";
import * as SBoard from "./components/styled/Board";
import { CustomButton } from "./components/shared/CustomButton";

const App: React.FC = () => {
  return (
    <SBoard.board>
      <CustomButton text="New game" />
    </SBoard.board>
  );
};

export default App;
