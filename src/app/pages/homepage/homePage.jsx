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
        <div className="description1 flex w-[760px] h-[700px] text-1xl ">
          <p className="text-justify">
            Không phải ai cũng có điều kiện sở hữu một chiếc máy ảnh chuyên
            nghiệp – nhưng đam mê thì luôn có trong mỗi người. Có những khoảnh
            khắc tuyệt đẹp trong cuộc sống: một chuyến đi xa, một ngày đặc biệt,
            hay chỉ đơn giản là ánh nắng buổi chiều.... Tất cả đều xứng đáng
            được ghi lại một cách trọn vẹn và "focal" ra đời từ chính mong muốn
            giúp bất kỳ ai cũng có thể chạm đến nhiếp ảnh một cách dễ dàng,
            không cần đầu tư lớn, không cần là chuyên gia. Chỉ cần đam mê – còn
            thiết bị, đã có sẵn!
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between flex-wrap">
        <div className="description2 flex-col w-[761px] h-[700px] text-1xl">
          <p className="title">CÂU CHUYỆN</p>
          <p className="mb-24 pd-10 mt-50 border-bottom: 2px solid #000000;">
            Nhiếp ảnh không chỉ là một công cụ ghi lại hình ảnh, mà là một ngôn
            ngữ không lời, kể lại cảm xúc, câu chuyện, và góc nhìn riêng của mỗi
            người. Thế nhưng, giữa thế giới kỹ thuật số rộng lớn, đôi khi người
            yêu nhiếp ảnh lại thiếu đi nơi để giao lưu, học hỏi và cùng phát
            triển. Vì thế, bên cạnh việc hỗ trợ thiết bị, chúng tôi tạo ra một
            cộng đồng nơi những người có cùng đam mê có thể gặp gỡ, chia sẻ kỹ
            năng, truyền cảm hứng và thậm chí cùng nhau khám phá thế giới qua
            ống kính. Bởi vì, ảnh đẹp nhất không chỉ được tạo ra từ thiết bị
            tốt, mà còn từ những kết nối thật sự giữa con người.
          </p>
        </div>
        <img
          className="w-[758px] h-[700px]"
          src="https://r2.erweima.ai/imgcompressed/compressed_d53a86c2806615d5563569d16a5770ac.webp"
        />
      </div>
      <div className="flex flex-row flex-wrap">
        <div className=" homepage-contact1 flex-col w-[79px] h-[250px] text-1xl">
          <p style={{ transform: "rotate(-90deg)", display: "inline-block" }}>
            LIÊN LẠC
          </p>
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
