import React from "react";

import * as SHomeScreen from "../styled/HomeScreenStyled";

export const HomeScreen: React.FC = () => {
  return (
    <SHomeScreen.MenuContainer>
      <button type="button">New Game</button>
    </SHomeScreen.MenuContainer>
  );
};
