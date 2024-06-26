import Image from "next/image";
import Section from "./design/Section";
import { techStack } from "@/constants";
import { LeftCurve } from "./design/LeftCurve";
import { RightCurve } from "./design/RightCurve";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";

const About = () => {
  return (
    <Section
      id="about"
      crosses
      className="lg:tall:h-screen lg:tall:max-h-screen"
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col mb-10 lg:mb-0 xl:mr-20">
            <div className="flex items-center justify-center sm:mb-4 scale-60 sm:scale-75 lg:scale-90 xl:scale-100">
              <Image
                src="/images/avatar.svg"
                alt="male avatar"
                width={364}
                height={337}
              />
            </div>
            <p className="lg:text-center font-medium text-white/90 xl:text-lg sm:text-base text-sm -mt-8 lg:mt-0 px-6 lg:px-8 tracking-wide">
              Welcome. I am a software developer with a knack for building efficient and engaging solutions. My passion for learning and personal growth drive me to continuously expand my expertise in this ever-evolving field.
              <br />
              <br />
              Specializing in both front-end and back-end technologies, I enjoy turning complex ideas into polished digital experiences while prioritizing clean, maintainable code.
              <br />
              <br />
              When not in front of a computer, you can find me engaging in something physically active, or possibly relaxing by listening to my favorite tunes.
            </p>
          </div>

          <div className="lg:ml-auto xl:w-[38rem] lg:-mr-6 xl:mr-4">
            <p className="text-light-3 text-center text-base lg:text-lg -mb-24 sm:-mb-10 md:mb-6 lg:mb-12">
              I constantly try to improve my <span className="text-red-2">skills</span>
            </p>
            <div className="relative left-1/2 flex w-[37rem] aspect-square border border-dark-6 rounded-full -translate-x-1/2 scale-55 sm:scale-75 md:scale-90 xl:scale-100">
              <div className="relative flex w-[22rem] aspect-square m-auto border border-dark-6 rounded-full">
                <div className="w-[8rem] aspect-square m-auto rounded-full border border-dark-6">
                  <div className="flex items-center justify-center w-full h-full bg-dark-1 rounded-full">
                    <Image
                      src="/icons/customStack-1.svg"
                      alt="stack icon"
                      width={48}
                      height={48}
                    />
                  </div>
                  <ul>
                    {techStack.slice(0, 9).map((item, idx) => (
                      <li
                        key={item.id}
                        className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${idx * 40 + 5} z-10`}
                      >
                        <TooltipProvider>
                          <Tooltip delayDuration={200} >
                            <div className={`relative items-center justify-center -top-[1.6rem] flex w-[3.5rem] h-[3.5rem] bg-dark-6 border-2 border-light-2/50 rounded-xl -rotate-${idx * 40 + 5}`}>
                              {/* <AnimatedTooltip item={item} width={42} height={42} /> */}
                              <TooltipTrigger>
                                <Image
                                  src={item.icon}
                                  alt="icon"
                                  width={42}
                                  height={42}
                                  className=""
                                />
                              </TooltipTrigger>
                              <TooltipContent>
                                {item.title}
                              </TooltipContent>
                            </div>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <ul>
                {techStack.slice(9).map((item, idx) => (
                  <li
                    key={item.id}
                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${idx * 36}`}
                  >
                    <TooltipProvider>
                      <Tooltip delayDuration={200} >
                        <div className={`relative items-center justify-center -top-[1.6rem] flex w-[3.7rem] h-[3.7rem] bg-dark-6 border-2 border-light-2/50 rounded-xl -rotate-${idx * 36}`}>
                          <TooltipTrigger>
                            <Image
                              src={item.icon}
                              alt="icon"
                              width={44}
                              height={44}
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            {item.title}
                          </TooltipContent>
                        </div>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>

              <LeftCurve />
              <RightCurve />
            </div>
          </div>
        </div>
      </div>
    </Section >
  )
}

export default About;