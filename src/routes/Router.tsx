import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./Coin";
import Coins from "./Coins";
import Toggle from "./Toggle";

interface IHome {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

function Router({ isDarkMode, toggleDarkMode }: IHome) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/:coinId">
          <Toggle
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          ></Toggle>
          <Coin isDarkMode={isDarkMode}></Coin>
        </Route>
        <Route path="/">
          <Toggle
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          ></Toggle>
          <Coins></Coins>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
