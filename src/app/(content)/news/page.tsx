import { DUMMY_NEWS } from "@/dummy-news";

import NewsList from "@/components/news-list";

export interface NewsPageProps {}

export default function NewsPage({}: NewsPageProps) {
  return (
    <>
      <h1>News page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
