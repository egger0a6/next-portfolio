import Image from "next/image";
import Section from "./design/Section";

const About = () => {
  return (
    <Section
      id="about"
      crosses
    >
      <div className="container h-screen">
        <div className="flex flex-col sm:flex-row">
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
        </div>
      </div>
    </Section>
  )
}

export default About;