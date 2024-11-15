import Image from "next/image";
import React, { useState } from "react";
import headerLinks from "@/datas/headerLinks.json";
import Link from "next/link";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div className="w-full h-[5rem] bg-[#FF603D] text-[#ffffff] lg:flex hidden items-center justify-center border-b border-b-white z-[1000000]">
        <div className="w-[80%] h-full flex items-center justify-around">
          <Image
            alt="Logo"
            src="/logo.png"
            width={100}
            height={0}
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
          <ul className="flex items-center justify-around gap-10">
            {headerLinks.map((link, key) => (
              <li key={link.name} className="relative hover-underline">
                <Link
                  href={link.url}
                  className="flex items-center justify-center text-[14px]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-10">
            <Link
              href="/Login"
              className="flex items-center justify-center text-[14px] "
            >
              Sign in
            </Link>
            <Link
              href="/Demo"
              className="w-[200px] h-[40px] border border-white flex items-center justify-center text-[14px] hover:bg-white hover:text-[#FF603D] duration-300"
            >
              Request a demo
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-[5rem] bg-[#FF603D] text-[#ffffff] flex lg:hidden items-center justify-center border-b border-b-white relative z-[1000000]">
        <div className="w-[80%] h-full flex items-center justify-around">
          <Image
            alt="Logo"
            src="/logo.png"
            width={100}
            height={0}
            className=""
          />
          <div
            className="flex flex-col items-center justify-between w-[30px] h-[20px]"
            onClick={() => setClicked(!clicked)}
          >
            <div
              className={`w-full h-[2px] bg-white relative duration-300   ${
                clicked && "rotate-45 top-[50%]"
              }`}
            ></div>
            <div
              className={`w-full h-[2px] bg-white relative duration-300  ${
                clicked && "-rotate-45 -top-[50%]"
              }`}
            ></div>
          </div>
          <div
            className={`absolute top-[100%] w-[0%] h-[calc(100vh-5rem)] bg-[#FF603D]  duration-300 overflow-hidden flex flex-col items-center justify-start pt-20 gap-20 ${
              clicked && "w-[100%]"
            }`}
          >
            <ul className="flex items-center justify-around gap-10 flex-col">
              {headerLinks.map((link, key) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    className="flex items-center justify-center text-[14px]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-10">
              <Link
                href=""
                className="flex items-center justify-center text-[14px] "
              >
                Sign in
              </Link>
              <Link
                href=""
                className="w-[200px] h-[40px] border border-white flex items-center justify-center text-[14px] hover:bg-white hover:text-[#FF603D] duration-300"
              >
                Request a demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
