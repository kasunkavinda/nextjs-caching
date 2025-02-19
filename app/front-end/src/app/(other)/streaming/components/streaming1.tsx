import React from "react";

const Streaming1 = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 4000);
  });
  return <div>Streaming1 </div>;
};

export default Streaming1;
