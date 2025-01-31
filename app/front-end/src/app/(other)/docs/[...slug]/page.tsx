import React from "react";

import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const id = (await params).slug;

  return {
    title: `Product ${id}`,
  };
};

const DocsPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  console.log("array", params);
  return <div>page</div>;
};

export default DocsPage;
