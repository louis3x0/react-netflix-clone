import React from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <Header />
      <Main />
      <GlobalStyle />
    </>
  );
}

export default App;
