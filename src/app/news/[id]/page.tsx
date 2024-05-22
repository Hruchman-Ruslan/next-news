export interface NewsDetailPageProps {
  params: { id: string };
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const newsId = params.id;

  return (
    <>
      <h1>News Detail Page</h1>
      <p>News ID: {newsId}</p>
    </>
  );
}
