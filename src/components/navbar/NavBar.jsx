import React from "react";

function NavBar() {
  return (
    <div className="bg-white">
      <div className="flex justify-between h-20 max-w-[1800px] mx-auto items-center lg:px-16 md:px-7 px-4">
        <div className="flex">
          <div>
            <img
              src="../../../images/8104ce3d-41e8-4ff8-aeea-6d9579fb19c7.png"
              alt=""
            />
          </div>
          <div className="relative w-fit h-fit ml-8">
            <input
              type="text"
              className="bg-[#F1F1F1] min-[900px]:w-96 h-9 py-3 rounded px-2 box-border text-[12px] hidden min-[640px]:block min-[640px]:w-56"
              placeholder="Search Product"
            />
            <img
              src="../../../images/search.svg"
              alt=""
              className="absolute right-2 left-auto top-[30%] bottom-[60%]"
            />
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <button className="rounded-lg bg-[#F1F1F1] w-14 h-9 font-semibold">
              EN
            </button>
          </div>
          <div className="flex ml-4 bg-[#F1F1F1] items-center rounded-lg">
            <div className="w-28 h-10 flex flex-col justify-center">
              <p className="text-[10px] font-light text-[#9A9A9A]">
                12 product
              </p>
              <p className="text-[13px] font-semibold">QR 123.00</p>
            </div>
            <div className="items-center w-8">
              <div>
                <img src="../../../images/bxs-cart-alt.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-4 pb-4 pt-2 sm:py-0 md:px-6">
        <div className="relative w-full h-fit  block  sm:hidden">
          <input
            type="text"
            className="bg-[#F1F1F1] w-full h-9 py-3 rounded px-2 box-border text-[12px]"
            placeholder="Search Product"
          />
          <img
            src="../../../images/search.svg"
            alt=""
            className="absolute right-2 left-auto top-[30%] bottom-[60%]"
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
