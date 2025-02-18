export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  console.log("kkkk", id);

  return Response.json(id);
}
