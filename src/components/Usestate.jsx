import { useState } from "react";

export default function Usestate() {
  function countInit() {
    console.log("run0");
    return 4;
  }

  //whenever using usestate, use callback functions to avoid unneccesary re-renders

  //if we have an object as a state and we have to change the values of the keys,
  //then we need separate useState for each key's value we need to change
  //this makes it easier to modify the state and avoid over writing of the state
  //like for e.g. separate useState for changing color, name,age
  const [count, setCount] = useState(() => countInit());

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}
