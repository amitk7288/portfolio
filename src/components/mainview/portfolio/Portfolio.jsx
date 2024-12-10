import projects from "../../../data/projects";
import ProjectCard from "./projectCard/ProjectCard";

export default function Portfolio() {
  return (
    <div id="projects" className="px-8 my-6 lg:my-20 xs:px-10 lg:px-14 xl:px-20 2xl:px-40 3xl:px-60">
      <div className="flex flex-col gap-1 mb-4">
        <h2 className="text-[#111827] text-2xl font-bold lg:text-[36px]">Portfolio</h2>
        <p className="font-normal text-[#374151] lg:text-[20px] lg:leading-[36px]">A selection of some of my projects</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-6 w-full justify-center">
        {projects.map((p) => (
          <ProjectCard 
            key={p.id} 
            title={p.title} 
            img={p.img} 
            link={p.link}
            desc={p.desc} 
            tools={p.tools} 
          />
        ))}
      </div>
    </div>
  );
}
