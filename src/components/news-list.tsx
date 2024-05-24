import Link from "next/link";

import { INewsItem } from "@/types/news.type";

export interface NewsListProps {
  news: INewsItem[];
}

export default function NewsList({ news }: NewsListProps) {
  return (
    <ul className="news-list">
      {news.map(({ id, slug, image, title }) => (
        <li key={id}>
          <Link href={`/news/${slug}`}>
            <img src={`/images/news/${image}`} alt={title} />
            <span>{title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
