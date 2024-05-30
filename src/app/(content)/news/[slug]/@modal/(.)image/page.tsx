import { notFound } from "next/navigation";

import ModalBackdrop from "@/components/modal-backdrop";

import { getNewsItem } from "@/lib/news";

export interface InterceptedImagePageProps {
  params: { slug: string };
}

export default async function InterceptedImagePage({
  params,
}: InterceptedImagePageProps) {
  const newsSlug = params.slug;
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
