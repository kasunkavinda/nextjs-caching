import React from "react";

const FeaturePage = ({ params }: { params: Promise<{ slug: string }> }) => {
  console.log("array", params);
  return <div>page</div>;
};

export default FeaturePage;
