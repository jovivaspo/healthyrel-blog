import React from "react";
import { ThemeProvider } from "../context/theme-context";
import "../assets/css/global.css";
import "../assets/css/normalize.css";

const App = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="app">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default App;
