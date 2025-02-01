import InputComponent from "@/app/(other)/components/input-component/input-component";
import Link from "next/link";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        <InputComponent />
        <Link href="template-experiment/1">template item</Link>
      </body>
    </html>
  );
}
