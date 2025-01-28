// import { ProductQuantity } from "./product-quantity/product-quantity";

export async function ProductQuantity() {
  const res = await fetch("https://api.vercel.app/products/1");
  const data = await res.json();

  return <h1>{data.stock}</h1>;
}
export default function Page() {
  return (
    <div>
      <ProductQuantity />
    </div>
  );
}
