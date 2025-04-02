import Skill from "./Skill"
import { TbApi } from "react-icons/tb";
import { RiLoopRightLine } from "react-icons/ri";
import { BsChatDots } from "react-icons/bs";
import { GoCodeReview } from "react-icons/go";
import html from "../../../assets/tool-icons/html-logo.png";
import css from "../../../assets/tool-icons/css-logo.png";
import js from "../../../assets/tool-icons/js-logo.png";
import ts from "../../../assets/tool-icons/ts-logo.svg.png";
import react from "../../../assets/tool-icons/react-logo.png";
import storybook from "../../../assets/tool-icons/storybook.svg";
import bem from "../../../assets/tool-icons/bem.png";
import jest from "../../../assets/tool-icons/jest.png";
import vitest from "../../../assets/tool-icons/vitest.svg";
import cypress from "../../../assets/tool-icons/cypress-logo.png";
import rtl from "../../../assets/tool-icons/rtl.png";
import msw from "../../../assets/tool-icons/msw.svg";
import firebase from "../../../assets/tool-icons/firebase.png";
import githubActions from "../../../assets/tool-icons/github-actions.png";
import azure from "../../../assets/tool-icons/azure.png";
import angular from "../../../assets/tool-icons/angular_gradient.png";
import redux from "../../../assets/tool-icons/redux-icon.webp";
import mongo from "../../../assets/tool-icons/mongodb.svg";
import express from "../../../assets/tool-icons/express.png";
import node from "../../../assets/tool-icons/nodejs.png";
import jwt from "../../../assets/tool-icons/jwt.svg";
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
      <div className="bg-[#1f0e41] px-8 py-8 xs:px-10 lg:px-14 xl:px-20 2xl:px-40 3xl:px-[400px]">
      <div className="flex flex-col gap-1 mb-6 text-center">
        <h2 className="text-white text-3xl font-bold lg:text-[36px]">Skills</h2>
        <p className="text-white font-light lg:text-[20px] lg:leading-[36px]">My current skills (I&apos;m always looking to add to these)</p>
      </div>
      <ul className=" text-white flex flex-col gap-8 antialiased">
        <li>
          <p className="text-[22px] font-semibold tracking-wide mb-3">Core Frontend :</p>
          <div className="flex gap-3 flex-wrap">
            <Skill logo={html} name={`HTML5`} />
            <Skill logo={css} name={`CSS3`} />
            <Skill logo={js} name={`Javascript (ES6+)`} />
            <Skill logo={ts} name={`Typescript`} />
            <Skill logo={react} name={`React`} />
            <Skill logo={angular} name={`Angular`} />
            <Skill logo={redux} name={`Redux Toolkit`} />
            <Skill logo={tailwind} name={`Tailwind`} />
            <Skill logo={sass} name={`Sass`} />
            <Skill logo={bootstrap} name={`Bootstrap`} />
          </div>
        </li>
        <li>
          <p className="text-[22px] font-semibold tracking-wide mb-3">CDD:</p>
          <div className="flex gap-3 flex-wrap">
            <Skill logo={storybook} name={`Storybook`} />
            <Skill logo={bem} name={`BEM`} />
          </div>
        </li>
        <li>
          <p className="text-[22px] font-semibold tracking-wide mb-3">Testing :</p>
          <div className="flex gap-3 flex-wrap">
            <Skill logo={vitest} name={`Vitest`} />
            <Skill logo={jest} name={`Jest`} />
            <Skill logo={cypress} name={`Cypress`} />
            <Skill logo={rtl} name={`React Testing Library`} />
            <Skill logo={msw} name={`Mock Service Worker`} />
            <Skill logo={storybook} name={`Storybook`} />
          </div>
        </li>
        <li>
          <p className="text-[22px] font-semibold tracking-wide mb-3">CI/CD Pipelines :</p>
          <div className="flex gap-3 flex-wrap">
            <Skill logo={githubActions} name={`Github Actions`} />
          </div>
        </li>
        <li>
          <p className="text-[22px] font-semibold tracking-wide mb-3">Cloud Computing :</p>
          <div className="flex gap-3 flex-wrap">
            <Skill logo={azure} name={`Microsoft Azure`} />
          </div>
        </li>
        <li>
          <p className="text-[22px] font-semibold tracking-wide mb-3">Version Control :</p>
          <div className="flex gap-3 flex-wrap">
            <Skill logo={github} name={`Git/Github`} />
            <Skill logo={bitbucket} name={`Bitbucket`} />
          </div>
        </li>
        <li>
          <p className="text-[22px] font-semibold tracking-wide mb-3">Backend / Auth :</p>
          <div className="flex gap-3 flex-wrap">
            <Skill logo={node} name={`Node JS`} />
            <Skill logo={express} name={`Express`} />
            <Skill logo={mongo} name={`MongoDB`} />
            <div className="border border-gray-500 w-fit flex items-center gap-2 py-2 px-3 rounded-lg ">
              <div><TbApi className="w-[20px] text-black bg-lime-400" /></div>
              <div><p className="text-lg sm:text-xl font-medium text-white">REST API</p></div>
            </div>
            <Skill logo={jwt} name={`JWT JSON Web Tokens`} />
            <Skill logo={postman} name={`Postman`} />
            <Skill logo={firebase} name={`Firebase`} />
          </div>
        </li>
        <li>
          <p className="text-[22px] font-semibold tracking-wide mb-3">Soft Skills :</p>
          <div className="flex gap-3 flex-wrap">
            <div className="border border-gray-500 w-fit flex items-center gap-2 py-2 px-3 rounded-lg ">
              <div><RiLoopRightLine className="w-[25px] h-[25px] p-1 rounded-sm text-white bg-[#2983fd]" /></div>
              <div><p className="text-lg sm:text-xl font-medium text-white">Agile</p></div>
            </div>
            <Skill logo={trello} name={`Trello`} />
            <Skill logo={jira} name={`Jira`} />
            <div className="border border-gray-500 w-fit flex items-center gap-2 py-2 px-3 rounded-lg ">
              <div><BsChatDots className="w-[25px] h-[25px] p-1 rounded-sm text-white bg-[#792bff]" /></div>
              <div><p className="text-lg sm:text-xl font-medium text-white">Effective communication</p></div>
            </div>
            <div className="border border-gray-500 w-fit flex items-center gap-2 py-2 px-3 rounded-lg ">
              <div><GoCodeReview className="w-[25px] h-[25px] p-1 rounded-sm text-white bg-[#ff8e2b]" /></div>
              <div><p className="text-lg sm:text-xl font-medium text-white">Code Reviews</p></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    </>

  )
}