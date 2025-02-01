"use client";
import { use } from "react";

const ClientArticleTitle = ({
  params,
  searchParams,
}: {
  params: Promise<{ clientArticleTitle: string }>;
  searchParams: Promise<{ lang?: string }>;
}) => {
  const clientArticleTitle = use(params).clientArticleTitle;
  const clientArticleTitleLanguage = use(searchParams).lang;
  return (
    <>
      Client Article Title: {clientArticleTitle} - {clientArticleTitleLanguage}
    </>
  );
};

export default ClientArticleTitle;
