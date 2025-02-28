import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="flex justify-between text-sm py-3 border-b border-gray-800">
      <Link href="#official-videos" className="text-gray-300">
        Official Videos
      </Link>
      <Link href="#merch" className="text-gray-300">
        Merch
      </Link>
      <Link href="#music" className="text-gray-300">
        Music
      </Link>
      <Link href="#keep-up" className="text-gray-300">
        Keep Up To Date
      </Link>
      <Link href="#more" className="text-gray-300">
        More
      </Link>
    </nav>
  )
}

