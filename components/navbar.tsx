import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center text-[3vw] md:text-[1vw] py-4 mx-4 bg-white border-b border-black">
      <Link href="/" className="text-gray-400  hover:text-gray-700">
        LUBEN STOYANOV
      </Link>
      <ul className="flex space-x-4">
        <li>
          <a href="#about" className="text-gray-400 hover:text-gray-700">
            ABOUT
          </a>
        </li>
        <li>
          <a href="#works" className="text-gray-400 hover:text-gray-700">
            WORKS
          </a>
        </li>
        <li>
          <a href="#contact" className="text-gray-400 hover:text-gray-700">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}
