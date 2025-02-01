const Article = async ({
  params,
  searchParams,
}: {
  params: Promise<{ newsTitle: string }>;
  searchParams: Promise<{ lang?: string }>;
}) => {
  const newsTitle = (await params).newsTitle;
  const language = (await searchParams).lang;
  return (
    <>
      Article page - {newsTitle} - {language}
    </>
  );
};

export default Article;
