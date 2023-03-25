import React from "react";

const arriavals = [
  {
    id: "ID334490",
    name: "Nike Sports shoe",
    image: "/images/product1.webp",
    priceOld: "QR 54.67",
    priceNew: "QR 48.00",
    discount: "100%",
  },
  {
    id: "ID334490",
    name: "Nike Sports shoe",
    image: "/images/product2.webp",
    priceOld: "QR 54.67",
    priceNew: "QR 48.00",
    discount: "100%",
  },
  {
    id: "ID334490",
    name: "Nike Sports shoe",
    image: "/images/product3.webp",
    priceOld: "QR 54.67",
    priceNew: "QR 48.00",
    discount: "100%",
  },
  {
    id: "ID334490",
    name: "Nike Sports shoe",
    image: "/images/product4.webp",
    priceOld: "QR 54.67",
    priceNew: "QR 48.00",
    discount: "100%",
  },
  {
    id: "ID334490",
    name: "Nike Sports shoe",
    image: "/images/product5.webp",
    priceOld: "QR 54.67",
    priceNew: "QR 48.00",
    discount: "100%",
  },
  {
    id: "ID334490",
    name: "Nike Sports shoe",
    image: "/images/product4.webp",
    priceOld: "QR 54.67",
    priceNew: "QR 48.00",
    discount: "100%",
  },
];

function NewArraival() {
  return (
    <div className="flex flex-col items-center ">
      <div className="bg-white !z-50 ">
        <div className="flex justify-between  h-16 items-center px-8">
          <div>
            <h1 className="font-bold text-xl">New Arrivals</h1>
          </div>
          <div>
            <button className="text-red-500">See All &gt;</button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:hidden md:grid lg:hidden  gap-5 px-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mb-5">
          {arriavals.slice(0, 4).map((ele) => (
            <div>
              <div>
                <img src={ele.image} alt={ele.id} className="aspect-[1/1]" />
              </div>
              <div>
                <p className="text-left text-[#9A9A9A]">{ele.id}</p>
              </div>
              <div>
                <h1 className="text-left">{ele.name}</h1>
              </div>
              <div className="flex">
                <p className="line-through text-left text-[#989898] min-[350px]:text-[10px] sm:text-[12px]">
                  {ele.priceOld}
                </p>
                <p className="text-[#AC2D11] font-bold min-[350px]:text-[10px] sm:text-[12px]">{ele.priceNew}</p>
                <p className="text-[#428D00]  min-[350px]:text-[10px] sm:text-[12px]">({ele.discount})</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid-cols-2 hidden sm:grid md:hidden  gap-5 px-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mb-5">
          {arriavals.map((ele) => (
            <div>
              <div>
                <img src={ele.image} alt={ele.id} className="aspect-[1/1]" />
              </div>
              <div>
                <p className="text-left text-[#9A9A9A]">{ele.id}</p>
              </div>
              <div>
                <h1 className="text-left">{ele.name}</h1>
              </div>
              <div className="flex">
                <p className="line-through text-left text-[#989898] min-[350px]:text-[10px] sm:text-[12px]">
                  {ele.priceOld}
                </p>
                <p className="text-[#AC2D11] font-bold min-[350px]:text-[10px] sm:text-[12px]">{ele.priceNew}</p>
                <p className="text-[#428D00] min-[350px]:text-[10px] sm:text-[12px]">({ele.discount})</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid-cols-2 hidden lg:grid  gap-5 px-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mb-5">
          {arriavals.slice(0, 5).map((ele) => (
            <div>
              <div>
                <img src={ele.image} alt={ele.id} className="aspect-[1/1]" />
              </div>
              <div>
                <p className="text-left text-[#9A9A9A]">{ele.id}</p>
              </div>
              <div>
                <h3 className="text-left">{ele.name}</h3>
              </div>
              <div className="flex">
                <p className="line-through text-left text-[#989898] min-[350px]:text-[10px] sm:text-[12px]">
                  {ele.priceOld}
                </p>
                <p className="text-[#AC2D11] font-bold min-[350px]:text-[10px] sm:text-[12px]">{ele.priceNew}</p> 
                <p className="text-[#428D00] min-[350px]:text-[10px] sm:text-[12px]">({ele.discount})</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewArraival;
