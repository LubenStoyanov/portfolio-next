import * as Scroll from "react-scroll";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
const scrollToTop = () => Scroll.animateScroll.scrollToTop();

export default function Navbar({ translate }: { translate: Function }) {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const { locale, push } = useRouter();

  const toggleLanguage = () => {
    if (locale === "en") return push("/", undefined, { locale: "de" });
    if (locale === "de") return push("/", undefined, { locale: "en" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setIsNavbarVisible(
        prevScrollPos > currentScrollPos || currentScrollPos < 10
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <nav
        className={`hidden md:fixed lg:flex top-0 left-0 right-0 z-10  transition-opacity ${
          isNavbarVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }
        } md:justify-between md:py-5 md:px-16 text-lg font-semibold md:border-b-[1px] md:border-black md:mx-7 bg-[#F9FAFE]`}
      >
        <motion.a
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2, letterSpacing: "0.2rem" }}
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
            whileHover={{ scale: 1.2, letterSpacing: "0.2rem" }}
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
            whileHover={{ scale: 1.2, letterSpacing: "0.2rem" }}
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
            whileHover={{ scale: 1.2, letterSpacing: "0.2rem" }}
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
          <motion.li
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2, letterSpacing: "0.2rem" }}
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
            aria-label="Toggle Language"
            onClick={toggleLanguage}
            className="text-sm hover:text-[#ef6706] hover:underline underline-offset-2 self-center  cursor-pointer"
          >
            {locale === "en" ? "DE" : "EN"}
          </motion.li>
        </ul>
      </nav>
      <nav className="lg:hidden mx-7">
        <ul className="flex justify-between text-sm pt-4">
          <li></li>
          <li className="justify-self-end">
            <button
              aria-label="Toggle Language"
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
