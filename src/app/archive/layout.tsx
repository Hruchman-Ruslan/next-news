import React from "react";

export interface ArchiveLayoutProps {
  archive: string;
  latest: string;
}

export default function ArchiveLayout({ archive, latest }: ArchiveLayoutProps) {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
