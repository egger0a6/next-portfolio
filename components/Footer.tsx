"use client";

import { socials } from "@/constants";
import Section from "./design/Section";
import Image from "next/image";
import { backInOut, circInOut, easeOut, motion, stagger, useAnimate, useInView} from "framer-motion";
import { useEffect, useState } from "react";

const Footer = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  const [hoverState, setHoverState] = useState(false);

  const handleHover = () => {
    setHoverState(!hoverState);
  }

  useEffect(() => {
    const linkYAnimation = animate(
      "#link",
      {y: [0 , -14]},
      {duration: 1.25, ease: backInOut, delay: stagger(0.3125, { startDelay: 1}), repeat: Infinity, repeatType: "reverse", type: "tween", repeatDelay: .7}
    );
    const linkColorAnimation = animate(
      "#link",
      {background: ["#1B2027", "#EA5454"]},
      {duration: 1.25, ease: circInOut, delay: stagger(0.3125, {ease: easeOut,startDelay: 1}), repeat: Infinity, repeatType: "mirror", type: "keyframes", repeatDelay: .7}
    );

    if (isInView && !hoverState) {
      linkYAnimation.play();
      linkColorAnimation.play();
    } else {
      linkYAnimation.complete();
      linkColorAnimation.complete();
      linkYAnimation.pause();
      linkColorAnimation.pause();
    }
  }, [isInView, hoverState, animate]);

  return (
    <Section 
      id="footer"
      crosses
      className="!px-0 !py-10"
    >
      <div ref={scope} className="container flex flex-col justify-center items-center gap-5">
        <div className="flex flex-wrap gap-5">
          {socials.map((item) => (
            <motion.div
              id="link"
              key={item.id}
              initial={{rotate: 0}}
              onHoverStart={handleHover}
              onHoverEnd={handleHover}
              whileHover={{scale: 1.2, rotate: [30, 0], transition: {duration: 0.5}}}
              className="flex items-center justify-center w-14 h-14 bg-dark-4 rounded-full "
            >
              <a
                href={item.url}
                target="_blank"
                
              >
                <Image 
                  src={item.iconUrl}
                  alt={item.title}
                  width={28}
                  height={28}
                />
              </a>
            </motion.div>
          ))}
        </div>
        <p className="font-code text-sm">© {new Date().getFullYear()}. Zach Eggert</p>
      </div>
    </Section>
  )
}

export default Footer;