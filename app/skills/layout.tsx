import { SparklesCore } from "@/components/design/SparklesCore";
import SkillsNavbar from "@/components/SkillsNavbar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="pt-[5.25rem] overflow-hidden">
      <SkillsNavbar />
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 top-[88px]">
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
        <div className="absolute inset-0 top-[88px]">
          <div className="bg-dot-neutral-800 w-full h-full"></div>
        </div>
        {children}
      </div>
    </main>
  )
}

export default Layout;