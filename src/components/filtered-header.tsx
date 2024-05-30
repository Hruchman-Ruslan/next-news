import Link from "next/link";

import { getAvailableNewsMonths, getAvailableNewsYears } from "@/lib/news";

export interface FilteredHeaderProps {
  year: string;
  month?: string;
}

export default async function FilteredHeader({
  year,
  month,
}: FilteredHeaderProps) {
  const availableYears = await getAvailableNewsYears();
  let links = availableYears;

  const availableMonths = year ? await getAvailableNewsMonths(year) : [];

  if (
    (year && !availableYears.includes(year)) ||
    (month && !availableMonths.includes(month))
  ) {
    throw new Error("Invalid filter.");
  }

  if (year && !month) {
    links = await getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
