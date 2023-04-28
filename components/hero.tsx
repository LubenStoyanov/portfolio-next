import { motion } from "framer-motion";
import * as Scroll from "react-scroll";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="min-h-screen sm:min-h-screen"
    >
      <h1 className="pt-52  text-[10vw] leading-[10vw] sm:text-[5vw] sm:leading-[5vw]">
        HELLO, I&apos;M{" "}
        <a href="#about">
          <motion.em
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-orange-500"
          >
            LUBEN
          </motion.em>
        </a>{" "}
        , A <em className="text-orange-500">WEB DEVELOPER</em> WHO EN
        <em className="text-orange-500">JOY</em>S BUILDING WEBSITES THAT LOOK{" "}
        <em className="text-orange-500">GREAT</em> AND PROVIDE A{" "}
        <em className="text-orange-500">MEANING</em>FUL EXPERIENCE FOR THEIR
        USERS.
      </h1>
    </motion.section>
  );
}

//max-w-[20ch]
