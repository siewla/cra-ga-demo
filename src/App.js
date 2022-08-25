import "./App.css";
import { useState } from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import Cocktail from "./components/Cocktail";

const App = () => {
  const [appState, setAppState] = useState(1);
  console.log("i in app component");

  const add = () => {
    setAppState(appState + 1);
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <div>
        <h2>App State: {appState}</h2>
      </div>
      <button onClick={add}>Add</button>
      <ComponentA appState={appState} />
      <ComponentB setAppState={setAppState} add={add} /> */}
      {/* <ComponentC /> */}
      <Cocktail />
    </div>
  );
};

export default App;
