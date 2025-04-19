import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./landing.css";

export default function Landing() {
  const sliderImages = [
    "https://images.unsplash.com/photo-1743021192899-5e78625bf0c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1741851373499-e2c10ed2eeb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1742943892627-f7e4ddf91224?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1743078344181-6eeea5796e8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const sliderImagesSection2 = [
    "https://images.unsplash.com/photo-1523257795348-d6e1ae30d547?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1515446134809-993c501ca304?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const sliderImagesSection3 = [
    "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1460134846237-51c777df6111?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1663134149019-284682ece04c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1536632087471-3cf3f2986328?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [current, setCurrent] = useState(0);
  const [current2, setCurrent2] = useState(0);
  const [current3, setCurrent3] = useState(0);

  const prev = (set, total) =>
    set((prev) => (prev === 0 ? total - 1 : prev - 1));
  const next = (set, total) =>
    set((prev) => (prev === total - 1 ? 0 : prev + 1));

  // Scroll logic
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];
  const [currentSection, setCurrentSection] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (scrolling) return;

      setScrolling(true);
      setTimeout(() => setScrolling(false), 1000); // delay scroll

      if (e.deltaY > 0 && currentSection < sectionRefs.length - 1) {
        setCurrentSection((prev) => {
          const next = prev + 1;
          sectionRefs[next].current.scrollIntoView({ behavior: "smooth" });
          return next;
        });
      } else if (e.deltaY < 0 && currentSection > 0) {
        setCurrentSection((prev) => {
          const prevIndex = prev - 1;
          sectionRefs[prevIndex].current.scrollIntoView({ behavior: "smooth" });
          return prevIndex;
        });
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentSection, scrolling]);

  return (
    <div className="bg-white w-full">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Section 1 */}
        <section
          ref={sectionRefs[0]}
          className="flex flex-col md:flex-row items-start gap-10 py-12 h-[700px]"
        >
          <div className="flex-1 slider-container relative">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {sliderImages.map((src, index) => (
                <img key={index} src={src} alt="" className="slider-image" />
              ))}
            </div>
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

          <div className="flex-1 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug text-black text-center">
              LÀM CHỦ NGHỆ THUẬT CÂN BẰNG: ĐẠT ĐẾN SỰ HÀI HÒA HOÀN HẢO TRONG
              NHIẾP ẢNH CHUYÊN NGHIỆP
            </h2>
            <p className="text-base text-gray-800 leading-relaxed text-justify">
            Trong nhiếp ảnh, sự cân bằng là nguyên lý cốt lõi có thể tạo nên
              hoặc phá vỡ một bức ảnh. Sự phân bố ánh sáng, bố cục, màu sắc và
              yếu tố thị giác cần hài hòa để người xem cảm nhận được chiều sâu
              và cảm xúc thật sự. Việc làm chủ sự cân bằng giúp nhiếp ảnh gia kể
              chuyện một cách tinh tế, đưa người xem vào thế giới của khung hình
              một cách tự nhiên và trọn vẹn.
            </p>
            <div className="text-right">
              <Link
                to="/blog"
                className="text-lg font-bold underline hover:text-gray-700 transition"
              >
                ĐỌC THÊM
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section
          ref={sectionRefs[1]}
          className="flex flex-col md:flex-row items-start gap-10 py-12 h-[700px]"
        >
          <div className="flex-1 space-y-4 h-full overflow-y-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-black text-center">
              NHIẾP ẢNH NHƯ MỘT LOẠI HÌNH NGHỆ THUẬT
            </h2>
            <p className="text-base text-gray-800 text-justify">
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
                to="/blog"
                className="text-lg font-bold underline hover:text-gray-700 transition"
              >
                ĐỌC THÊM
              </Link>
            </div>
          </div>
          <div className="flex-1 slider-container relative">
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

        {/* Section 3 */}
        <section ref={sectionRefs[2]} className="py-16 h-[700px]">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">SẢN PHẨM MỚI</h2>
            <Link to="/product" className="underline font-bold text-gray-800">
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
        </section>
      </div>
    </div>
  );
}
