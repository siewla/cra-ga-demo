import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const ComponentC = () => {
  const [cState, setCState] = useState(0);
  const [elC, setElC] = useState(10);
  const [user, setUser] = useState({});

  const add = () => {
    setCState(cState + 1);
  };

  const addC = () => {
    setElC(elC + 1);
  };

  /*
it only run Once
useEffect(() => {
  // do sth
}, []);
*/

  /*
it will every single rerender
useEffect(() => {
  // do sth
});
*/

  /*
it will when x, y, or z change
useEffect(() => {
  // do sth
}, [x, y, z]);
*/

  const fetchData = async () => {
    const data = await axios.get("https://randomuser.me/api/");
    return data.data.results[0];
  };

  useEffect(() => {
    console.log("i in useEffect");
    setCState(100);
  }, [elC]);

  useEffect(() => {
    //iife
    (async () => {
      const data = await fetchData();
      setUser(data);
      //   setUsers(users);
    })();
  }, [elC]);

  console.log("i rerendered");

  return (
    <div>
      ComponentC
      <h1>State : {cState}</h1>
      <button onClick={add}>Add</button>
      <h1>Element C : {elC}</h1>
      <button onClick={addC}>Add C</button>
      <div>
        <h1>User</h1>
        <h2>Email : {user.email}</h2>
      </div>
    </div>
  );
};

export default ComponentC;
