import Link from "next/link";

import { getAvailableNewsYears } from "@/app/lib/news";

// import NewsList from "@/components/news-list";

export interface FilteredNewsPageProps {
  params: { filter: number };
}

export default function FilteredNewsPage({ params }: FilteredNewsPageProps) {
  const filter = params.filter;
  console.log(filter);

  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
  // const news = getNewsForYear(newsYear);

  // return (
  //   <>
  //     <NewsList news={news} />
  //   </>
  // );
}
