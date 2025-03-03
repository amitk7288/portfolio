import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { BiSolidEnvelope } from "react-icons/bi";
import { HiOutlineStatusOnline } from "react-icons/hi";


export default function Footer() {
  const currentYear= new Date();
  return (
   <div className="flex flex-col items-center bg-[#1f0e41] text-white">
    <div id="cta" className="flex flex-col items-center gap-5 px-4 py-12">
        <div className="px-3 border-2 rounded-full text-center bg-green-200 border-green-800 text-green-800 flex items-center gap-1">
          <HiOutlineStatusOnline className="text-green-800 text-lg" />
          <p>Available to work</p>
        </div>
      <p className="text-2xl font-light text-center sm:text-3xl md:text-4xl xl:text-[42px]">I&apos;m available to work.</p>
      <span className="h-0.5 w-[100px] bg-white"></span>
      <p className="md:text-lg">Please feel free to get in touch below:</p>
      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <a href="tel:07841578679" className="rounded-md border-2 border-white bg-white text-black px-7 py-3 text-sm tracking-widest">07841 579 569</a>
        <a href="mailto:amitkadara@gmail.com" className="rounded-md border-2 border-white bg-black text-white px-7 py-3 text-sm tracking-widest">amitkadara@gmail.com</a>
      </div>
    </div>
    <div id="info" className="flex flex-col items-center gap-5 py-12 px-6 bg-custom-pattern bg-custom-pos bg-custom-size h-fit w-full">
      <div className="flex items-center gap-4">
         <a href="https://www.linkedin.com/in/amitkadara/" target="_blank" className="cursor-pointer"><FaLinkedin className="text-2xl h-7 w-7 object-contain" /></a>
         <a href="https://github.com/amitk7288" target="_blank" className="cursor-pointer"><FaGithubSquare className="text-2xl h-7 w-7 object-contain" /></a>
         <a href="mailto:amitkadara@gmail.com" target="_blank" className="cursor-pointer"><BiSolidEnvelope className="text-2xl h-7 w-7 object-contain" /></a>
      </div>
      <p className="text-xs">Amit Kadara {currentYear.getFullYear()} | <a href="https://www.youtube.com/@DevDreamer" target="_blank">Dev Dreamer</a> </p>
    </div>
   </div>
  )
}