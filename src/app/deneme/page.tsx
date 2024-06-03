"use client";
import { useState } from "react";

const Page = () => {
  const [count, setCount] = useState([{ name: "Ali" }, { name: "Veli" }]);
  const handleClick = () => {};
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      {count.map((a, i) => (
        <div key={i}>{a.name}</div>
      ))}
      <button onClick={() => setCount((prev) => [...prev, { name: "İsmail" }])}>
        Ekle
      </button>
    </div>
  );
};

export default Page;
