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

  const prev = (set, total) => set((prev) => (prev === 0 ? total - 1 : prev - 1));
  const next = (set, total) => set((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <div className="bg-white w-full">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="py-6 text-3xl font-bold">focal</div>

        {/* Section 1 */}
        <section className="flex flex-col md:flex-row items-start gap-10 py-12 h-[740px]">
          {/* Image slider */}
          <div className="flex-1 slider-container">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {sliderImages.map((src, index) => (
                <img key={index} src={src} alt="" className="slider-image" />
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

          {/* Text */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug text-black">
              MASTERING THE ART OF BALANCE: ACHIEVING PERFECT HARMONY IN PROFESSIONAL PHOTOGRAPHY
            </h2>
            <p className="text-base text-gray-800 leading-relaxed">
              In photography, balance is a fundamental principle that can make or break an image...
            </p>
            <div className="text-right">
              <Link to="#" className="text-lg font-bold underline hover:text-gray-700 transition">
                ĐỌC THÊM
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col md:flex-row items-start gap-10 py-12 h-[740px]">
          <div className="flex-1 space-y-4 h-full overflow-y-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              PHOTOGRAPHY AS ART: CAPTURING EMOTION BEYOND THE LENS
            </h2>
            <p className="text-base text-gray-800">
              Photography is more than a technical skill — it’s a powerful form of artistic expression...
            </p>
            <div className="text-right">
              <Link to="#" className="text-lg font-bold underline hover:text-gray-700 transition">
                KHÁM PHÁ THÊM
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
        <section className="py-16 h-[740px]">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">SẢN PHẨM MỚI</h2>
            <Link to="#" className="underline font-bold text-gray-800">
              KHÁM PHÁ NGAY
            </Link>
          </div>

          <div className="relative h-[600px] mx-auto slider-container rounded-2xl">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${current3 * 100}%)` }}
            >
              {sliderImagesSection3.map((src, index) => (
                <img key={index} src={src} alt="" className="slider-image rounded-2xl" />
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
            <h3 className="text-[48px] font-extrabold tracking-tight" style={{ fontFamily: "monospace" }}>
              SONY A6700
            </h3>
          </div>
        </section>
      </div>
    </div>
  );
}
