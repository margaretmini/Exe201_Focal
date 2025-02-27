import React from "react";
import "./homePage.css";

export default function homePage() {
  return (
    <div className="homepage">
      <p className="homepage-welcome">Hi, Welcome to focal</p>
      <p className="homepage-welcome-description">
        Chúng tôi kết nối các nhiếp ảnh gia để cho thuê và chia sẻ thiết bị tại
        địa phương.
      </p>
      <div className="flex flex-row justify-between flex-wrap">
        <img
          className="w-[759px] h-[700px]"
          src="https://app.giz.ai/api/inference/images/A%20serene%20woman%20with%20flowing%20hair%20stands%20on%20a%20cliff%2C%20gazing%20at%20a%20vibrant%20sunset%20over%20the%20ocean."
        />
        <div className="description1 flex w-[760px] h-[700px] text-1xl">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur 
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between flex-wrap">
        <div className="description2 flex-col w-[761px] h-[700px] text-1xl">
          <p className="title">CÂU CHUYỆN</p>
          <p className="mb-24 ">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur 
          </p>
        </div>
        <img
          className="w-[758px] h-[700px]"
          src="https://r2.erweima.ai/imgcompressed/compressed_d53a86c2806615d5563569d16a5770ac.webp"
        />
      </div>
      <div className="flex flex-row flex-wrap">
        <div className=" homepage-contact1 flex-col w-[79px] h-[250px] text-1xl">
          <p  style={{ transform: 'rotate(-90deg)', display: 'inline-block' }}>LIÊN LẠC</p>
        </div>
        <div className=" homepage-contact2 flex-col w-[480px] h-[250px] text-1xl">
          <p className="homepage-contact2-p">EMAIL</p>
          <p>hello@focal.com</p>
        </div>
        <div className=" homepage-contact3 flex-col w-[480px] h-[250px] text-1xl">
          <p className="homepage-contact3-p">ĐIỆN THOẠI</p>
          <p>+84 012 3456</p>
        </div>
        <div className=" homepage-contact4 flex-col w-[480px] h-[250px] text-1xl">
          <p className="homepage-contact4-p">INSTAGRAM</p>
          <p>focal</p>
        </div>
        
      </div>
    </div>
  );
}
