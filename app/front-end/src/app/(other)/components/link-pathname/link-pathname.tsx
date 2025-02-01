"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkPathname = () => {
  const pathname = usePathname();
  console.log("pathname", pathname);
  return (
    <>
      <div>
        <Link
          href={`/docs/1`}
          style={{
            color: pathname === "/docs/1" ? "red" : "blue", // Correct inline style
          }}
        >
          Doc 1
        </Link>
        <Link
          href={`/docs/2`}
          style={{
            color: pathname === "/docs/2" ? "red" : "blue", // Correct inline style
          }}
        >
          Doc 2
        </Link>
        <Link
          href={`/docs/3`}
          style={{
            color: pathname === "/docs/3" ? "red" : "blue", // Correct inline style
          }}
        >
          Doc 3
        </Link>
      </div>
    </>
  );
};

export default LinkPathname;
