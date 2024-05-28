import { ReactNode } from "react";

export interface NewsDetailLayoutProps {
  modal: string;
  children: ReactNode;
}

export default function NewsDetailLayout({
  children,
  modal,
}: NewsDetailLayoutProps) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
