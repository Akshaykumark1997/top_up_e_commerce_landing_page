/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

function Hero() {
  const [currentItem, setCurrentItem] = useState(0);
  const carouselItems = [
    {
      id: 0,
      imageSrc: "../../../images/Group 1172@2x.png",
    },
    {
      id: 1,
      imageSrc: "../../../images/Group 1172@2x.png",
    },
    {
      id: 2,
      imageSrc: "../../../images/Group 1172@2x.png",
    },
    {
      id: 3,
      imageSrc: "../../../images/Group 1172@2x.png",
    },
    {
      id: 4,
      imageSrc: "../../../images/Group 1172@2x.png",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleIndicatorClick = (id) => {
    setCurrentItem(id);
  };

  return (
    <div className="z-0">

    <div className="max-w-[1700px] lg:w-[90%] mx-auto -z-0 flex justify-center flex-col relative">
      <div className="">
        <img src={carouselItems[currentItem].imageSrc} alt="" />
      </div>
      <div className="absolute flex bottom-3 lg:bottom-20 left-[50%] translate-x-[-50%]">
        {carouselItems.map((item) => (
          <button
            key={item.id}
            className={`w-6 h-0.5 bg-white mx-1 ${
                item.id === currentItem ? "opacity-100" : "opacity-30"
            }`}
            onClick={() => handleIndicatorClick(item.id)}
            ></button>
            ))}
      </div>
            </div>
    </div>
  );
}

export default Hero;