import Image from "next/image";
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

export default function About() {
  return (
    <section id="about" className="flex flex-col min-h-screen mt-10 ">
      <h2 className=" font-bold sm:text-[4vw] mt-10 sm:mt-20 text-center">
        &lt;ABOUT /&gt;
      </h2>
      <div className="flex flex-col sm:flex-row mt-5 sm:gap-x-5 sm:mt-10">
        <div className="flex flex-col items-center ">
          <Image
            src={profileImage}
            alt="Profile picture of Luben Stoyanov"
            className="sm:w-96 sm:h-96 object-cover rounded-2xl grayscale-[100%]"
            style={{ zIndex: -999 }}
          />
        </div>
        <div className="justify-self-end sm:border-l-2 sm:pl-5">
          <p className="mt-5 max-w-[60ch] sm:text-[3vw]">
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
          </p>
        </div>
      </div>
      <div
        className="flex sm:flex flex-col mt-10 sm:mt-36 text-blue-500 grayscale-[60%] leading-[4.5vw]"
        style={{ zIndex: -9999 }}
      >
        <h3 className="text-blue-500 grayscale-[60%] mb-5 font-bold text-[4vw] sm:text-[2vw] text-center">
          SKILLS
        </h3>
        <ul className="flex flex-wrap justify-center gap-5">
          <li className="flex flex-col items-center">
            <SiHtml5 />
            <small className="text-[2.5vw] sm:text-[1.5vw]">HTML5</small>
          </li>
          <li className="flex flex-col items-center">
            <SiCss3 />
            <small className="text-[2.5vw] sm:text-[1.5vw]">CSS3</small>
          </li>
          <li className="flex flex-col items-center">
            <SiJavascript />
            <small className="text-[2.5vw] sm:text-[1.5vw]">JavaScript</small>
          </li>
          <li className="flex flex-col items-center">
            <SiTypescript />
            <small className="text-[2.5vw] sm:text-[1.5vw]">TypeScript</small>
          </li>
          <li className="flex flex-col items-center">
            <SiReact />
            <small className="text-[2.5vw] sm:text-[1.5vw]">React</small>
          </li>
          <li className="flex flex-col items-center">
            <TbBrandNextjs />
            <small className="text-[2.5vw] sm:text-[1.5vw]">Next.js</small>
          </li>
          <li className="flex flex-col items-center">
            <SiNodedotjs />
            <small className="text-[2.5vw] sm:text-[1.5vw]">Node.js</small>
          </li>
          <li className="flex flex-col items-center">
            <SiExpress />
            <small className="text-[2.5vw] sm:text-[1.5vw]">Express</small>
          </li>
          <li className="flex flex-col items-center">
            <SiMongodb />
            <small className="text-[2.5vw] sm:text-[1.5vw]">MongoDB</small>
          </li>
          <li className="flex flex-col items-center">
            <SiPostgresql />
            <small className="text-[2.5vw] sm:text-[1.5vw]">Postgresql</small>
          </li>
        </ul>
      </div>
    </section>
  );
}
