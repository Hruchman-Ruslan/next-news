import { getLatestNews } from "@/app/lib/news";

import NewsList from "@/components/news-list";

export interface LatestNewsPageProps {}

export default function LatestNewsPage({}: LatestNewsPageProps) {
  const latestNews = getLatestNews();

  return (
    <>
      <h1>Latest News</h1>
      <NewsList news={latestNews} />
    </>
  );
}
