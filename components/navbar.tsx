import Link from "next/link";
import * as Scroll from "react-scroll";
// import { Link } from "react-scroll";

const ScrollLink = Scroll.Link;

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 mx-5 md:mx-20 text-[3vw] md:text-[1vw]  bg-white/30 backdrop-blur-sm">
      <Link href="/" className="text-gray-500  hover:text-black">
        LUBEN STOYANOV
      </Link>
      <ul className="flex space-x-4">
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            offset={-100}
            // href="#about"
            className="text-gray-500 hover:text-black underline underline-offset-2 hover:no-underline"
          >
            ABOUT
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="works"
            smooth={true}
            offset={-100}
            href="#works"
            className="text-gray-500 hover:text-black underline underline-offset-2 hover:no-underline"
          >
            WORKS
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            smooth={true}
            offset={-100}
            href="#contact"
            className="text-gray-500 hover:text-black underline underline-offset-2 hover:no-underline"
          >
            CONTACT
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
}
