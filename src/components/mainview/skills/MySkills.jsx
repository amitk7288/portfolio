import Skill from "./Skill"
import { TbApi } from "react-icons/tb";
import { RiLoopRightLine } from "react-icons/ri";

export default function MySkills() {
  return (
    <>
      <div className="bg-[#1f0e41] px-8 py-8 my-6 lg:my-20 xs:px-10 lg:px-14 xl:px-20 2xl:px-40 3xl:px-[400px]">
      <div className="flex flex-col gap-1 mb-6 text-center">
        <h2 className="text-white text-2xl font-bold lg:text-[36px]">Skills</h2>
        <p className="text-white font-light lg:text-[20px] lg:leading-[36px]">My current skills (I&apos;m always looking to add these)</p>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        <Skill logo="src/assets/tool-icons/html-logo.png" name={`HTML5`} />
        <Skill logo="src/assets/tool-icons/css-logo.png" name={`CSS3`} />
        <Skill logo="src/assets/tool-icons/js-logo.png" name={`JavaScript`} />
        <Skill logo="src/assets/tool-icons/react-logo.png" name={`React`} />
        <Skill logo="src/assets/tool-icons/redux-icon.webp" name={`Redux`} />
        <Skill logo="src/assets/tool-icons/mongodb.svg" name={`MongoDB`} />
        <Skill logo="src/assets/tool-icons/express.png" name={`Express`} />
        <Skill logo="src/assets/tool-icons/nodejs.png" name={`Node JS`} />
        <Skill logo="src/assets/tool-icons/tailwind-logo.png" name={`Tailwind`} />
        <Skill logo="src/assets/tool-icons/sass-logo.png" name={`Sass`} />
        <Skill logo="src/assets/tool-icons/Bootstrap.png" name={`Bootstrap`} />
        <Skill logo="src/assets/tool-icons/github-logo.png" name={`Git/Github`} />
        <Skill logo="src/assets/tool-icons/bitbucket-logo.png" name={`Bitbucket`} />
        <div className="border w-fit flex items-center gap-2 py-2 px-3 rounded-lg ">
          <div><RiLoopRightLine className="w-[20px] text-white bg-[#2983fd]" /></div>
          <div><p className="text-lg sm:text-xl font-medium text-white">Agile</p></div>
        </div>
        <Skill logo="src/assets/tool-icons/trello.svg" name={`Trello`} />
        <Skill logo="src/assets/tool-icons/jira.png" name={`Jira`} />
        <div className="border w-fit flex items-center gap-2 py-2 px-3 rounded-lg ">
          <div><TbApi className="w-[20px] text-black bg-lime-400" /></div>
          <div><p className="text-lg sm:text-xl font-medium text-white">API&apos;s</p></div>
        </div>
      </div>
    </div>
    </>

  )
}