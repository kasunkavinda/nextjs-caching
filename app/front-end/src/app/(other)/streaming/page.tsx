import React, { Suspense } from "react";
import Streaming1 from "./components/streaming1";
import Streaming2 from "./components/streaming2";

const Streaming = async () => {
  return (
    <div>
      Streaming outer
      <Suspense fallback={<p>Loading...</p>}>
        <Streaming1 />
        <Streaming2 />
      </Suspense>
    </div>
  );
};

export default Streaming;
