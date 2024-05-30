import { Suspense } from "react";

import FilteredHeader from "@/components/filtered-header";
import FilteredNews from "@/components/filtered-news";

export interface FilteredNewsPageProps {
  params: { filter: string };
}

export default async function FilteredNewsPage({
  params,
}: FilteredNewsPageProps) {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading filter ...</p>}>
        <FilteredHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<p>Loading news ...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
