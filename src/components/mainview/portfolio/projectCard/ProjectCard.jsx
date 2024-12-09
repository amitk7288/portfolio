

export default function ProjectCard({title, img, desc, tools, link}) {
  return (
    <div className="cursor-pointer h-[100%]">
      <div className="grid w-full overflow-hidden rounded-[10px] bg-[#1f0e41] text-drkcol outline outline-neutral-300">
        {/* Image Section */}
        <div className="relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden">
          <img
            src={img}
            alt="project image"
            className="w-full object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="flex flex-col gap-[10px] p-[15px] h-[300px] justify-between">
          <div>
          <div className="grid grid-cols-1">
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          </div>
          <p className="text-sm text-white leading-relaxed font-light 2xl:text-base">{desc} <br/></p>
          </div>


          {/* Tools Section */}
          <div className="flex flex-col gap-3 justify-between cursor-default">
            <ul className="flex items-center justify-center gap-4 list-none sm:justify-start">
              {tools.map((t) => (
                <li key={t.id}>
                  <img src={t.icon} alt={t.alt} title={t.alt} className="h-6 w-6 object-contain" />
                </li>
              ))}
            </ul>
            <a href={link} target="_blank" className="text-center text-lg cursor-pointer transition-colors duration-400 ease-in-out bg-[#365dff] text-white py-1.5 px-4 rounded-md font-medium hover:bg-[#3690ff]">
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
