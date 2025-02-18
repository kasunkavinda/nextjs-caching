// export const dynamic = "force-static";

import { NextRequest } from "next/server";
// import { comments } from "../../../../data/data";
import { cookies } from "next/headers";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  //   const searchParams = request.nextUrl.searchParams;

  //   const queryParam = searchParams.get("text");

  const cookieStore = await cookies();
  // cookieStore.set("name", "kasun");

  const theme = cookieStore.get("theme");
  console.log("kasun theme", theme);
  //return Response.json(comments);
  return Response.json({ time: new Date().toLocaleTimeString() });
}

// export async function POST(request: Request) {
//   const newComment = await request.json();

//   console.log("newComment", newComment);

//   comments.push(newComment);

//   console.log("comments", comments);

//   return new Response(JSON.stringify(comments), {
//     headers: { "Content-Type": "application/json" },
//     status: 201,
//   });
// }
