import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-7">
          <Link href="/" className="text-indigo-600 font-bold text-xl">
            หม่าล่ากรุงไทย Portfolio
          </Link>
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 transition">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</Link>
            <Link href="/team" className="text-gray-700 hover:text-indigo-600 transition">Team</Link>
            <Link href="/member" className="text-gray-700 hover:text-green-500 transition">Member</Link>
            <Link href="/admin" className="text-gray-700 hover:text-red-500 transition">Admin</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}