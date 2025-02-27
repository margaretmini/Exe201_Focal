import React from "react";
export default function productDetail() {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] h-[1148px] relative">
        <img className="absolute w-[716px] h-[408px] top-[20px] left-[362px]"  />

        <div className="absolute w-[177px] h-[22px] top-[650px] left-[1220px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-[22px] text-center tracking-[-0.40px] leading-[13px]">
          CÓ SẴN
        </div>

        <div className="absolute w-[197px] h-8 top-[650px] left-[622px]">
          <div className="absolute w-[177px] h-[22px] top-1 left-[9px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-[22px] text-center tracking-[-0.40px] leading-[13px] pt-2">
            CHỌN NGÀY
          </div>

          <div className="absolute w-[197px] h-8 top-0 left-0 border-2 border-solid border-black" />
        </div>

        <p className="absolute h-[22px] top-[535px] left-[511px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-2xl text-center tracking-[-0.40px] leading-[22px] whitespace-nowrap">
          SONY Alpha ILCE - 6700 / SONY A6700
        </p>

        <div className="absolute w-[211px] h-9 top-[460px] left-[615px] opacity-45 [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-lg text-center tracking-[-0.40px] leading-[18px]">
          TÌNH TRẠNG: TỐT
          <br />
          <br />
          CHỈ MÁY
        </div>
        <div className="absolute w-[298px] h-[43px] top-[650px] left-[54px]">
          <div className="h-[22px] top-2.5 left-0 text-[22px] leading-[22px] whitespace-nowrap absolute [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-center tracking-[-0.40px]">
            SONY A6700 -
          </div>

          <div className="w-[193px] h-[43px] top-[15px] left-[105px] opacity-45 text-base leading-[15px] absolute [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-center tracking-[-0.40px]">
            SONY/ ALPHA
          </div>
        </div>
      </div>
    </div>
  );
}
