import React from "react";
import { useParams } from "react-router";

const NumberParam = (props) => {
  // Is this an example of destructuring or using curly braces to represent javascript expressions?
  const { num } = useParams();
  return (
    <div>
      <h1>{num}!</h1>
    </div>
  );
};

export default NumberParam;
