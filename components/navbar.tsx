// import { useState } from "react";
import * as Scroll from "react-scroll";
import { useRouter } from "next/router";
// import { SlClose } from "react-icons/sl";
const scrollToTop = () => Scroll.animateScroll.scrollToTop();

export default function Navbar({ translate }: { translate: Function }) {
  const { locale, push } = useRouter();

  const toggleLanguage = () => {
    if (locale === "en") return push("/", undefined, { locale: "de" });
    if (locale === "de") return push("/", undefined, { locale: "en" });
  };

  return (
    <>
      <nav className="hidden lg:flex justify-between lg:py-5 lg:px-16 text-lg font-semibold lg:border-b-[1px] lg:border-black lg:mx-7">
        <a
          onClick={scrollToTop}
          className="  hover:text-black hover:underline underline-offset-2 cursor-pointer "
        >
          Luben Stoyanov
        </a>
        <ul className="flex z-100 gap-x-4">
          <li>
            <Scroll.Link
              to="about"
              smooth={true}
              offset={-50}
              href="#about"
              className="hover:text-black hover:underline underline-offset-2 "
            >
              {translate("aboutNavLink")}
            </Scroll.Link>
          </li>
          <li>
            <Scroll.Link
              to="works"
              smooth={true}
              offset={-50}
              href="#works"
              className=" hover:text-black hover:underline underline-offset-2 "
            >
              {translate("worksNavLink")}
            </Scroll.Link>
          </li>
          <li>
            <Scroll.Link
              to="contact"
              smooth={true}
              offset={-100}
              href="#contact"
              className=" hover:text-black hover:underline underline-offset-2 "
            >
              {translate("contactNavLink")}
            </Scroll.Link>
          </li>
          <button
            onClick={toggleLanguage}
            className="text-sm hover:text-black hover:underline underline-offset-2 "
          >
            {locale === "en" ? "DE" : "EN"}
          </button>
        </ul>
      </nav>
      <nav className="lg:hidden mx-7">
        <ul className="flex justify-between text-sm pt-4">
          <li></li>
          <li className="justify-self-end">
            <button
              onClick={toggleLanguage}
              className="text-center underline underline-offset-2"
            >
              {locale === "en" ? "DE" : "EN"}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
