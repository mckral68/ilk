"use client";
import Content from "./ui/messages/content";
import { useModel } from "@/context/modelContext";
import Link from "next/link";
import React, { useEffect, Suspense } from "react";
export default function Home() {
  const { show, setShow } = useModel();
  const Modal = React.lazy(() => import("@/app/ui/modal"));
  useEffect(() => {
    const isAnswered = localStorage.getItem("isAnswered");
    isAnswered ? setShow(false) : setShow(true);
  }, [show, setShow]);
  return (
    <main>
      {show ? (
        <Suspense fallback={<div>Yükleniyor...</div>}>
          <Modal />
        </Suspense>
      ) : (
        <>
          <Suspense fallback={<div>Yükleniyor...</div>}>
            <Content />
          </Suspense>
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
