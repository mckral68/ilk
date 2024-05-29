"use client";

import { useRef, useState } from "react";

const Content = () => {
  const audi = useRef<HTMLAudioElement>(null);
  const [audio, setAudio] = useState(false);
  const pi = `İnsanlar duygu ve akıl arasında tutturdukları dengeyle ayakta kalır ve
  yaşam denen yolda ilerler. Bunlardan birinin, kontrolü tamamen ele
  geçirmesi felaketi getirebilir. Bu gerçek şöyle bir benzetmeyle tarif
  edilebilir: Bir at arabasındayım ve bu araba güçlü iki at tarafından
  çekiliyor. Atlardan biri aklın biri duygunun temsilcisi. Atlardan biri beni
  sürekli yolun bir tarafına, öbürü diğer tarafına çekmeye çalışıyor.
  Ben güvenli bir şekilde ilerleyebilmek için dizginleri sıkıp
  ikisini de kontrol altında tutmaya çalışıyorum.Velhasıl kalp denen hassas organın içindeki hislere daha fazla duyarsız kalamadım ve bu satırları yazıp yazmamak, yanına gelip konuşmak arasında kaldım`;
  return (
    <div className="">
      <div className="flex justify-center items-center mt-4 text-white">
        {audio ? "" : "Şarkıyı açarak ilerlemeye devam edebilirsin"}
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
