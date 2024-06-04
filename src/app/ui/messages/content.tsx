"use client";

import react, { Suspense } from "react";
import { AudioSkeleton } from "../skeletons";
const Content = () => {
  const Audio = react.lazy(() => import("./audio"));

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
      <div className="flex justify-center items-center mt-4">
        Buraya aşağıdaki şarkıyı uygun gördüm.Bakalım beğenecek misin?
      </div>
      <Suspense fallback={<AudioSkeleton />}>
        <Audio />
      </Suspense>
    </div>
  );
};

export default Content;
