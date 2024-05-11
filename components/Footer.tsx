import { socials } from "@/constants";
import Section from "./design/Section";
import Image from "next/image";

const Footer = () => {
  return (
    <Section 
      crosses
      className="!px-0 !py-10"
    >
      <div className="container flex flex-col justify-center items-center gap-5">
        {/* TODO: add tooltips and animate socials links */}
        <div className="flex flex-wrap gap-5">
          {socials.map((item) => (
            <a 
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-14 h-14 bg-dark-4 rounded-full transition-colors hover:bg-dark-6"
            >
              <Image 
                src={item.iconUrl}
                alt={item.title}
                width={28}
                height={28}
              />
            </a>
          ))}
        </div>
        <p className="font-code text-sm">© {new Date().getFullYear()}. Zach Eggert</p>
        {/* <a target="_blank" href="https://icons8.com/icon/OBMhWEebAWe9/slack-new">slack</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
      </div>
    </Section>
  )
}

export default Footer;