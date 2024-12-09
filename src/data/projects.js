import react from "../assets/tool-icons/react-logo.png";
import redux from "../assets/tool-icons/redux-icon.webp";
import tailwind from "../assets/tool-icons/tailwind-logo.png";
import reactIcons from "../assets/tool-icons/react-icons-icon.svg";
import github from "../assets/tool-icons/github-logo.png";
import js from "../assets/tool-icons/js-logo.png";
import sass from "../assets/tool-icons/sass-logo.png";
import boot from "../assets/tool-icons/Bootstrap.png";
import html from "../assets/tool-icons/html-logo.png";
import api from "../assets/tool-icons/api.png";
import node from "../assets/tool-icons/nodejs.png";
import mongodb from "../assets/tool-icons/mongodb.svg";
import express from "../assets/tool-icons/express.png";
import firebase from "../assets/tool-icons/firebase.png";
import cloudinary from "../assets/tool-icons/cloudinary.webp";

import mern from "../assets/mern-reed-clone.png";
import gamedb from "../assets/react-game-db-img-drk.png";
import kanban from "../assets/react-kanban-light.png";
import timeline from "../assets/nx-50.png";


const projects = [
  {
  id: 1,
  title: "MERN Full Stack Reed Clone",
  img: "src/assets/mern-reed-clone.png",
  link: mern,
  desc: `A full-stack MERN web application featuring Google OAuth and JWT for secure authentication, Cloudinary and Multer for file uploads, and bcrypt for password encryption. The app featurs CRUD operations, real-time updates, and a responsive design, delivering a seamless and modern user experience.`,
  tools: [
    {id: 1, icon: mongodb, alt: 'Mongo DB'},
    {id: 1, icon: express, alt: 'Express'},
    {id: 1, icon: react, alt: 'React'},
    {id: 3, icon: node, alt: 'Node JS'},
    {id: 2, icon: redux, alt: 'Redux'},
    {id: 4, icon: tailwind, alt: 'Tailwind'},
    {id: 5, icon: reactIcons, alt: 'React Icons'},
    {id: 5, icon: api, alt: 'Reed API'},
    {id: 5, icon: firebase, alt: 'Google Firebase'},
    {id: 5, icon: cloudinary, alt: 'Cloudinary'},
    {id: 6, icon: github, alt: 'Github'},
  ],
  },
    {
    id: 2,
    title: "React Game DB (API)",
    img: gamedb,
    link: "https://amits-react-gamedb.netlify.app/",
    desc: `A fun project I built with a modern web stack - React JS, Redux for global state management, React Router for navigation, Tailwind CSS for styling and the RAWG API. Check it out below!`,
    tools: [
      {id: 1, icon: react, alt: 'React'},
      {id: 2, icon: redux, alt: 'Redux'},
      {id: 3, icon: tailwind, alt: 'Tailwind'},
      {id: 4, icon: reactIcons, alt: 'React Icons'},
      {id: 5, icon: api, alt: 'RAWG API'},
      {id: 6, icon: github, alt: 'Github'},
    ],
  },
  {
    id: 3,
    title: "React Kanban Board",
    img: kanban,
    link: "https://amits-react-kanbanboard.netlify.app/",
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
    id: 4,
    title: "National Express 50th Timeline",
    img: timeline,
    link: "https://www.nationalexpress.com/en/timeline",
    desc: `I was tasked to develop an interactive timeline to celebrate 50 years of National Express. This project was built in vanilla JS, Sass, Bootstrap for some of the widgets and Glide JS for the interactivity. Check it out below!`,
    tools: [
      {id: 1, icon: html, alt: 'html'},
      {id: 2, icon: sass, alt: 'sass'},
      {id: 2, icon: js, alt: 'javascript'},
      {id: 4, icon: boot, alt: 'bootstrap'},
    ],
  },
];

export default projects;
