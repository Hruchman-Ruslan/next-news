import NewsList from "@/components/news-list";

export interface NewsPageProps {}

export default async function NewsPage({}: NewsPageProps) {
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error("Failed to fetch news.");
  }

  const news = await response.json();

  return (
    <>
      <h1>News page</h1>
      <NewsList news={news} />
    </>
  );
}
