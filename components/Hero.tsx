import Section from "./design/Section"

const Hero = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative h-screen">
        <div className="z-1 max-w-[62rem] mx-auto text-center">
          <h1>
            Hello, I&apos;m Zach
          </h1>
          <h1>
            I&apos;m a software engineer
          </h1>
        </div>
      </div>
    </Section>
  )
}

export default Hero;