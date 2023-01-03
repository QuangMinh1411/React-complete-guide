import React from "react";

const DemoOutput = (props) => {
  console.log("Demo running");
  return <p>{props.show ? "This is new!" : ""}</p>;
};

//Prevent the child component to execute
export default React.memo(DemoOutput);
