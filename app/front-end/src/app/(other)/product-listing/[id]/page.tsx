export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  console.log("checking component type");
  return (
    <div>
      ProductDetailsPage - {id} - {new Date().toLocaleTimeString()}
    </div>
  );
};

export default ProductDetailsPage;
