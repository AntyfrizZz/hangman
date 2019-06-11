import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomeScreen } from "../homeScreen/HomeScreen";
import { NotFound } from "../notFound/NotFound";
import * as SAppStructure from "../styled/AppStructureStyled";

export const Body: React.FC = props => {
  return (
    <SAppStructure.Body>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route component={NotFound} />
      </Switch>
    </SAppStructure.Body>
  );
};
