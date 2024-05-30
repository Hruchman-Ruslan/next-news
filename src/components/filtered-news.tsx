import { getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";

import NewsList from "./news-list";

export interface FilteredNewsProps {
  year: string;
  month?: string;
}

export default async function FilteredNews({ year, month }: FilteredNewsProps) {
  let news;

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  return newsContent;
}
