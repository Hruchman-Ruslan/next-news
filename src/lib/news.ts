import sql from "better-sqlite3";

import { INewsItem } from "@/types/news.type";

const db = sql("data.db");

export async function getAllNews(): Promise<INewsItem[]> {
  const news = db.prepare("SELECT * FROM news").all() as INewsItem[];
  return news;
}

export async function getNewsItem(slug: string): Promise<INewsItem> {
  const newsItem = db
    .prepare("SELECT * FROM news WHERE slug = ?")
    .get(slug) as INewsItem;
  return newsItem;
}

export async function getLatestNews(): Promise<INewsItem[]> {
  const latestNews = db
    .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
    .all() as INewsItem[];
  return latestNews;
}

export async function getAvailableNewsYears(): Promise<string[]> {
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all()
    .map((year) => year.year);
  return years;
}

export async function getAvailableNewsMonths(year: string): Promise<string[]> {
  const months = db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year)
    .map((month) => month.month);
  return months;
}

export async function getNewsForYear(year: string): Promise<INewsItem[]> {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(year) as INewsItem[];
  return news;
}

export async function getNewsForYearAndMonth(
  year: string,
  month: string
): Promise<INewsItem[]> {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month) as INewsItem[];
  return news;
}
