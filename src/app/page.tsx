import { cookies } from "next/headers";

export default function Home() {
  cookies();
  return (
    <div>
      <p>{Date.now()}</p>
    </div>
  );
}
