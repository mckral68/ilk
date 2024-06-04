import React from "react";

const Audio = () => {
  return (
    <div className="mt-10">
      <div className="text-center">Şarkısız olmazdı :)</div>
      <audio
        src="voice/ceceli.mp3"
        controls
        id="player"
        className="mt-5 mx-auto"
      ></audio>
    </div>
  );
};

export default Audio;
