import { useState } from "react";
import * as Scroll from "react-scroll";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import zIndex from "@mui/material/styles/zIndex";

const scrollToTop = () => Scroll.animateScroll.scrollToTop();

export default function Navbar({ translate }: { translate: Function }) {
  const { locale, push } = useRouter();
  const [visibleMenu, setVisbileMenu] = useState(false);

  const toggleLanguage = () => {
    if (locale === "en") return push("/", undefined, { locale: "de" });
    if (locale === "de") return push("/", undefined, { locale: "en" });
  };

  const showMenu = () => {
    console.log(visibleMenu);
    setVisbileMenu((v) => !v);
  };

  return (
    <>
      <nav className="hidden sm:flex justify-between items-center h-12 sm:pt-5 text-md sm:px-24  font-semibold sm:text-xl bg-white text-gray-600 border-t-2 sm:border-b-2">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="ml-5  hover:text-black hover:underline underline-offset-2 cursor-pointer "
        >
          LUBEN STOYANOV
        </motion.a>
        <ul className="flex z-100 divide-x-2 divide">
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Scroll.Link
              to="about"
              smooth={true}
              offset={-50}
              href="#about"
              className="hover:text-black hover:underline underline-offset-2 px-2"
            >
              {translate("aboutNavLink")}
            </Scroll.Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Scroll.Link
              to="works"
              smooth={true}
              offset={-50}
              href="#works"
              className=" hover:text-black hover:underline underline-offset-2 px-2"
            >
              {translate("worksNavLink")}
            </Scroll.Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Scroll.Link
              to="contact"
              smooth={true}
              offset={-100}
              href="#contact"
              className=" hover:text-black hover:underline underline-offset-2 px-2"
            >
              {translate("contactNavLink")}
            </Scroll.Link>
          </motion.li>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleLanguage}
            className="mr-2 sm:mr-0 text-xs hover:text-black hover:underline underline-offset-2 px-2"
          >
            {locale === "en" ? "de" : "en"}
          </motion.button>
        </ul>
      </nav>
      <nav
        style={{ zIndex: -999 }}
        className={`fixed bottom-0 left-0 right-0 sm:hidden flex justify-between items-center h-12 font-semibold bg-white border-t-2 border-gray`}
      >
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="ml-5  hover:text-black hover:underline underline-offset-2 cursor-pointer "
        >
          LUBEN STOYANOV
        </motion.a>
        <button className="mr-5" onClick={showMenu}>
          Menu
        </button>
      </nav>
      <nav
        className={`${
          visibleMenu ? "block" : "hidden"
        } sm:hidden flex items-center text-md font-semibold text-gray-700 h-16 bg-white border-t-2 border-gray-900 rounded-t-lg`}
      >
        {/* <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="ml-5 cursor-pointer "
        >
          LUBEN STOYANOV
        </motion.a> */}
        <ul className="flex z-100 ">
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Scroll.Link
              to="about"
              smooth={true}
              offset={-50}
              href="#about"
              className=" px-2"
            >
              {translate("aboutNavLink")}
            </Scroll.Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Scroll.Link
              to="works"
              smooth={true}
              offset={-50}
              href="#works"
              className="  px-2"
            >
              {translate("worksNavLink")}
            </Scroll.Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Scroll.Link
              to="contact"
              smooth={true}
              offset={-100}
              href="#contact"
              className="  px-2"
            >
              {translate("contactNavLink")}
            </Scroll.Link>
          </motion.li>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleLanguage}
            className="mr-2 sm:mr-0 text-sm  px-2"
          >
            {locale === "en" ? "de" : "en"}
          </motion.button>
        </ul>
        <motion.button
          onClick={showMenu}
          className="w-8 h-8 text-lg fixed bottom-4 right-4 border-2 border-gray-700 rounded-full animate-pulse"
        >
          X
        </motion.button>
      </nav>
    </>
  );
}
