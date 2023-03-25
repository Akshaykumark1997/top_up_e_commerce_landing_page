import React from "react";
import "./Category.css";

function Category() {
  return (
    <div>
      <div className="flex justify-between max-w-[1600px] lg:w-[85%] mx-auto mt-8 min-[300px]:mx-2 sm:mx-6 lg:mx-auto">
        <div>
          <h1 className="font-bold sm:text-xl min-[350px]:text-lg min-[250px]:text-[13px] min-[250px]:mx-2 ">
            Shop By Category
          </h1>
        </div>
        <div>
          <p className="text-red-500 min-[250px]:text-[13px] min-[250px]:mx-2">See All Products &gt;</p>
        </div>
      </div>
      <div className="flex max-w-[1600px] lg:w-[85%] mx-auto mt-8 min-[300px]:mx-2 sm:mx-6 lg:mx-auto overflow-scroll" id="overFlow">
        <div>
          <button className="w-36 h-12 rounded-full bg-white font-bold">Men</button>
        </div>
        <div className="mx-4">
          <button className="w-36 h-12 rounded-full bg-white font-bold">Women</button>
        </div>
        <div className="mx-4">
          <button className="w-36 h-12 rounded-full bg-white font-bold">UniSex</button>
        </div>
      </div>
    </div>
  );
}

export default Category;
