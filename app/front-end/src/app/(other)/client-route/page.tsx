"use client";
import React from "react";
import { serverFunction } from "../../../../util/util";

const ClientRoutePage = () => {
  const res = serverFunction();
  return <div>ClientRoutePage {res}</div>;
};

export default ClientRoutePage;
