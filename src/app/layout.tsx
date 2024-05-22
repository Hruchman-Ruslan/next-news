import type { Metadata } from "next";

import MainHeader from "@/components/main-header";

import "./globals.css";

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
      <body>
        <div id="page">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
