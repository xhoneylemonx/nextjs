export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex justify-between items-center h-7">
          <a href="/" className="text-indigo-600 font-bold text-xl">
            หม่าล่ากรุงไทย Portfolio
          </a>
          <div className="flex space-x-9">
            <a href="/" className="text-gray-700 hover:text-indigo-600 transition">Home</a>
            <a href="/about" className="text-gray-700 hover:text-indigo-600 transition">About</a>
            <a href="/contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</a>
            <a href="/team" className="text-gray-700 hover:text-indigo-600 transition">Team</a>
            <a href="/member" className="text-gray-700 hover:text-green-500 transition">Member</a>
            <a href="/admin" className="text-gray-700 hover:text-red-500 transition">Admin</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
