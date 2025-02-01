import Link from "next/link";

export default function Home() {
  const slug = "1";
  return (
    <div>
      <p>{Date.now()}</p>
      <Link href="/counter"> Counter page</Link>
      <Link href={`/docs/${slug}`}> Doc page</Link>
      <Link href={`/docs/${slug}`} replace>
        {" "}
        Doc page
      </Link>
    </div>
  );
}
