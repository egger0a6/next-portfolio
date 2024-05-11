"use client";

import { navigation } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import { useHash } from "react-hash-control";
import { disablePageScroll, enablePageScroll} from "scroll-lock";
import { Button } from "./ui/button";
import { HiBars2 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const pathname = useHash();
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  }

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  }

  return (
    <div className={`fixed top-0 left-0 w-full z-10 border-b border-dark-3 ${openNavigation ? "bg-dark-1" : "bg-dark-1/90 backdrop-blur-sm"}`}>
      <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#hero" className="block xl:mr-8">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={40}
            height={40}
          />
        </a>

        <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[4rem] left-0 right-0 bottom-0 bg-dark-1 lg:static lg:flex lg:bg-transparent`}>
          <div className="z-5 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a 
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block font-code text-2xl uppercase text-light-6 transition-colors hover:text-red-2 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-lg lg:font-semibold ${item.url.slice(1) === pathname ? "z-5 lg:text-light-4" : "lg:text-light-1"} lg:leading-5 lg:hover:text-light-6 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <div className="absolute inset-0 w-full h-full pointer-events-none lg:hidden z-50" />
        </nav>

        <Button 
          onClick={toggleNavigation}
          className="ml-auto lg:hidden px-3 text-2xl"
        >
          {openNavigation 
            ? <IoClose />
            : <HiBars2 />
          }
        </Button>

        {/* TODO: Add light dark mode toggle */}
      </div>
    </div>
  )
}

export default Navbar;