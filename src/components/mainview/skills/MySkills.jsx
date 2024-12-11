import Skill from "./Skill"
import { TbApi } from "react-icons/tb";
import { RiLoopRightLine } from "react-icons/ri";
import html from "../../../assets/tool-icons/html-logo.png";
import css from "../../../assets/tool-icons/css-logo.png";
import js from "../../../assets/tool-icons/js-logo.png";
import react from "../../../assets/tool-icons/react-logo.png";
import angular from "../../../assets/tool-icons/angular_gradient.png";
import redux from "../../../assets/tool-icons/redux-icon.webp";
import mongo from "../../../assets/tool-icons/mongodb.svg";
import express from "../../../assets/tool-icons/express.png";
import node from "../../../assets/tool-icons/nodejs.png";
import tailwind from "../../../assets/tool-icons/tailwind-logo.png";
import sass from "../../../assets/tool-icons/sass-logo.png";
import bootstrap from "../../../assets/tool-icons/Bootstrap.png";
import github from "../../../assets/tool-icons/github-logo.png";
import bitbucket from "../../../assets/tool-icons/bitbucket-logo.png";
import trello from "../../../assets/tool-icons/trello.svg";
import jira from "../../../assets/tool-icons/jira.png";
import postman from "../../../assets/tool-icons/postman.svg"

export default function MySkills() {
  return (
    <>
      <div className="bg-[#1f0e41] px-8 py-8 my-6 lg:my-20 xs:px-10 lg:px-14 xl:px-20 2xl:px-40 3xl:px-[400px]">
      <div className="flex flex-col gap-1 mb-6 text-center">
        <h2 className="text-white text-2xl font-bold lg:text-[36px]">Skills</h2>
        <p className="text-white font-light lg:text-[20px] lg:leading-[36px]">My current skills (I&apos;m always looking to add to these)</p>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        <Skill logo={html} name={`HTML5`} />
        <Skill logo={css} name={`CSS3`} />
        <Skill logo={js} name={`JavaScript`} />
        <Skill logo={react} name={`React`} />
        <Skill logo={redux} name={`Redux`} />
        <Skill logo={mongo} name={`MongoDB`} />
        <Skill logo={express} name={`Express`} />
        <Skill logo={node} name={`Node JS`} />
        <Skill logo={angular} name={`Beginner Angular`} />
        <Skill logo={tailwind} name={`Tailwind`} />
        <Skill logo={sass} name={`Sass`} />
        <Skill logo={bootstrap} name={`Bootstrap`} />
        <Skill logo={github} name={`Git/Github`} />
        <Skill logo={bitbucket} name={`Bitbucket`} />
        <div className="border w-fit flex items-center gap-2 py-2 px-3 rounded-lg ">
          <div><RiLoopRightLine className="w-[20px] text-white bg-[#2983fd]" /></div>
          <div><p className="text-lg sm:text-xl font-medium text-white">Agile</p></div>
        </div>
        <Skill logo={trello} name={`Trello`} />
        <Skill logo={jira} name={`Jira`} />
        <div className="border w-fit flex items-center gap-2 py-2 px-3 rounded-lg ">
          <div><TbApi className="w-[20px] text-black bg-lime-400" /></div>
          <div><p className="text-lg sm:text-xl font-medium text-white">API&apos;s</p></div>
        </div>
        <Skill logo={postman} name={`Postman`} />
      </div>
    </div>
    </>

  )
}