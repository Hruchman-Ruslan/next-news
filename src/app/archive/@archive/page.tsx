import Link from "next/link";

import { getAvailableNewsYears } from "@/app/lib/news";

export interface ArchivePageProps {}

export default function ArchivePage({}: ArchivePageProps) {
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
}
