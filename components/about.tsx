import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import profileImage from "../public/images/profile-white.png";

export default function About({ translate }: { translate: Function }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="flex flex-col min-h-screen mt-10"
    >
      <h2 className=" font-bold sm:text- mt-10 sm:mt-20 text-center ">
        &lt;{translate("about.title")} /&gt;
      </h2>
      <div className="flex flex-col sm:flex-row mt-5 sm:gap-x-5 sm:mt-10">
        <div className="flex flex-col items-center ">
          <Image
            src={profileImage}
            alt="Profile picture of Luben Stoyanov"
            className="w-64 sm:w-96 h-64 sm:h-96 object-cover rounded-2xl grayscale-[100%]"
            style={{ zIndex: -999 }}
          />
        </div>
        <div className="justify-self-end sm:border-l-2 sm:pl-5">
          <p className="mt-5 max-w-[60ch] sm:text- sm:leading-">
            {translate("about.1")}
            <em className="text-orange-500 mr-1">
              {translate("about.enthusiastic")}
            </em>
            {translate("about.2")}
            <em className="text-orange-500">{translate("about.craft")}</em>
            {translate("about.3")}
            <em className="text-orange-500">{translate("about.grow")}</em>
            {translate("about.4")}
            <em className="text-orange-500">{translate("about.mindset")}</em>
            {translate("about.5")}
            <em className="text-orange-500">{translate("about.creative")}</em>
            {translate("about.6")}
            <em className="text-orange-500 mr-1">
              {translate("about.effective")}
            </em>
            {translate("about.7")}
            <em className="text-orange-500 mr-1">{translate("about.joy")}</em>
            {translate("about.8")}
          </p>
        </div>
      </div>
      <div
        className="flex sm:flex flex-col mt-10 sm:mt-20 text-blue-500 grayscale-[60%]sm:text-[2.5] leading-"
        style={{ zIndex: -9999 }}
      >
        <h3 className="text-blue-500 grayscale-[60%] mb-5 font-bold text-[4vw] sm:text-[2vw] text-center">
          {translate("about.skills")}
        </h3>
        <ul className="flex flex-wrap justify-center gap-5">
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center grayscale-[60%] gap-y-2 "
          >
            <SiHtml5 />
            <small className="text-[4vw] sm:text-">HTML5</small>
          </motion.li>
          <li className="flex flex-col items-center grayscale-[60%] gap-y-2 ">
            <SiCss3 />
            <small className="text-[4vw] sm:text-">CSS3</small>
          </li>
          <li className="flex flex-col items-center grayscale-[60%] gap-y-2 ">
            <SiJavascript />
            <small className="text-[4vw] sm:text-">JavaScript</small>
          </li>
          <li className="flex flex-col items-center grayscale-[60%] gap-y-2 ">
            <SiTypescript />
            <small className="text-[4vw] sm:text-">TypeScript</small>
          </li>
          <li className="flex flex-col items-center grayscale-[60%] gap-y-2 ">
            <SiReact />
            <small className="text-[4vw] sm:text-">React</small>
          </li>
          <li className="flex flex-col items-center grayscale-[60%] gap-y-2 ">
            <TbBrandNextjs />
            <small className="text-[4vw] sm:text-">Next.js</small>
          </li>
          <li className="flex flex-col items-center grayscale-[60%] gap-y-2 ">
            <SiNodedotjs />
            <small className="text-[4vw] sm:text-">Node.js</small>
          </li>
          <li className="flex flex-col items-center grayscale-[60%] gap-y-2 ">
            <SiExpress />
            <small className="text-[4vw] sm:text-">Express</small>
          </li>
          <li className="flex flex-col items-center grayscale-[60%] gap-y-2 ">
            <SiMongodb />
            <small className="text-[4vw] sm:text-">MongoDB</small>
          </li>
          <li className="flex flex-col items-center grayscale-[60%] gap-y-2 ">
            <SiPostgresql />
            <small className="text-[4vw] sm:text-">Postgresql</small>
          </li>
        </ul>
      </div>
    </motion.section>
  );
}

{
  /* <p className="mt-5 max-w-[60ch] sm:text- sm:leading-">
            AS AN <em className="text-orange-500">ENTHUSIASTIC</em> WEB
            DEVELOPER, I VIEW BUILDING WEBSITES AS A{" "}
            <em className="text-orange-500">CRAFT</em> AND I THRIVE ON
            CHALLENGES THAT PUSH ME TO <em className="text-orange-500">GROW</em>
            . I BELIEVE THAT TAKING ON PROJECTS OUTSIDE OF MY COMFORT ZONE IS
            THE BEST WAY TO IMPROVE. THIS{" "}
            <em className="text-orange-500">MINDSET</em> ENCOURAGES ME TO THINK{" "}
            <em className="text-orange-500">CREATIVE</em>LY AND SOLVE PROBLEMS
            IN NEW WAYS, RESULTING IN MORE{" "}
            <em className="text-orange-500">EFFECTIVE</em> AND EN
            <em className="text-orange-500">JOY</em>ABLE USER EXPERIENCES.
          </p> */
}
