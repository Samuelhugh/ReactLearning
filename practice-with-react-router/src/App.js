import React from "react";
// Why do we use curly braces when importing from these various libraries?
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// I can write these Functional Components in their own files
const Home = (props) => {
  return (
    <div className="hOne">
      <h1>Home Component!</h1>
      {/* Using this way Would cause a page refresh and erase my "state" */}
      {/* <a href="/about">Go To About</a>; */}
      {/* Instead use "Link" */}
      <Link to={"/about"}>Go To About!</Link>
    </div>
  );
};

const About = (props) => {
  return (
    <div>
      {/* These must be in quotes? */}
      <h1 style={{ color: "blue" }}>About Component!</h1>
      {/* Using this way Would cause a page refresh and erase my "state" */}
      {/* <a href="/">Go Back To Home</a> */}
      {/* Instead use "Link", it is also represented as a "<a>" tag in the inspect tools */}
      <Link to={"/"}>Go Back To Home!</Link>
    </div>
  );
};
function App() {
  return (
    <BrowserRouter>
      {/* With or without this "<div>" below this app will run to industry standard? */}
      <div className="App">
        <h1>Routing Example</h1>
        <Routes>
          {/* Goes to Route use "Path" Props. Displaying only what is passed into the "Route" element Props */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
