import Link from "next/link";

export interface MainHeaderProps {}

export default function MainHeader({}: MainHeaderProps) {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
      </ul>
    </header>
  );
}
