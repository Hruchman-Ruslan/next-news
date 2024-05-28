import type { Metadata } from "next";

import "../global.css";

export const metadata: Metadata = {
  title: "Next-News",
  description: "Learn how to route to different pages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
