"use client";
import { redirect } from "next/navigation";
import Audio from "./audio";
import Mesaj from "./mesaj";
import Siir from "./siir";
const Content = (params: { q: number }) => {
  switch (params.q) {
    case 0:
      return <Siir />;
    case 1:
      return <Mesaj />;
    case 2:
      return <Audio />;
    case 3:
      redirect("message/create");
    default:
      redirect("/");
  }
};

export default Content;
