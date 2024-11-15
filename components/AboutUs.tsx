import React from "react";
import aboutData from "@/datas/aboutData.json";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col">
      {/* About Us Section */}
      <div className="w-full min-h-[70vh] bg-[#FF603D] flex items-center justify-center flex-wrap relative">
        <div className="h-full w-full lg:w-[50%] flex flex-col justify-start gap-10 pt-10 lg:pt-20 text-white items-center lg:items-start px-5">
          <h1 className="font-Geist font-[700] text-[32px] md:text-[40px] text-center lg:text-left">
            {aboutData.title}
          </h1>
          <p className="font-Geist font-[500] text-[20px] md:text-[24px] text-center lg:text-left leading-relaxed">
            {aboutData.description}
          </p>
        </div>

        {/* Image Section */}
        <div className="h-full w-full lg:w-[40%] flex justify-center mt-10 lg:mt-0">
          <Image
            alt="About Us Image"
            src={aboutData.img}
            width={1000}
            height={0}
            className="w-[90%] md:w-[70%] lg:w-[80%]"
          />
        </div>
      </div>

      {/* Team Section */}
      <div className="w-full min-h-[20rem] bg-white flex items-center justify-center flex-col py-10 px-5 md:px-10">
        <h2 className="font-Geist font-[700] text-[28px] md:text-[34px] text-[#FF603D] mb-5 text-center">
          Meet Our Team
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {aboutData.team.map((member, index) => (
            <div key={index} className="w-[200px] h-[]  text-center">
              <Link
                href={`/team/${member.name.replace(" ", "").toLowerCase()}`}
                key={member.name}
                passHref
              >
                <Image
                  alt={member.name}
                  src={member.image}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto h-[200px] w-[]"
                />
                <h3 className="font-Geist font-[600] text-[18px] mt-3">
                  {member.name}
                </h3>
                <p className="font-[400] text-[16px] text-gray-600">
                  {member.position}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="w-full bg-[#FF603D] py-10 px-5 md:px-10 flex flex-col items-center">
        <h2 className="font-Geist font-[700] text-[28px] md:text-[34px] text-white mb-5 text-center">
          Our Values
        </h2>
        <div className="flex flex-wrap justify-center gap-10 text-white text-center">
          {aboutData.values.map((value, index) => (
            <div key={index} className="w-[250px]">
              <h3 className="font-[600] text-[20px]">{value.title}</h3>
              <p className="font-[400] text-[16px] mt-2">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
