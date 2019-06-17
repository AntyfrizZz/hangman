import React from "react";
import { BrowserRouter } from "react-router-dom";

import * as SAppContainer from "./components/styled/AppStructureStyled";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Body } from "./components/body/Body";

const App: React.FC = () => {
  return (
    <SAppContainer.StaticBackground>
      <SAppContainer.Field>
        <BrowserRouter>
          <Header />
          <Body />
          <Footer />
        </BrowserRouter>
      </SAppContainer.Field>
    </SAppContainer.StaticBackground>
  );
};

export default App;
