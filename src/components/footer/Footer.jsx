import React from "react";

function Footer() {
  return (
    <div className="flex items-center flex-col bg-[#EEEEEE] pt-10 pb-10">
      <div>
        <img src="../../../images/footerimage.png" className="w-60" alt="" />
      </div>
      <div className="mt-4">
        <h1 className="font-bold text-[20px]">Social Media</h1>
      </div>
      <div className="flex mt-4">
        <div className="mx-2">
          <img src="../../../images/snap.png" alt="" />
        </div>
        <div className="mx-2">
          <img src="../../../images/twitter.png" alt="" />
        </div>
        <div className="mx-2">
          <img src="../../../images/facebook.png" alt="" />
        </div>
        <div className="mx-2">
          <img src="../../../images/insta.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
