import React from "react";
import { useParams } from "react-router";

const HelloParam = (props) => {
  const hello = useParams();
  return (
    <div>
      <h1>{hello}!</h1>
    </div>
  );
};

export default HelloParam;
