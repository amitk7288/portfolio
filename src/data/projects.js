import react from "../assets/tool-icons/react-logo.png";
import angular from "../assets/tool-icons/angular_gradient.png";
import redux from "../assets/tool-icons/redux-icon.webp";
import tailwind from "../assets/tool-icons/tailwind-logo.png";
import vitest from "../assets/tool-icons/vitest.svg";
import cy from "../assets/tool-icons/cypress-logo.png";
import rtl from "../assets/tool-icons/rtl.png";
import msw from "../assets/tool-icons/msw.svg";
import reactIcons from "../assets/tool-icons/react-icons-icon.svg";
import github from "../assets/tool-icons/github-logo.png";
import githubActions from "../assets/tool-icons/github-actions.png";
import azure from "../assets/tool-icons/azure.png";
import bitbucket from "../assets/tool-icons/bitbucket-logo.png";
import js from "../assets/tool-icons/js-logo.png";
import ts from "../assets/tool-icons/ts-logo.svg.png";
import sass from "../assets/tool-icons/sass-logo.png";
import boot from "../assets/tool-icons/Bootstrap.png";
import html from "../assets/tool-icons/html-logo.png";
import api from "../assets/tool-icons/api.png";
import node from "../assets/tool-icons/nodejs.png";
import mongodb from "../assets/tool-icons/mongodb.svg";
import express from "../assets/tool-icons/express.png";
import firebase from "../assets/tool-icons/firebase.png";
import cloudinary from "../assets/tool-icons/cloudinary.webp";
import jira from "../assets/tool-icons/jira.png";
import postman from "../assets/tool-icons/postman.svg";
import nextjs from "../assets/tool-icons/nextjs-logo.png";
import zustand from "../assets/tool-icons/zustand-logo.png";
import tanstackQuery from "../assets/tool-icons/tanstack-query-logo.png";
import prisma from "../assets/tool-icons/prisma-logo.png";
import supabase from "../assets/tool-icons/supabase-logo.avif";
import clerk from "../assets/tool-icons/clerk-logo.png";
import shadcn from "../assets/tool-icons/shad-cn-logo.png";

import nextjsGamedb from "../assets/nextjs-game-db-drk.png";
import mern from "../assets/mern-reed-clone.png";
import gamedb from "../assets/react-game-db-img-drk.png";
import kanban from "../assets/react-kanban-light.png";
import timeline from "../assets/nx-50.png";
import nxjp from "../assets/NX-Journey-Planner.png";


