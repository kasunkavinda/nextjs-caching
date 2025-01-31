export default function DocLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header> this is doc menu</header>
      {children} <footer>this is doc footer</footer>
    </>
  );
}
