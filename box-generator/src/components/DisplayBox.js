import React from "react";

const DisplayBox = (props) => {
  // Using the "getter" that were passed into and now getting from my "App.js" Parent component (lifted state)
  const { coloredBoxArray } = props;

  // Display the values held in "State"
  // The "coloredBoxArray" will update when the form is submitted
  // When "state" is updated, it will cause this component to re-render the content

  return (
    <div>
      {coloredBoxArray.map((color, index) => (
        <div
          key={index}
          style={{
            display: "inline-block",
            margin: "10px",
            height: "50px",
            width: "50px",
            backgroundColor: color,
          }}
        ></div>
      ))}
    </div>
  );
};
// what would

export default DisplayBox;
