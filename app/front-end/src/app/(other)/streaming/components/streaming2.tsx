import React from "react";

const Streaming2 = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 4000);
  });
  return <div>Streaming2 </div>;
};

export default Streaming2;