const projects = [
  {
    id: 1,
    title: "Next JS + Typescript Full Stack Game DB",
    img: nextjsGamedb,
    projLink: "https://amits-nextjs-gamedb.vercel.app/",
    gitLink: "https://github.com/amitk7288/nextjs-gamedb",
    desc: `A modern full-stack project I built with Next.js and TypeScript. I decided to use Tanstack Query for smooth data fetching (and caching) and used Zustand to keep state management super simple. Prisma and Supabase power the backend, while Clerk makes authentication a breeze. Styled with Tailwind and dressed up with Shadcn/ui components and React Icons, check it out below!`,
    tools: [
      {id: 1, icon: nextjs, alt: 'NextJS'},
      {id: 2, icon: ts, alt: 'Typescript'},
      {id: 3, icon: prisma, alt: 'Prisma ORM'},
      {id: 4, icon: supabase, alt: 'Supabase'},
      {id: 5, icon: zustand, alt: 'Zustand'},
      {id: 6, icon: tanstackQuery, alt: 'Tanstack Query/React Query'},
      {id: 7, icon: clerk, alt: 'Clerk Auth'},
      {id: 8, icon: shadcn, alt: 'Shad cn'},
      {id: 9, icon: tailwind, alt: 'Tailwind'},
      {id: 10, icon: reactIcons, alt: 'React Icons'},
      {id: 11, icon: api, alt: 'Rest API'},
      {id: 12, icon: github, alt: 'Github'},
    ],
  },
    {
    id: 2,
    title: "React Game DB (API)",
    img: gamedb,
    // projLink: "https://calm-ocean-01a52e803.6.azurestaticapps.net/",
    projLink: "https://amits-react-gamedb.netlify.app/",
    gitLink: "https://github.com/amitk7288/react-game-db",
    desc: `A fun project I built with a modern web stack - React JS, Redux Toolkit for global state management, Tailwind CSS for styling and the RAWG API for Rest API integration. I also used Vitest and RTL for Unit and Integration tests, mocking API calls with MSW, and also used Cypress for e2e testing. I then used Github Actions for CI/CD Pipelines and deployed to Azure. Check it out below!`,
    tools: [
      {id: 1, icon: react, alt: 'React'},
      {id: 2, icon: redux, alt: 'Redux'},
      {id: 3, icon: tailwind, alt: 'Tailwind'},
      {id: 4, icon: vitest, alt: 'Vitest'},
      {id: 5, icon: rtl, alt: 'React Testing Library'},
      {id: 6, icon: msw, alt: 'Mock Service Worker'},
      {id: 7, icon: cy, alt: 'Cypress e2e'},
      {id: 8, icon: githubActions, alt: 'Github Actions'},
      {id: 9, icon: azure, alt: 'Azure - Static Web Apps'},
      {id: 10, icon: reactIcons, alt: 'React Icons'},
      {id: 11, icon: api, alt: 'Rest API'},
      {id: 12, icon: github, alt: 'Github'},
      {id: 13, icon: postman, alt: 'Postman'},
    ],
  },
  {
    id: 3,
    title: "MERN Full Stack Reed Clone",
    img: mern,
    projLink: "https://amits-mern-jobboard-reed-clone.onrender.com/",
    gitLink: "https://github.com/amitk7288/mern-jobBoard-reed-clone",
    desc: `A full-stack MERN web application featuring Google OAuth and JWT for secure authentication, Cloudinary and Multer for file uploads, and bcrypt for password encryption. The app featurs CRUD operations, real-time updates, and a responsive design, delivering a seamless and modern user experience. Please allow up to 1min for the project to load, thank you.`,
    tools: [
      {id: 1, icon: mongodb, alt: 'Mongo DB'},
      {id: 2, icon: express, alt: 'Express'},
      {id: 3, icon: react, alt: 'React'},
      {id: 4, icon: node, alt: 'Node JS'},
      {id: 5, icon: redux, alt: 'Redux'},
      {id: 6, icon: tailwind, alt: 'Tailwind'},
      {id: 7, icon: reactIcons, alt: 'React Icons'},
      {id: 8, icon: api, alt: 'Reed API'},
      {id: 9, icon: firebase, alt: 'Google Firebase'},
      {id: 10, icon: cloudinary, alt: 'Cloudinary'},
      {id: 11, icon: github, alt: 'Github'},
      {id: 12, icon: postman, alt: 'Postman'},
    ],
  },
  {
    id: 4,
    title: "React Kanban Board",
    img: kanban,
    projLink: "https://amits-react-kanbanboard.netlify.app/",
    gitLink: "https://github.com/amitk7288/react-kanban",
    desc: `This project was built from scratch using a modern web stack including React JS, Redux for global state management, React Router DOM for navigation, and Tailwind CSS for styling. Check it out below!`,
    tools: [
      {id: 1, icon: react, alt: 'react'},
      {id: 2, icon: redux, alt: 'redux'},
      {id: 3, icon: tailwind, alt: 'tailwind'},
      {id: 4, icon: reactIcons, alt: 'reactIcons'},
      {id: 5, icon: github, alt: 'github'},
    ],
  }, 
   {
    id: 5,
    title: "National Express Journey Planner (1M + Users)",
    img: nxjp,
    projLink: "https://book.nationalexpress.com/coach/#/choose-journey",
    desc: `I was tasked to work on the National Express Journey Planner, which is used by millions of users. The journey planner itself required me to work with Angular and Sass, and we worked together on this project using Git and BitBucket.`,
    tools: [
      {id: 1, icon: angular, alt: 'angular'},
      {id: 3, icon: ts, alt: 'Typescript'},
      {id: 2, icon: sass, alt: 'sass'},
      {id: 4, icon: bitbucket, alt: 'bitbucket'},
      {id: 5, icon: jira, alt: 'jira'},
    ],
  },
  {
    id: 6,
    title: "National Express 50th Timeline",
    img: timeline,
    projLink: "https://www.nationalexpress.com/en/timeline",
    desc: `I was tasked to develop an interactive timeline to celebrate 50 years of National Express. This project was built in vanilla JS, Sass, Bootstrap for some of the widgets and Glide JS for the interactivity. Check it out below!`,
    tools: [
      {id: 1, icon: html, alt: 'html'},
      {id: 2, icon: sass, alt: 'sass'},
      {id: 3, icon: js, alt: 'javascript'},
      {id: 4, icon: boot, alt: 'bootstrap'},
    ],
  },

];

export default projects;
