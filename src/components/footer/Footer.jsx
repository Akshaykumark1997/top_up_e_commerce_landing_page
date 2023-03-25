import React from "react";

function Footer() {
  return (
    <div className="flex items-center flex-col bg-[#EEEEEE] pt-10 pb-10">
      <div>
        <img src="../../../images/footerimage.png" alt="" />
      </div>
      <div className="mt-3">
        <h1>Social Media</h1>
      </div>
      <div className="flex mt-3">
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
