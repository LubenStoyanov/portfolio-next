// import { useState } from "react";
import * as Scroll from "react-scroll";
import { useRouter } from "next/router";
// import { SlClose } from "react-icons/sl";
const scrollToTop = () => Scroll.animateScroll.scrollToTop();

export default function Navbar({ translate }: { translate: Function }) {
  const { locale, push } = useRouter();
  // const [visibleMenu, setVisbileMenu] = useState(false);

  const toggleLanguage = () => {
    if (locale === "en") return push("/", undefined, { locale: "de" });
    if (locale === "de") return push("/", undefined, { locale: "en" });
  };

  // const showMenu = () => {
  //   console.log(visibleMenu);
  //   setVisbileMenu((v) => !v);
  // };

  return (
    <>
      <nav className="hidden lg:flex justify-between lg:pt-10 lg:px-16 text-lg font-semibold border-t-2 ">
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
      {/* <nav
        style={{ zIndex: -999 }}
        className={`fixed bottom-0 left-0 right-0 lg:hidden flex justify-between items-center h-12 font-semibold bg-white border-t-2 border-gray`}
      >
        <a

          onClick={scrollToTop}
          className="  hover:text-black hover:underline underline-offset-2 cursor-pointer "
        >
          Luben Stoyanov
        </a>
        <button className="mr-5" onClick={showMenu}>
          Menu
        </button>
      </nav> */}
      {/* <nav
        className={`${
          visibleMenu ? "block" : "hidden"
        } flex items-center justify-center  lg:hidden text-base font-semibold text-gray-700 h-32 bg-white border-t-2 border-gray-300 `}
      >
        <ul className="grid grid-rows-2 grid-flow-col gap-5 justify-around z-100">
          <li
            onClick={scrollToTop}
            className=" px-[2px] text-center underline underline-offset-2"
          >
            <a className=" cursor-pointer ">{translate("homeNavLink")}</a>
          </li>
          <li className=" px-[2px] text-center underline underline-offset-2">
            <Scroll.Link to="about" smooth={true} offset={-50} href="#about">
              {translate("aboutNavLink")}
            </Scroll.Link>
          </li>
          <li className=" px-[2px] text-center underline underline-offset-2">
            <Scroll.Link to="works" smooth={true} offset={-50} href="#works">
              {translate("worksNavLink")}
            </Scroll.Link>
          </li>
          <li className=" px-[2px] text-center underline underline-offset-2">
            <Scroll.Link
              to="contact"
              smooth={true}
              offset={-100}
              href="#contact"
            >
              {translate("contactNavLink")}
            </Scroll.Link>
          </li>
          <button
            onClick={toggleLanguage}
            className=" px-[2px] text-center underline underline-offset-2"
          >
            {locale === "de" ? "DE" : "EN"}
          </button>
          <button
            onClick={showMenu}
            className="w-8 h-8 text-3xl fixed bottom-4 right-4"
          >
            <SlClose />
          </button>
        </ul>
      </nav> */}
    </>
  );
}
