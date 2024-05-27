import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";
import { INewsItem } from "@/types/news.type";

export interface InterceptedImagePageProps {
  params: { slug: string };
}

export default function InterceptedImagePage({
  params,
}: InterceptedImagePageProps) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsSlug
  ) as INewsItem;

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
