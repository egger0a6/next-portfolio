import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { SparklesCore } from "@/components/design/SparklesCore";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="relative">
        <div className="absolute inset-0 pb-[176px] md:mx-5 lg:mx-7.5 xl:mx-10">
          
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.4}
            maxSize={1.4}
            particleDensity={20}
            className="w-full h-full"
            particleColor="#EA5454"
            //"#FF204E"
            speed={2}
          />
        </div>
          <div className="absolute inset-0 pb-[176px] md:mx-5 lg:mx-7.5 xl:mx-10">
            <div className="bg-dot-neutral-800 w-full h-full"></div>
          </div>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Home;