"use client";

import { useRef, useState } from "react";

const Content = () => {
  const audi = useRef<HTMLAudioElement>(null);
  const [audio, setAudio] = useState(false);
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
        {audio
          ? ""
          : "Bravo doğru cevap, ödül olarak aşağıdaki şarkıyı uygun gördük.Bakalım beğenecek misin?"}
      </div>
      <audio
        ref={audi}
        onPlaying={(a) => setAudio(true)}
        src="voice/ceceli.mp3"
        controls
        id="player"
        className="mx-auto"
      ></audio>
      {audio ? <p className="mt-10">{pi}</p> : ""}
    </div>
  );
};

export default Content;
