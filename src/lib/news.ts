import { DUMMY_NEWS } from "@/dummy-news";
import { INewsItem } from "@/types/news.type";

export function getAllNews(): INewsItem[] {
  return DUMMY_NEWS;
}

export function getLatestNews(): INewsItem[] {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears(): number[] {
  return DUMMY_NEWS.reduce((years: number[], news: INewsItem) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year: number): number[] {
  return DUMMY_NEWS.reduce((months: number[], news: INewsItem) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === +year) {
      const month = new Date(news.date).getMonth();
      if (!months.includes(month)) {
        months.push(month + 1);
      }
    }
    return months;
  }, []).sort((a, b) => b - a);
}

export function getNewsForYear(year: number): INewsItem[] {
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
}

export function getNewsForYearAndMonth(
  year: number,
  month: number
): INewsItem[] {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}
