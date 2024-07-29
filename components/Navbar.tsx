"use client";

import { navigation } from "@/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import { disablePageScroll, enablePageScroll} from "scroll-lock";
import { Button } from "./ui/button";
import { HiBars2 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);

  const threshold = 0.6;

  useEffect(() => {
    document.getElementById("footer")?.removeAttribute("data-section");
    const observers = [] as any;
    const sections = document.querySelectorAll("[data-section]");

    sections.forEach((el) => {
      const elHeight = el.getBoundingClientRect().height;
      let th = threshold;

      if (elHeight > (window.innerHeight * threshold)) {
        th = ((window.innerHeight * threshold) / elHeight) * threshold;
      }

      observers.push(new IntersectionObserver((entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
        if (visibleSection) setActiveSection(visibleSection.id);
      }, {threshold: th}).observe(el));
    });

    return () => {
      observers?.forEach((observer: IntersectionObserver, idx: number) =>{
        observer?.unobserve(sections[idx]);
      });
    };
  }, []);

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
    <div className={`fixed top-0 left-0 w-full z-10 border-b border-stroke-1 ${openNavigation ? "bg-dark-1" : "bg-dark-1/90 backdrop-blur-sm"}`}>
      <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#hero" onClick={() => setOpenNavigation(false)} className="block xl:mr-8">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={55}
            height={55}
          />
        </a>

        <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5.47rem] left-0 right-0 bottom-0 bg-dark-1 lg:static lg:flex lg:bg-transparent`}>
          <div className="z-5 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a 
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block font-code text-2xl uppercase transition-colors hover:text-red-2 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-lg lg:font-semibold ${(item.url.slice(1) === activeSection) ? "z-5 lg:text-light-6" : "lg:text-light-1"} lg:leading-5 lg:hover:text-light-6 xl:px-12`}
              >
                <span className={`pb-2 ${(item.url.slice(1) === activeSection) ? "border-b border-red-2 border-opacity-40" : ""}`}>{item.title}</span>
              </a>
            ))}
          </div>

          {/* <div className="absolute inset-0 w-full h-full pointer-events-none lg:hidden z-50" /> */}
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
      </div>
    </div>
  )
}

export default Navbar;