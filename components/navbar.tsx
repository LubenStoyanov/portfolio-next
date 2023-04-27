import React, { useEffect, useState } from "react";
import * as Scroll from "react-scroll";
// import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
// import { Link } from "react-scroll";

const scrollToTop = () => Scroll.animateScroll.scrollToTop();

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mx-5 pt-2 sm:mx-20 text-[3vw] sm:text-[1.2vw]  bg-white/30 backdrop-blur-sm text-gray-600">
      <a
        onClick={scrollToTop}
        className="hover:text-black hover:underline underline-offset-2 cursor-pointer"
      >
        LUBEN STOYANOV
      </a>
      <ul className="flex space-x-4 z-100">
        <li>
          <Scroll.Link
            to="about"
            smooth={true}
            offset={-50}
            href="#about"
            className="hover:text-black hover:underline underline-offset-2"
          >
            ABOUT
          </Scroll.Link>
        </li>
        <li>
          <Scroll.Link
            to="works"
            smooth={true}
            offset={-50}
            href="#works"
            className=" hover:text-black hover:underline underline-offset-2"
          >
            WORKS
          </Scroll.Link>
        </li>
        <li>
          <Scroll.Link
            to="contact"
            smooth={true}
            href="#contact"
            className=" hover:text-black hover:underline underline-offset-2"
          >
            CONTACT
          </Scroll.Link>
        </li>
      </ul>
    </nav>
  );
}
