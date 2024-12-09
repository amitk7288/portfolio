import About from "./about/About"
import MySkills from "./skills/MySkills"
import Portfolio from "./portfolio/Portfolio"


export default function MainView() {
  return (
    <div>
      <About />
      <MySkills />
      <Portfolio />
    </div>
  )
}