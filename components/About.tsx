import Image from "next/image";
import Section from "./design/Section";
import { techStack } from "@/constants";
console.log(Math.ceil(techStack.length / 2))

const About = () => {
  return (
    <Section
      id="about"
      crosses
    >
      <div className="container h-screen">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col">
            <div>
              <Image
                src="/images/avatar.svg"
                alt="male avatar"
                width={540}
                height={500}
              />
            </div>
          </div>

          <div className="lg:ml-auto xl:w-[38rem]">
            <p className="">
              I constantly try to improve my skills
            </p>

            <div className="relative left-1/2 flex w-[32rem] aspect-square border border-dark-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
              <div className="relative flex w-[19rem] aspect-square m-auto border border-dark-6 rounded-full">
                <div className="w-[6rem] aspect-square m-auto rounded-full border border-dark-6">
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
                        className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${idx * 40 + 5}`}
                      >
                        <div className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-dark-4 border border-light-1/50 rounded-xl -rotate-${idx * 40 + 5}`}>
                          <Image
                            src={item.icon}
                            alt="icon"
                            width={28}
                            height={28}
                            className="m-auto"
                          />
                        </div>
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
                    <div className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-dark-4 border border-light-1/50 rounded-xl -rotate-${idx * 36}`}>
                      <Image
                        src={item.icon}
                        alt="icon"
                        width={28}
                        height={28}
                        className="m-auto"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About;