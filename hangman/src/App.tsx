import React from "react";
import { CustomButton } from "./components/shared/CustomButton";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { HomeScreen } from "./components/homeScreen/HomeScreen";

import { NotFound } from "./components/notFound/NotFound";
import * as SAppContainer from "./components/styled/AppStructureStyled";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Body } from "./components/body/Body";

const App: React.FC = () => {
  return (
    <SAppContainer.StaticBackground>
      <SAppContainer.Field>
        <Router>
          <Header />
          <Body />
          <Footer />
        </Router>
      </SAppContainer.Field>
    </SAppContainer.StaticBackground>
  );
};

export default App;
