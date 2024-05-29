import Link from "next/link";

import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";
import { INewsItem } from "@/types/news.type";

export interface NewsDetailPageProps {
  params: { slug: string };
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsSlug
  ) as INewsItem;

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}