import Link from "next/link";

import { DUMMY_NEWS } from "@/dummy-news";

export interface NewsPageProps {}

export default function NewsPage({}: NewsPageProps) {
  return (
    <>
      <h1>News page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map(({ id, slug, image, title }) => (
          <li key={id}>
            <Link href={`/news/${slug}`}>
              <img src={`/images/news/${image}`} alt={title} />
              <span>{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
