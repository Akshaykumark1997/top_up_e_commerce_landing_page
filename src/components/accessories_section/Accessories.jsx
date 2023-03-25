import React from "react";

function Accessories() {
  return (
    <div className="flex justify-between max-w-[1600px] lg:w-[100%] mx-auto bg-white pt-5 pb-5 mt-5">
      <div className="md:flex hidden w-20 justify-center items-center md:mx-5 sm:mx-0">
        <div className="items-center hidden md:block">
          <img src="/images/arrow-ios-downward-outline (1).svg" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 md:grid-cols-4 lg:grid-cols-5 mx-10">
        <div>
          <div>
            <img src="/images/shoe4.jfif" className="aspect-[1/1]" alt="" />
          </div>
          <div className="mt-2">
            <h2 className="text-start">Footwares</h2>
          </div>
        </div>
        <div>
          <div>
            <img src="/images/tshirt.png" className="aspect-[1/1]" alt="" />
          </div>
          <div className="mt-2">
            <h2 className="text-start">Clothings</h2>
          </div>
        </div>
        <div>
          <div>
            <img src="/images/watch.jfif" className="aspect-[1/1]" alt="" />
          </div>
          <div className="mt-2">
            <h2 className="text-start">Watches</h2>
          </div>
        </div>
        <div className="sm:hidden md:block">
          <div>
            <img src="/images/bag.jfif" className="aspect-[1/1]" alt="" />
          </div>
          <div className="mt-2">
            <h2 className="text-start">Bags</h2>
          </div>
        </div>
        <div className="hidden lg:block">
          <div>
            <img src="/images/ring.jfif" className="aspect-[1/1]" alt="" />
          </div>
          <div className="mt-2">
            <h2 className="text-start">Accessories</h2>
          </div>
        </div>
      </div>
      <div className="md:flex hidden w-20 justify-center items-center md:mx-5 sm:mx-0">
        <div className="items-center hidden md:block">
          <img src="/images/arrow-ios-downward-outline.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Accessories;
