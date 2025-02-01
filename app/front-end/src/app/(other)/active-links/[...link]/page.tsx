const ActiveLink = async ({
  params,
}: {
  params: Promise<{ link: string }>;
}) => {
  const linkname = (await params).link;
  return <div>Active link demo page - {linkname}</div>;
};

export default ActiveLink;
