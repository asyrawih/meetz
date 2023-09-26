const menuItem = [
  "Home",
  "About",
  "Projects"
]

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-around bg-gray-400">
        {menuItem.map((item, idx) => (
          <div className="bg-gray-200 px-2 py-3" key={idx}>{item}</div>
        ))}
      </div>
    </div>
  )
}
