import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./Coin";
import Coins from "./Coins";
import styled from "styled-components";
import { useState } from "react";

interface IHome {
  toggleDarkMode: () => void;
}

const Button = styled.button`
  
`;

function Router({ toggleDarkMode }: IHome) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin></Coin>
        </Route>
        <Route path="/">
          <Button onClick={toggleDarkMode}>테마 변경</Button>
          <Coins></Coins>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
