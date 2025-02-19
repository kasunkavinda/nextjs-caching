import React from "react";
import { serverFunction } from "../../../../util/util";

const ServerRoutePage = () => {
  const res = serverFunction();
  return <div>ServerRoutePage {res}</div>;
};

export default ServerRoutePage;
