import React, { useRef } from "react";

const Audio = ({ audio }: { audio: boolean }) => {
  const audi = useRef<HTMLAudioElement>(null);
  return (
    <>
      <audio
        ref={audi}
        src="voice/ceceli.mp3"
        controls
        id="player"
        className="mt-5 mx-auto"
      ></audio>
    </>
  );
};

export default Audio;
