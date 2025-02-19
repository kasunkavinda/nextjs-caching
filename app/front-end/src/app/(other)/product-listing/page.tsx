import Link from "next/link";

const ProductPage = () => {
  return (
    <div>
      ProductPage
      <Link href="/product-listing/1">Product 1</Link>
      <Link href="/product-listing/2">Product 2</Link>
      <Link href="/product-listing/3">Product 3</Link>
    </div>
  );
};

export default ProductPage;
