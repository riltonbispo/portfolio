import Link from 'next/link'
import { PiAtBold } from 'react-icons/pi'

export default function Navbar() {
  return (
    <header className="py-6 md:px-16 px-6 border-b border-zinc-800 z-30 md:mb-28 mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="hover:text-purple-400 duration-300">
          <span className="flex gap-1 items-center">
            <PiAtBold />
            Rilton Bispo
          </span>
        </Link>
        {/* <nav>
          <ul className="flex items-center gap-x-8">
            <li>
              <Link
                href="/projects"
                className="hover:text-purple-400 duration-300"
              >
                Projetos
              </Link>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  )
}
