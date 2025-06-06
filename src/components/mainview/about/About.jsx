import { PiUsersThreeFill } from "react-icons/pi";
import { IoVideocam } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import me from "../../../assets/amit.jpg";
import yt from "../../../assets/dd.jpg";

export default function About() {
  return (
    <div id="about" className="px-8 my-6 lg:my-20 flex flex-col gap-10 xs:px-10 lg:px-14 xl:px-20 2xl:px-40 3xl:px-60 lg:gap-24">
      <div className="flex flex-col gap-5">
        {/* <div className="justify-center hidden sm:flex "><img src={me} alt="Amit" className="w-[80%] sm:w-[60%] md:w-[40%] lg:w-[40%] 2xl:w-[80%] rounded-lg shadow-xl object-cover" /></div> */}
        <article className="prose lg:prose-xl prose-gray max-w-full lg:basis-[70%] 2xl:basis-[70%]">
          <h2 className="mb-2">About me</h2>
          <p>As a Senior Frontend Developer with over 10 years of experience, I specialise in building scalable, high-performance web applications using <strong>Next.js</strong>, <strong>React</strong>, <strong>TypeScript</strong>, and <strong>JavaScript (ES6+)</strong>. I focus on creating <strong>responsive, user-friendly interfaces,</strong> optimising performance, and ensuring best practices such as test-driven development <strong>(TDD)</strong> with tools like <strong>Vitest</strong>, <strong>Jest</strong>, <strong>Cypress (e2e)</strong>, <strong>React Testing Library</strong> and <strong>Storybook</strong>. I&apos;m also experienced with the <strong>MERN stack (MongoDB, Express, React, Node.js)</strong>, as well as <strong>PostgreSQL with Prisma and Supabase</strong>. I use <strong>Vite</strong> as my primary build tool and <strong>Github Actions for CI/CD Pipelines</strong>.</p>
          <p>I am passionate about continuous learning - I am currently studying for my <strong>Azure (AZ-900) certification</strong> to deepen cloud expertise. I have experience deploying applications to platforms such as <strong>Azure Static Web Apps, Netlify, and Vercel,</strong> leveraging multi-cloud strategies to enhance scalability and efficiency.  Committed to Agile collaboration, I work cross-functionally to deliver high-quality solutions and stay up to date with the latest industry trends and have been involved at every stage of the <strong>SDLC (Software Development Lifecycle)</strong>.
          </p>
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
              <p className="sm:text-lg 2xl:text-lg 3xl:text-xl">30.3K Subscribers</p>
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