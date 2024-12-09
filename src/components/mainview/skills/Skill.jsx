export default function Skill({logo, name}) {
  return (
    <div className="border border-gray-400 w-fit flex items-center gap-2 py-2 px-3 rounded-lg ">
      <div><img src={logo} alt={name} className="w-[20px]" /></div>
      <div><p className="text-lg sm:text-xl font-medium text-white">{name}</p></div>
    </div>
  )
}
