"use client";
import Content from "./ui/messages/content";
import Modal from "./ui/modal";
import { useModel } from "@/context/modelContext";
import Link from "next/link";
import { useEffect } from "react";
export default function Home() {
  const { show, setShow } = useModel();
  useEffect(() => {
    const isAnswered = localStorage.getItem("isAnswered");
    console.log(isAnswered);
    isAnswered ? setShow(false) : setShow(true);
  }, [show, setShow]);
  return (
    <main>
      {show ? (
        <>
          <Modal />
        </>
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
