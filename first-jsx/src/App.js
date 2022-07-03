import React from "react";
import "./App.css";

// how can/do I render to the Root Node? or is it just automatically rendered there? webpack handles it. and "export default App" differences
function App() {
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h3>Things I need to do:</h3>
      <ul>
        <li>Learn React</li>
        <li>Climb mt. Everest</li>
        <li>Run a marathon</li>
        <li>Feed the dogs</li>
        <li>Get rid of ".App" selector in App.css</li>
      </ul>
    </div>
  );
}

export default App;
