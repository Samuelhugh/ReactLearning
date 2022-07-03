import React, { useState } from "react";
import "./App.css";
import BoxGeneratorForm from "./components/BoxGeneratorForm";
import DisplayBox from "./components/DisplayBox";

function App() {
  const [coloredBoxArray, setColoredBoxArray] = useState([]);
  return (
    <div className="App">
      <h1>Standard Assignment</h1>
      <BoxGeneratorForm
        coloredBoxArray={coloredBoxArray}
        setColoredBoxArray={setColoredBoxArray}
      />
      <DisplayBox coloredBoxArray={coloredBoxArray} />
    </div>
  );
}

export default App;
