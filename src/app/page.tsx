"use client";
import Content from "./ui/messages/content";
import Header from "./ui/header";
import Modal from "./ui/modal";
import { useModel } from "@/context/modelContext";
export default function Home() {
  const { show } = useModel();
  return (
    <main className="bg-black text-white h-screen">
      <Header />
      {show ? "" : <Content />}
      {show ? <Modal /> : ""}
      <div className="text-center mt-10">
        {/* <Link className="bg-slate-500  rounded-md p-3" href={"ilan"}>
          Dursun
        </Link> */}
      </div>
    </main>
  );
}
