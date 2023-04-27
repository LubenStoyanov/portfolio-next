import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as Scroll from "react-scroll";
// import { Link } from "react-scroll";

const ScrollLink = Scroll.Link;

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mx-5 pt-2 sm:mx-20 text-[3vw] sm:text-[1.2vw]  bg-white/30 backdrop-blur-sm text-gray-600 ">
      <Link href="/" className="hover:text-black">
        LUBEN STOYANOV
      </Link>
      <ul className="flex space-x-4">
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            offset={-50}
            href="#about"
            className="hover:text-black hover:underline underline-offset-2"
          >
            ABOUT
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="works"
            smooth={true}
            offset={-50}
            href="#works"
            className=" hover:text-black hover:underline underline-offset-2"
          >
            WORKS
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            smooth={true}
            href="#contact"
            className=" hover:text-black hover:underline underline-offset-2"
          >
            CONTACT
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
}
