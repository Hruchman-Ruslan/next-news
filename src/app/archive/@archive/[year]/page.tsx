import { getNewsForYear } from "@/app/lib/news";

import NewsList from "@/components/news-list";

export interface FilteredNewsPageProps {
  params: { year: number };
}

export default function FilteredNewsPage({ params }: FilteredNewsPageProps) {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);

  return (
    <>
      <NewsList news={news} />
    </>
  );
}
