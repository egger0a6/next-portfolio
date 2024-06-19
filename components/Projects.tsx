import { projects } from "@/constants";
import Section from "./design/Section";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";
import Image from "next/image";
import { Button } from "./ui/button";
import { IoIosArrowForward } from "react-icons/io";
import BottomGradient from "./design/BottomGradient";
import { github } from "@/public";

const Projects = () => {
  return (
    <Section
      id="projects"
      crosses
      className=""
    >
      <div className="container">
        <h1 className="h1 text-center">Projects</h1>
        <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-8">
          {projects.map((project) => (
            <CardContainer key={project.id}>
              <CardBody className="bg-dark-4 relative group/card hover:shadow-2xl hover:shadow-red-2/[0.2] border-light-2/50 w-auto sm:w-[570px] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold"
                >
                  <span className="text-red-1">Choomz</span>{project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-md max-w-sm mt-2"
                >
                  {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={project.thumbnail}
                    height="1000"
                    width="1000"
                    className="h-60 w-full rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify justify-between mt-6">
                  <CardItem
                    translateZ={20}
                    className=""
                  >
                    <a href={project.repoUrl} target="_blank">
                      <Button className="relative group/btn rounded-xl bg-dark-4 hover:bg-dark-6 transition-colors text-lg font-semibold gap-2">
                        <Image
                          src={github}
                          alt="github logo"
                          width={20}
                          height={20}
                        />
                        Learn More
                        <BottomGradient />
                      </Button>
                    </a>
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    className=""
                  >
                    <a href={project.liveUrl} target="_blank">
                      <Button className="relative group/btn rounded-xl bg-dark-4 hover:bg-dark-6 transition-colors text-lg font-semibold">
                        See Live
                        <IoIosArrowForward className="ml-2" />
                        <BottomGradient />
                      </Button>
                    </a>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Projects;