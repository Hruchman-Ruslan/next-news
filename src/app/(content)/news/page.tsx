import { getAllNews } from "@/lib/news";

import NewsList from "@/components/news-list";

export interface NewsPageProps {}

export default async function NewsPage({}: NewsPageProps) {
  const news = await getAllNews();

  return (
    <>
      <h1>News page</h1>
      <NewsList news={news} />
    </>
  );
}
