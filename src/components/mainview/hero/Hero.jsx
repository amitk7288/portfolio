import me from "../../../assets/amit.jpg"
import { HiOutlineStatusOnline } from "react-icons/hi";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-16 px-4 bg-custom-pattern-reverse bg-custom-pos bg-custom-size w-full md:justify-center md:h-[100%] md:gap-3 bg-fixed lg:h-[55%] xl:h-[65%] 2xl:h-[75vh] 2xl:gap-8">
<div className="border-[3px] border-white rounded-full w-[200px] aspect-square max-w-full max-h-[200px] relative">
  <img src={me} alt="Amit" className="object-cover rounded-full w-full h-full"/>
</div>
  <div className="px-3 border-2 rounded-full text-center bg-green-200 border-green-800 text-green-800 flex items-center gap-1">
    <HiOutlineStatusOnline className="text-green-800 text-lg" />
    <p>Available to work</p>
  </div>
      <div className="text-white flex flex-col items-center gap-4">        
        <h1 className="text-center text-[28px] font-light sm:text-[28px]leading-snug md:text-[39px] md:leading-snug lg:text-[42px] lg:leading-tight xl:text-[44px] xl:leading-tight 2xl:text-5xl 2xl:leading-snug">Hi 👋 I&apos;m <b>Amit</b>,<br /> an experienced Web Developer <br /> based in the West Midlands.</h1>
        <p className="text-center md:text-lg xl:text-[20px] 2xl:text-2xl w-[60%]">As a full-stack developer, I enjoy working with the MERN stack (MongoDB, Express.js, React, Node.js). While React remains my primary strength, I am actively broadening my knowledge with Angular and Vue.</p>
        <div className="relative">
          <a href="#about" className="block transition-colors duration-400 ease-in-out mt-10 border-[1.5px] border-white rounded-md px-10 py-2 font-medium tracking-wider hover:bg-white hover:text-[#222222]">LEARN MORE</a>
        </div>
      </div>
    </div>
  )
}
