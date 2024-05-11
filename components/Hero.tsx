"use client";

import Section from "./design/Section"
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Section
      // className="pt-[12rem] -mt-[5.25rem]"
      className="-mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="relative h-screen md:mx-5 lg:mx-7.5 xl:mx-10">
        <HeroHighlight containerClassName="z-0">
          <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          >
            <div className="z-1 max-w-[62rem] mx-auto text-center">
              <h1 className="h1">
                Hello, I&apos;m&nbsp; 
                <span className="bg-gradient-to-r from-red-1 to-red-2 text-transparent bg-clip-text">Zach</span>
              </h1>
              <h2 className="h2">
                <Highlight>
                  I&apos;m a software engineer.
                </Highlight>
              </h2>
            </div>
          </motion.h1>
        </HeroHighlight>
      </div>
    </Section>
  )
}

export default Hero;