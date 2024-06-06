"use client";
import { useModel } from "@/context/modelContext";
import Link from "next/link";
import React, { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Content from "./ui/messages/content";
export default function Home() {
  const Modal = React.lazy(() => import("@/app/ui/modal"));
  const { show } = useModel();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(0);
  useEffect(() => {
    setQuery(Number(searchParams.get("q")));
  }, [searchParams]);
  const createQueryString = useCallback(
    (value: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("q", value.toString());
      return params.toString();
    },
    [searchParams]
  );
  return (
    <main className="grid min-h-max">
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
            <Content q={query | 0} />
            <div className="flex mt-10 justify-around">
              <div className="self-center" hidden={query == 0}>
                <Link
                  href={"?" + createQueryString(query >= 1 ? query - 1 : 0)}
                  className="py-2 px-6 w-1/3 bg-white order text-center rounded-lg"
                >
                  Geri
                </Link>
              </div>
              <div className="self-center">
                <Link
                  href={"?" + createQueryString(query + 1)}
                  className="py-2 px-6 w-1/3 bg-white rounded-lg"
                >
                  İleri
                </Link>
              </div>
            </div>
          </>
        ) : null}
      </>
    </main>
  );
}
