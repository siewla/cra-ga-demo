import React from "react";
import { useState } from "react";

const ComponentA = ({ appState }) => {
  // const { appState } = props
  const [aState, setAState] = useState(10);

  const add = () => {
    setAState(aState + 1);
  };

  console.log("i in component A");
  return (
    <div>
      ComponentA
      <div>
        <h2>Component A State: {aState}</h2>
        <h3>App State: {appState}</h3>
      </div>
      <button onClick={add}>Add</button>
    </div>
  );
};

export default ComponentA;
