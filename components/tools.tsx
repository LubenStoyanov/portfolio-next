import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MarqueeMobile from "./marqueeMobile";
import MarqueeDesktop from "./marqueeDesktop";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible,
};

export default function Tools({ translate }: { translate: Function }) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      viewport={{ amount: 0.5 }}
      className="pt-16 md:pt-32 "
    >
      <motion.div
        variants={itemVariants}
        className="flex place-items-center place-content-center gap-x-1 md:mx-7 md:px-80 "
      >
        <h2 className="font-bold md:text-5xl text-3xl text-center">
          {translate("tools.title")}
        </h2>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="pt-12 md:pb-28 md:pt-16 md:px-0"
      >
        <p className="text-center text-xl md:text-3xl font-[500] pb-16">
          What I use to do the work
        </p>
        {windowWidth < 1024 ? <MarqueeMobile /> : <MarqueeDesktop />}
      </motion.div>
    </motion.section>
  );
}
