import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./landing.css";

export default function Landing() {
  const sliderImages = [
    "https://images.unsplash.com/photo-1686579809662-829e8374d0a8?w=600&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_photo-1675448891094-0f3acc556fdb?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1539634262233-7c0b48ab9503?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1614983652406-41044db11dc6?w=600&auto=format&fit=crop&q=60",
  ];
  const sliderImagesSection2 = [
    "https://images.unsplash.com/photo-1523257795348-d6e1ae30d547?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519183071298-a2962ae0b2cf?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1488376739361-e6c33f7f42b4?q=80&w=2070&auto=format&fit=crop",
  ];
  const sliderImagesSection3 = [
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    "https://images.unsplash.com/photo-1602524818670-28c6d15fca40",
    "https://images.unsplash.com/photo-1581291518830-4c4a6b2ad0ff",
  ];

  const [current, setCurrent] = useState(0);
  const [current2, setCurrent2] = useState(0);
  const [current3, setCurrent3] = useState(0);

  const prev = (set, total) =>
    set((prev) => (prev === 0 ? total - 1 : prev - 1));
  const next = (set, total) =>
    set((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <div className="bg-white w-full">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Phần 1 */}
        <section className="flex flex-col md:flex-row items-start gap-10 py-12 h-[740px]">
          {/* Trình chiếu ảnh */}
          <div className="flex-1 slider-container">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {sliderImages.map((src, index) => (
                <img key={index} src={src} alt="" className="slider-image" />
              ))}
            </div>
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {sliderImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full ${
                    current === i ? "bg-black" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => prev(setCurrent, sliderImages.length)}
              className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black"
            >
              &#8249;
            </button>
            <button
              onClick={() => next(setCurrent, sliderImages.length)}
              className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black"
            >
              &#8250;
            </button>
          </div>

          {/* Nội dung chữ */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug text-black text-center">
              LÀM CHỦ NGHỆ THUẬT CÂN BẰNG: ĐẠT ĐẾN SỰ HÀI HÒA HOÀN HẢO TRONG
              NHIẾP ẢNH CHUYÊN NGHIỆP
            </h2>
            <p
              className="text-base text-gray-800 leading-relaxed text-justify"
              style={{ textAlign: "justify" }}
            >
              Trong nhiếp ảnh, sự cân bằng là nguyên lý cốt lõi có thể tạo nên
              hoặc phá vỡ một bức ảnh. Sự phân bố ánh sáng, bố cục, màu sắc và
              yếu tố thị giác cần hài hòa để người xem cảm nhận được chiều sâu
              và cảm xúc thật sự. Việc làm chủ sự cân bằng giúp nhiếp ảnh gia kể
              chuyện một cách tinh tế, đưa người xem vào thế giới của khung hình
              một cách tự nhiên và trọn vẹn.
            </p>
            <div className="text-right">
              <Link
                to="#"
                className="text-lg font-bold underline hover:text-gray-700 transition"
              >
                ĐỌC THÊM
              </Link>
            </div>
          </div>
        </section>

        {/* Phần 2 */}
        <section className="flex flex-col md:flex-row items-start gap-10 py-12 h-[740px]">
          <div className="flex-1 space-y-4 h-full overflow-y-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-black text-center">
              NHIẾP ẢNH NHƯ MỘT LOẠI HÌNH NGHỆ THUẬT: NẮM BẮT CẢM XÚC VƯỢT RA
              NGOÀI ỐNG KÍNH
            </h2>
            <p
              className="text-base text-gray-800 text-justify"
              style={{ textAlign: "justify" }}
            >
              Nhiếp ảnh không chỉ là một kỹ năng kỹ thuật — nó còn là một hình
              thức thể hiện nghệ thuật đầy mạnh mẽ. Một bức ảnh đẹp không chỉ
              ghi lại khoảnh khắc, mà còn truyền tải cảm xúc, câu chuyện và cái
              nhìn cá nhân của người chụp. Khi đặt trái tim vào từng khung hình,
              mỗi bức ảnh trở thành một tác phẩm nghệ thuật mang đậm dấu ấn
              riêng biệt, kết nối cảm xúc giữa người sáng tạo và người thưởng
              thức.
            </p>
            <div className="text-right">
              <Link
                to="#"
                className="text-lg font-bold underline hover:text-gray-700 transition"
              >
                ĐỌC THÊM
              </Link>
            </div>
          </div>
          <div className="flex-1 slider-container">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${current2 * 100}%)` }}
            >
              {sliderImagesSection2.map((src, index) => (
                <img key={index} src={src} alt="" className="slider-image" />
              ))}
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {sliderImagesSection2.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent2(i)}
                  className={`w-3 h-3 rounded-full ${
                    current2 === i ? "bg-black" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => prev(setCurrent2, sliderImagesSection2.length)}
              className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black"
            >
              &#8249;
            </button>
            <button
              onClick={() => next(setCurrent2, sliderImagesSection2.length)}
              className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black"
            >
              &#8250;
            </button>
          </div>
        </section>

        {/* Phần 3 */}
        <section className="py-16 h-[740px]">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">SẢN PHẨM MỚI</h2>
            <Link to="#" className="underline font-bold text-gray-800">
              KHÁM PHÁ NGAY
            </Link>
          </div>

          <div className="relative h-[500px] mx-auto slider-container rounded-2xl">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${current3 * 100}%)` }}
            >
              {sliderImagesSection3.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt=""
                  className="slider-image rounded-2xl"
                />
              ))}
            </div>
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {sliderImagesSection3.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent3(i)}
                  className={`w-3 h-3 rounded-full ${
                    current3 === i ? "bg-black" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => prev(setCurrent3, sliderImagesSection3.length)}
              className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black"
            >
              &#8249;
            </button>
            <button
              onClick={() => next(setCurrent3, sliderImagesSection3.length)}
              className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black"
            >
              &#8250;
            </button>
          </div>

          <div className="text-center mt-10">
            <h2
              className="text-[48px] font-extrabold tracking-tight"
              style={{ fontFamily: "monospace" }}
            >
              SONY A6700
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
}
