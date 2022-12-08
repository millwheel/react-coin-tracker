import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { darkTheme, lightTheme } from './theme';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </div>
);
