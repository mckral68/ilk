import { useEffect, useState } from "react";

const CountDown = () => {
  const [kalan, setKalan] = useState<string>();
  useEffect(() => countFunc());
  const countFunc = () => {
    var countDownDate = new Date("2024-06-09").getTime();
    var x = setInterval(() => {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      if (distance < 0) {
        clearInterval(x);
        deva = `Süre tükendi`;
        setKalan(deva);
      } else {
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var deva = `${days} gün ${hours} saat ${minutes} dakika ${seconds} sn`;
        setKalan(deva);
      }
    }, 1000);
  };
  return <h3>Bu içerik {kalan} sonra otamatik olarak sonlanacaktır.</h3>;
};

export default CountDown;
