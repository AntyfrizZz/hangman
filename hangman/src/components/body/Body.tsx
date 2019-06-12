import React from "react";
import { Switch, Route } from "react-router-dom";
import { NotFound } from "../notFound/NotFound";
import * as SAppStructure from "../styled/AppStructureStyled";
import { HomeScreen } from "../homeScreen/homeScreen";
import { GameScreen } from "../gameScreen/GameScreen";

export const Body: React.FC = props => {
  return (
    <SAppStructure.Body>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/game" component={GameScreen} />
        <Route component={NotFound} />
      </Switch>
    </SAppStructure.Body>
  );
};
