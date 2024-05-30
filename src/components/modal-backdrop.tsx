"use client";

import { useRouter } from "next/navigation";

export interface ModalBackdropProps {}

export default function ModalBackdrop({}: ModalBackdropProps) {
  const router = useRouter();

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
    </>
  );
}
