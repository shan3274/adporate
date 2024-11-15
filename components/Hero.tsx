import React from "react";
import heroData from "@/datas/heroData.json";
import Link from "next/link";
import Image from "next/image";
import { svg } from "@/datas/logo";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <div className="w-full min-h-[calc(70vh-5rem)] bg-[#FF603D] flex items-center justify-center flex-wrap-reverse relative">
        <div className="h-full w-full lg:w-[30%] flex flex-col justify-start gap-10 pt-10 lg:pt-20 text-white items-center lg:items-start px-5">
          <h1 className="font-Geist font-[700] text-[32px] md:text-[40px] text-center lg:text-left">
            {heroData.title}
          </h1>
          <p className="font-Geist font-[500] text-[40px] md:text-[60px] text-center lg:text-left">
            {heroData.heading}
          </p>
          <div className="h-[60px] md:h-[100px]">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(heroData.description)
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(heroData.description)
                  .start();
              }}
            />
          </div>
          <div className="flex w-full justify-center lg:justify-between gap-3 lg:gap-0 mt-5 lg:mt-0">
            {heroData.buttons.map((item, key) => (
              <Link
                key={key}
                href={item.link}
                className={`w-[45%] md:w-[40%] lg:w-[45%] h-[40px] flex items-center justify-center border ${
                  key === 0 && "bg-[#160828] border-none text-[#FCFF70]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="h-full w-full lg:w-[40%] flex justify-center mt-10 lg:mt-0">
          <Image
            alt=""
            src={heroData.img}
            width={1000}
            height={0}
            className="w-[90%] md:w-[70%] lg:w-[80%]"
          />
        </div>
      </div>

      {/* Logos Section */}
      <div className="w-full  min-h-[20rem] bg-[#FF603D] flex items-center justify-center gap-20 flex-wrap px-5 md:px-10 py-5 md:py-10">
        {svg.map((item, index) => (
          <div
            key={index}
            className=""
            dangerouslySetInnerHTML={{ __html: item }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
