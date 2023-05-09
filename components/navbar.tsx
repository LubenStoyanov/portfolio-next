// import { useState } from "react";
import * as Scroll from "react-scroll";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
const scrollToTop = () => Scroll.animateScroll.scrollToTop();

export default function Navbar({ translate }: { translate: Function }) {
  const { locale, push } = useRouter();

  const toggleLanguage = () => {
    if (locale === "en") return push("/", undefined, { locale: "de" });
    if (locale === "de") return push("/", undefined, { locale: "en" });
  };

  return (
    <>
      <nav className="hidden md:flex justify-between md:py-5 md:px-16 text-lg font-semibold md:border-b-[1px] md:border-black md:mx-7">
        <motion.a
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          href="/"
          onClick={scrollToTop}
          className="  hover:text-[#ef6706] hover:underline underline-offset-2 cursor-pointer "
        >
          Luben Stoyanov
        </motion.a>
        <ul className="flex z-100 gap-x-4">
          <motion.li
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <Scroll.Link
              to="about"
              smooth={true}
              offset={-50}
              href="#about"
              className="hover:text-[#ef6706] hover:underline underline-offset-2 "
            >
              {translate("aboutNavLink")}
            </Scroll.Link>
          </motion.li>
          <motion.li
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <Scroll.Link
              to="works"
              smooth={true}
              offset={-50}
              href="#works"
              className=" hover:text-[#ef6706] hover:underline underline-offset-2 "
            >
              {translate("worksNavLink")}
            </Scroll.Link>
          </motion.li>
          <motion.li
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <Scroll.Link
              to="contact"
              smooth={true}
              offset={-100}
              href="#contact"
              className=" hover:text-[#ef6706] hover:underline underline-offset-2 "
            >
              {translate("contactNavLink")}
            </Scroll.Link>
          </motion.li>
          <button
            aria-label="Toggle Language"
            onClick={toggleLanguage}
            className="text-sm hover:text-[#ef6706] hover:underline underline-offset-2 "
          >
            {locale === "en" ? "DE" : "EN"}
          </button>
        </ul>
      </nav>
      <nav className="md:hidden mx-7">
        <ul className="flex justify-between text-sm pt-4">
          <li></li>
          <motion.li
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            className="justify-self-end"
          >
            <button
              aria-label="Toggle Language"
              onClick={toggleLanguage}
              className="text-center underline underline-offset-2"
            >
              {locale === "en" ? "DE" : "EN"}
            </button>
          </motion.li>
        </ul>
      </nav>
    </>
  );
}
