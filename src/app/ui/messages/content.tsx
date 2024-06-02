"use client";

import react, { Suspense, useEffect, useState } from "react";
const Content = () => {
  const [audio, setAudio] = useState(true);
  const Audio = react.lazy(() => import("./audio"));
  useEffect(() => {
    const isAnswered = localStorage?.getItem("isAnswered");
    isAnswered ? setAudio(true) : setAudio(false);
  }, [audio, setAudio]);
  const pi = `Çölün kum taneleri arasında
  kayboluyorum serapların ortasında 
  gözlerimde, kulaklarımda kum yığınları
  incitmeden kokluyorum onları 
  ama dokunamıyorum kum tanelerine, 
  sessizce sîneme saklıyorum yeganemi,
  ondan habersiz, ondan gizli
  boyuyorum onu zihnimin binbir rengiyle
  bembeyaz oluyor bir anda, sebeplice 
  gömüyorum çâresizce kalbimin mezarlığına 
  zihnimin ulaşılamaz dediği bir kum paresinin 
  prangalı esâretini yaşıyor biricik gönlüm`;
  return (
    <div className="">
      <div className="flex justify-center items-center mt-4 text-white">
        Buraya aşağıdaki şarkıyı uygun gördüm.Bakalım beğenecek misin?
      </div>
      <Suspense fallback={<div>Yükleniyor...</div>}>
        <Audio />
      </Suspense>
      {audio ? <p className="mt-10">{pi}</p> : ""}
    </div>
  );
};

export default Content;
