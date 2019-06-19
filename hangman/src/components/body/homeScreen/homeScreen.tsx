import React, { useState } from "react";
import * as SHomeScreen from "../../styled/HomeScreenStyled";
import { Redirect } from "react-router";

export const HomeScreen: React.FC = () => {
  const [toGame, setToGame] = useState(false);

  return (
    <>
      {toGame ? <Redirect to="/game" /> : null}
      <SHomeScreen.MenuContainer>
        <button type="button" onClick={() => setToGame(true)}>
          New Game
        </button>
      </SHomeScreen.MenuContainer>
    </>
  );
};
