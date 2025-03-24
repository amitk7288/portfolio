import { PiUsersThreeFill } from "react-icons/pi";
import { IoVideocam } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import me from "../../../assets/amit.jpg";
import yt from "../../../assets/dd.jpg";

export default function About() {
  return (
    <div id="about" className="px-8 my-6 lg:my-20 flex flex-col gap-10 xs:px-10 lg:px-14 xl:px-20 2xl:px-40 3xl:px-60 lg:gap-24">
      <div className="flex flex-col gap-5 lg:flex-row-reverse lg:gap-10 2xl:gap-20">
        <div className="justify-center hidden sm:flex lg:basis-[30%] 2xl:basis-[30%]"><img src={me} alt="Amit" className="w-[80%] sm:w-[60%] md:w-[40%] lg:w-auto 2xl:w-[80%] rounded-lg shadow-xl object-cover" /></div>
        <article className="prose lg:prose-xl prose-gray max-w-full lg:basis-[70%] 2xl:basis-[70%]">
          <h2 className="mb-2">About me</h2>
          <p>With over 10 years of experience in building websites and web applications, I specialise in delivering polished, high-performance solutions using core web technologies like <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, as well as working with the <strong>MERN stack</strong> - <strong>Mongo DB</strong>, <strong>Express</strong>, <strong>Node JS</strong> and <strong>React</strong>. I have been involved at every stage of the <strong>Software Development Lifecycle (SDLC)</strong>, communicating effectively with both technical and non-technical team members.</p>
          <p>I pride myself on attention to detail, ensuring that every element contributes to a seamless user experience. If you&apos;re looking for a developer with a strong technical background, a passion for continuous growth, and a commitment to delivering high-quality solutions, please feel free to get in touch.</p>
          <p>When I&apos;m not coding, I&apos;m a proud dad to a 5-year-old daughter (who keeps me on my toes 😆). I enjoy spending time with my family and reading. I believe balancing work and life gives me fresh perspectives, which I bring into my problem-solving and creativity at work.</p>
        </article>
      </div>
      <div className="flex flex-col gap-5 lg:flex-row-reverse lg:gap-8 2xl:gap-10">
        <article className="prose lg:prose-xl prose-gray max-w-full lg:basis-[45%] xl:basis-[55%]">
          <h2 className="mb-2">Learning and Teaching</h2>
          <p>My drive to continuously learn keeps me updated on the latest industry trends and best practices, enabling me to build creative and efficient projects. I also share my knowledge and teach others on my <a href="https://www.youtube.com/@DevDreamer" target="_blank" className="bg-red-50 text-[#dd0031] font-semibold">YouTube channel - Dev Dreamer</a>, where I make Web Development easy to understand and follow.</p>
          <p>In addition to hands-on development, I am passionate about sharing my knowledge with others. Through my YouTube channel, Dev Dreamer, I strive to make complex web development concepts accessible and easy to understand for aspiring developers. By creating tutorials, coding challenges, and in-depth explanations, I aim to empower individuals to confidently embark on their own web development journeys. This teaching experience not only helps others to grow but also keeps me engaged with the community, receiving valuable feedback and insights that further enhance my skills and understanding of the field.</p>
        </article>
        <div className="lg:basis-[55%] xl:basis-[45%]">
        <div className="flex justify-center">
          <img src={yt} alt={`Amit`} className="rounded-lg shadow-md md:w-[75%] lg:w-full" />
        </div>
        <div className="mt-3 md:w-[75%] md:mx-auto lg:w-full">
          <ul className="flex flex-col gap-5 justify-between text-[#4423fa] sm:flex-row">
            <li className="flex items-center gap-3">
              <IoVideocam className="text-2xl"/>
              <p className="sm:text-lg 2xl:text-lg 3xl:text-xl">109 Uploads</p>
            </li>
            <li className="flex items-center gap-3">
              <PiUsersThreeFill className="text-2xl"/>
              <p className="sm:text-lg 2xl:text-lg 3xl:text-xl">30K Subscribers</p>
            </li>
            <li className="flex items-center gap-3">
              <FaRegEye className="text-2xl"/>
              <p className="sm:text-lg 2xl:text-lg 3xl:text-xl">1.5M Video Views</p>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  )
}