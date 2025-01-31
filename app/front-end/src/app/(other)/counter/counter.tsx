"use client";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const submitCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <p>{counter}</p>
      <button onClick={submitCounter}>Hit</button>
    </div>
  );
};

export default Counter;
