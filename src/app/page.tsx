"use client";
import Content from "./ui/messages/content";
import { useModel } from "@/context/modelContext";
import Link from "next/link";
import React, { Suspense } from "react";
export default function Home() {
  const Modal = React.lazy(() => import("@/app/ui/modal"));
  const { show, setShow } = useModel();
  return (
    <main>
      {show ? (
        <Suspense fallback={<div>Yükleniyor...</div>}>
          <Modal />
        </Suspense>
      ) : (
        <>
          <Content />
          <div className="flex justify-center pt-20">
            <Link
              className="p-2 w-1/4 border text-center rounded-lg bg-black"
              href={"message/create"}
            >
              İlerle
            </Link>
          </div>
        </>
      )}
      <div className="text-center mt-10">
        {/* <Link className="bg-slate-500  rounded-md p-3" href={"ilan"}>
          Dursun
        </Link> */}
      </div>
    </main>
  );
}
