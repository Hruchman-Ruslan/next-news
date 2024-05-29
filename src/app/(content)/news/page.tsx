"use client";

import { useEffect, useState } from "react";

import { INewsItem } from "@/types/news.type";

import NewsList from "@/components/news-list";

export interface NewsPageProps {}

export default function NewsPage({}: NewsPageProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [news, setNews] = useState<INewsItem[]>([]);

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/news");

      if (!response.ok) {
        setError("Failed to fetch news");
        setIsLoading(false);
      }

      const news = await response.json();
      setIsLoading(false);
      setNews(news);
    }

    fetchNews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let newsContent;

  if (news) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <h1>News page</h1>
      {newsContent}
    </>
  );
}
