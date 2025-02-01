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

const DocsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  console.log("array", params);

  const paramValue = (await params).slug;
  return <div>page - {paramValue}</div>;
};

export default DocsPage;
