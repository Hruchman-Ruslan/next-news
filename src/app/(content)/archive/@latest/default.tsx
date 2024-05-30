import { getLatestNews } from "@/lib/news";

import NewsList from "@/components/news-list";

export interface LatestNewsPageProps {}

export default async function LatestNewsPage({}: LatestNewsPageProps) {
  const latestNews = await getLatestNews();

  return (
    <>
      <h1>Latest News</h1>
      <NewsList news={latestNews} />
    </>
  );
}
