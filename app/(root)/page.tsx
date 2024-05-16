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
        <div className="absolute w-full inset-0 h-full container pb-[176px]">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.4}
            maxSize={1.4}
            particleDensity={20}
            className="w-full h-full z-0"
            particleColor="#EA5454"
            //"#FF204E"
            speed={2}
          />
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