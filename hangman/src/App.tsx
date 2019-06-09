import React from "react";
import * as SBoard from "./components/styled/Board";
import { CustomButton } from "./components/shared/CustomButton";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { Game } from "./components/game/game";
import { HomeScreen } from "./components/homeScreen/homeScreen";

import { NotFound } from "./components/notFound/NotFound";
import * as SBackground from "./components/styled/Background";

const App: React.FC = () => {
  return (
    <SBackground.Background>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/game">Game</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/game" component={Game} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <div>Footer</div>
    </SBackground.Background>
  );
};

export default App;
