import React from "react";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const productId = await (await params).productId;
  return <div>page {productId}</div>;
};

export default ProductDetails;
