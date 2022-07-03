// Do I have to import React every time I use a file?
import React from "react";
// react-router-dom has DOM manipulation and react-router has what...?
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NumberParam from "./components/NumberParam";
import HelloParam from "./components/HelloParam";
import BlueRedParam from "./components/BlueRedParam";
import "./App.css";

function App() {
  return (
    // I can use BrowserRouter in my "index.js"
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:num" element={<NumberParam />} />
          <Route path="/:hello" element={<HelloParam />} />
          <Route path="/:hello/:color/:bgColor" element={<BlueRedParam />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
