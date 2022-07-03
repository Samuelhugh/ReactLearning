import React from "react";
import { useParams } from "react-router";

const BlueRedParam = (props) => {
  const { hello, color, bgColor } = useParams();
  return (
    <div>
      {
        // This method returns a "Boolean" based on whether the Argument is a number
        // isNaN(hello)
        <p
          style={
            color
              ? {
                  color: color,
                  backgroundColor: bgColor,
                }
              : null
          }
        >
          {hello}
        </p>
      }
    </div>
  );
};

export default BlueRedParam;
