"use client";
import Content from "./ui/messages/content";
import Header from "./ui/header";
import Modal from "./ui/modal";
import { useModel } from "@/context/modelContext";
import Link from "next/link";
import { useEffect } from "react";
import { getCookie } from "./lib/actions";
export default function Home() {
  const { show, setShow } = useModel();
  useEffect(() => {
    getCookie("cevap").then((a) => {
      a?.value === "A" ? setShow(false) : setShow(true);
    });
  }, [show, setShow]);
  return (
    <main className="bg-black text-white h-screen">
      <Header />
      {show ? "" : <Content />}
      {show ? <Modal /> : ""}
      {show ? (
        ""
      ) : (
        <div className="flex justify-center pt-20">
          <Link
            className="p-2 w-1/4 border text-center rounded-lg bg-black"
            href={"dashboard/message/create"}
          >
            İlerle
          </Link>
        </div>
      )}
      <div className="text-center mt-10">
        {/* <Link className="bg-slate-500  rounded-md p-3" href={"ilan"}>
          Dursun
        </Link> */}
      </div>
    </main>
  );
}
