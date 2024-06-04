"use client";
import { useModel } from "@/context/modelContext";
import Link from "next/link";
import React, { Suspense } from "react";
import Siir from "./ui/messages/siir";
export default function Home() {
  const Modal = React.lazy(() => import("@/app/ui/modal"));
  const { show } = useModel();
  return (
    <main>
      <>
        {show === true ? (
          // Check directly for true
          <>
            <Suspense
              fallback={<div className="text-center">Yükleniyor...</div>}
            >
              <Modal />
            </Suspense>
          </>
        ) : show === false ? (
          // Check directly for false
          <>
            <Siir />
            <div className="flex justify-center pt-20">
              <Link
                className="p-2 w-1/4 bg-white order text-center rounded-lg"
                href={"message/create"}
              >
                İlerle
              </Link>
            </div>
          </>
        ) : null}
      </>
    </main>
  );
}
