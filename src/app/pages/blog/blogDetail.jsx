import React from "react";
import { useLocation } from "react-router-dom";

export default function blogDetail() {
  const location = useLocation();
  const blog = location.state?.blog;

  const tipsString = blog.body?.content || "";
  const tipsArray = tipsString.split(/(?=\d+\.\s)/g).map((tip) => tip.trim());
  const isoString = blog.updatedAt;
  const date = new Date(isoString);
  
  const formattedDate = `${String(date.getDate()).padStart(2, "0")}/${String(
    date.getMonth() + 1
  ).padStart(2, "0")}/${date.getFullYear()}`;
  return (
    <div className="flex flex-col  px-20 ">
      <div className="flex flex-row justify-between flex-wrap">
        <div className="w-[700px] uppercase text-2xl">
          <h2 className="font-semibold leading-11 mb-10 uppercase">
            {blog.title}
          </h2>
          <p className="mb-24 uppercase">{blog.introduction?.content}</p>
          <p>Written by: ADMIN</p>
          <p> Published: {formattedDate}</p>
          <p className="mt-14">
            {blog.introduction?.title} <br />
            {blog.introduction?.content}
          </p>
        </div>
        <img
          className="w-[540px] h-[900px]"
          src="https://i.pinimg.com/736x/b4/69/93/b46993cb18e23e4d42b1caa2091d082f.jpg"
        />
      </div>
      <div className="flex flex-row flex-wrap items-end mt-40">
        <img
          className="w-[340px] h-[500px]"
          src="https://i.pinimg.com/736x/1d/ff/74/1dff74978764853e64b84d6965727619.jpg"
        />
        <img
          className="w-[320px] h-[365px]"
          src="https://i.pinimg.com/736x/c2/9c/e0/c29ce0b01494e403c2d33a372b541d29.jpg"
        />
        <img
          className="w-[312px] h-[500px]"
          src="https://i.pinimg.com/736x/8f/48/6f/8f486fc80adc0414c94ad82ae8155025.jpg"
        />
        <img
          className="w-[380px] h-[304px]"
          src="https://i.pinimg.com/736x/f8/b7/8a/f8b78ab13edb2b70a3bee9d144160c95.jpg"
        />
      </div>
      <div className="inline pt-5">
        <span className="text-[#979797] font-semibold text-[22px] ">
          Reference of Symmetrical Balance, Asymmetrical Balance, Radial Balance
          in photography.
        </span>
        <span className="text-[#C6C6C6] text-[17px] ">
          {" "}
          Image credit: Nikolas Behrendt, Luis Eusebio , Jiangxulei, Parrish
          Freeman
        </span>
      </div>
      <strong className="text-[24px] py-10">{blog.body?.title}</strong>

      <div className="inline text-[24px]">
        {tipsArray.map((tip, index) => (
          <p key={index}>{tip}</p>
        ))}
      </div>
      {/* <div className="inline text-[24px]">
        <strong>Radial Balance:</strong> This occurs when elements radiate from
        a central point in the image. It’s commonly seen in circular patterns or
        shots where the eye is naturally drawn toward the center of the frame. A
        close-up of a flower, with its petals radiating outward, is a perfect
        example of radial balance.
      </div>
      <div className="text-[24px] py-10">
        <strong>Why Balance Matters?</strong> <br /> Balance in photography is
        not just about visual aesthetics—it’s about creating a sense of
        coherence and flow. Balanced photos are easier to engage with because
        the elements within them are arranged in a way that feels natural. A
        well-balanced image directs the viewer’s gaze through the frame,
        encouraging them to explore the photo’s details without feeling
        overwhelmed.
      </div>
      <div className="text-[24px] py-10">
        <strong>How to Achieve Balance</strong> <br />
        <ol type="1" style={{ listStyleType: "decimal", paddingLeft: "40px" }}>
          <li>
            Use the Rule of Thirds: One of the simplest ways to achieve balance
            is by following the rule of thirds. By dividing the frame into nine
            equal parts using two horizontal and two vertical lines, you can
            place key elements at the intersections. This technique often
            results in a more naturally balanced composition.
          </li>
          <li>
            Experiment with Framing: Consider how you frame your subject. You
            can use leading lines, symmetry, or even the foreground and
            background to balance your image. Think about how all the elements
            in your scene interact with each other.
          </li>
          <li>
            Play with Color and Light: Contrasting or complementary colors can
            also be used to create balance. A bright spot in one corner of your
            frame can be balanced by a darker area elsewhere, creating visual
            harmony through light and shadow.
          </li>
        </ol>
      </div> */}
      <div className="flex flex-row justify-between items-center pt-14">
        <img
          className="w-[552px] h-[657px] object-cover"
          src="https://images.unsplash.com/photo-1511762180596-d03b808430fe?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="inline text-[24px] text-right w-[740px]">
          <strong>{blog.conclusion?.title}</strong>
          <br /> {blog.conclusion?.content}
        </div>
      </div>
    </div>
  );
}
