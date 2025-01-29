import React from "react";

const ReviewPage = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const reviewId = (await params).reviewId;
  const productId = (await params).productId;
  return (
    <div>
      ReviewPage{reviewId} {productId}
    </div>
  );
};

export default ReviewPage;
