import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function Skills({ translate }: { translate: Function }) {
  return (
    <motion.section>
      <div className="flex place-items-center place-content-center gap-x-1 pt-20">
        <span className="text-sm font-bold">&lt;h2&gt; </span>
        <span className="border-t-2 w-16 border-black"></span>
        <h2 className="font-bold sm:text-5xl text-3xl text-center">
          {translate("skills.title")}
        </h2>
        <span className="border-t-2 w-16 border-black"></span>
        <span className="text-sm font-bold">&lt;h2/&gt;</span>
      </div>
      <div
        className="flex sm:flex flex-col text-blue-500 grayscale-[60%] pt-10"
        style={{ zIndex: -9999 }}
      >
        <ul className="flex flex-wrap justify-center ">
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center grayscale-[60%] "
          >
            <SiHtml5 />
            <small className="">HTML5</small>
          </motion.li>
          <li className="flex flex-col items-center grayscale-[60%] ">
            <SiCss3 />
            <small className="">CSS3</small>
          </li>
          <li className="flex flex-col items-center grayscale-[60%] ">
            <SiJavascript />
            <small className="">JavaScript</small>
          </li>
          <li className="flex flex-col items-center grayscale-[60%] ">
            <SiTypescript />
            <small className="">TypeScript</small>
          </li>
          <li className="flex flex-col items-center grayscale-[60%] ">
            <SiReact />
            <small className="">React</small>
          </li>
          <li className="flex flex-col items-center grayscale-[60%] ">
            <TbBrandNextjs />
            <small className="">Next.js</small>
          </li>
          <li className="flex flex-col items-center grayscale-[60%] ">
            <SiNodedotjs />
            <small className="">Node.js</small>
          </li>
          <li className="flex flex-col items-center grayscale-[60%] ">
            <SiExpress />
            <small className="">Express</small>
          </li>
          <li className="flex flex-col items-center grayscale-[60%] ">
            <SiMongodb />
            <small className="">MongoDB</small>
          </li>
          <li className="flex flex-col items-center grayscale-[60%] ">
            <SiPostgresql />
            <small className="">Postgresql</small>
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
