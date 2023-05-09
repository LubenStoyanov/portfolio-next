import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MarqueeMobile from "./marqueeMobile";
import MarqueeDesktop from "./marqueeDesktop";

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
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="pt-16 md:pt-32 "
    >
      <div className="">
        <div className="flex place-items-center place-content-center gap-x-1 md:mx-7 md:px-80 ">
          <span className="text-xs font-bold ml-7">&lt;h2&gt; </span>
          <span className="border-t-2 w-[100%] md:w-96 border-black"></span>
          <h2 className="font-bold md:text-5xl text-3xl text-center">
            {translate("tools.title")}
          </h2>
          <span className="border-t-2 w-[100%] md:w-96 border-black"></span>
          <span className="text-xs font-bold mr-7">&lt;h2/&gt;</span>
        </div>
        <div className="pt-12 md:pb-28 md:pt-16 md:px-0">
          <p className="text-center text-xl md:text-3xl font-[500] pb-16">
            What I use to do the work
          </p>
          {windowWidth < 1024 ? <MarqueeMobile /> : <MarqueeDesktop />}
        </div>
      </div>
    </motion.section>
  );
}
