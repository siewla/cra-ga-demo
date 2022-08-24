import React from "react";

const ComponentB = (props) => {
  console.log("props in componentB", props);
  console.log("i in component B");
  return (
    <div>
      <h1>Component B</h1>
      <button onClick={() => props.setAppState(100)}>To amend app state</button>
      <button onClick={props.add}>Add</button>
    </div>
  );
};

export default ComponentB;
