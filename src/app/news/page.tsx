import Link from "next/link";

export interface NewsPageProps {}

export default function NewsPage({}: NewsPageProps) {
  return (
    <>
      <h1>News page</h1>
      <ul>
        <li>
          <Link href="/news/first-news">First News Item</Link>
        </li>
        <li>
          <Link href="/news/second-news">Second News Item</Link>
        </li>
        <li>
          <Link href="/news/third-news">Third News Item</Link>
        </li>
      </ul>
    </>
  );
}
