import React from "react";

const DocsPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  console.log("array", params);
  return <div>page</div>;
};

export default DocsPage;
