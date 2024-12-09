import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { BiSolidEnvelope } from "react-icons/bi";


export default function Footer() {
  return (
   <div className="flex flex-col items-center bg-[#1f0e41] text-white">
    <div id="cta" className="flex flex-col items-center gap-5 px-4 py-12">
      <p className="text-2xl font-light text-center sm:text-3xl md:text-4xl xl:text-[42px]">Great news! I&apos;m available for work.</p>
      <span className="h-0.5 w-[100px] bg-white"></span>
      <p className="md:text-lg">Please feel free to get in touch below:</p>
      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <button className="rounded-md border-2 border-white bg-white text-black px-7 py-3 text-sm tracking-widest">07841 579 569</button>
        <button className="rounded-md border-2 border-white bg-black text-white px-7 py-3 text-sm tracking-widest">amitkadara@gmail.com</button>
      </div>
    </div>
    <div id="info" className="flex flex-col items-center gap-5 py-12 px-6 bg-custom-pattern bg-custom-pos bg-custom-size h-fit w-full">
      <div className="flex items-center gap-4">
        <FaLinkedin className="text-2xl h-7 w-7 object-contain" />
        <FaGithubSquare className="text-2xl h-7 w-7 object-contain" />
        <BiSolidEnvelope className="text-2xl h-7 w-7 object-contain" />
      </div>
      <p className="text-xs">Amit Kadara 2024 | Dev Dreamer</p>
    </div>
   </div>
  )
}