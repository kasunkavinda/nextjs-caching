import { comments } from "../../../../data/data";

export async function GET() {
  return Response.json(comments);
}

export async function POST(request: Request) {
  const newComment = await request.json();
  console.log("newComment", newComment);

  comments.push(newComment);

  console.log("comments", comments);

  return new Response(JSON.stringify(comments), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
