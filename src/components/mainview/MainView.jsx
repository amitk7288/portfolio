import About from "./about/About"
import MySkills from "./skills/MySkills"
import Portfolio from "./portfolio/Portfolio"


export default function MainView() {
  return (
    <div className="antialised">
      <MySkills />
      <Portfolio />
      <About />
    </div>
  )
}