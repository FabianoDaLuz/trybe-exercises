import * as React from "react";
import Title from "./components/Title/Title";
import { ageDefine } from "./helpers/ageDefine";
import "./App.css";
import Skills from "./components/Skills/Skills";

function App() {
  const idade = ageDefine("14/01/1997");

  return (
    <>
      <Title />
      <p>Sua idade atual é {idade}</p>
      <p>CSS Rules</p>
      <Skills />
    </>
  );
}

export default App;
