"use client";

import { useState } from "react";

const InputComponent = () => {
  const [name, setName] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputOnChange = (e: any) => {
    setName(e.target.value);
  };
  return (
    <>
      <input onChange={inputOnChange} value={name} />
    </>
  );
};

export default InputComponent;
