import { projects } from "@/constants";
import Section from "./design/Section";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";
import Image from "next/image";

const Projects = () => {
  return (
    <Section
      id="projects"
      crosses
      className="h-screen"
    >
      <div className="container">
        <div className="flex flex-wrap items-center justify-center">
          {projects.map((project) => (
            <CardContainer key={project.id}>
              <CardBody className="bg-dark-5 relative group/card hover:shadow-2xl hover:shadow-red-2/[0.1] border-light-2/50 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
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
                    className="h-60 w-full  rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Projects;