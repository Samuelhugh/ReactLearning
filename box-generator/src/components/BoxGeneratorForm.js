import React, { useState } from "react";

const BoxGeneratorForm = (props) => {
  // Using the "getter" and "setter" that were passed from my parent (App.js) component
  // Destructuring "props" into 2 Variables. MUST match the props object "key"
  const { coloredBoxArray, setColoredBoxArray } = props;

  // Create "State" that can only be seen by this component
  // This is the "State" to keep track of the text box input value
  const [color, setColor] = useState("");

  const submitHandler = (e) => {
    // I want to prevent the browsers default behavior of refreshing the page so that "State" is not lost
    e.preventDefault();
    // Using the "Spread" operator and creating a new array to spread out the current values
    // Added new color to coloredBoxArray without losing what is in "State"
    setColoredBoxArray([...coloredBoxArray, color]);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="bc">Color: </label>
        <input
          type="text"
          onChange={(e) => setColor(e.target.value)}
          name="Color"
          id="bc"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default BoxGeneratorForm;
