import Title from "./components/Title";
import Card from "./components/Card/Card";
import "./App.css";
import * as React from "react";
import { forecastList } from "./Data/forecast";

function App() {
  return (
    <div>
      <Title text="Previsão semanal da semana" fabianoescotto="Fabiano" />

      <Card forecast={forecastList[0]} />
    </div>
  );
}

export default App;
