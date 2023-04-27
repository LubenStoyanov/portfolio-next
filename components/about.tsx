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
    <section
      id="about"
      className="flex flex-col justify-center min-h-screen max-w-screen "
    >
      <h2 className="mt-5 font-bold text-center">About Me</h2>
      <div className="sm:flex gap-x-12 mt-2 text-[4vw] sm:text-[2vw]">
        <Image
          src={profileImage}
          alt="Profile picture of Luben Stoyanov"
          className="sm:w-96 sm:h-96 sm:mr-28 object-cover rounded-2xl grayscale-[100%] "
          style={{ zIndex: -999 }}
        />
      </div>
      <div className="justify-self-start">
        <p className="mt-5 max-w-[25ch]">
          {/* max-w-[25ch] */}
          AS A <em className="text-orange-500">ENTHUSIASTIC</em> WEB DEVELOPER,
          I VIEW BUILDING WEBSITES AS A{" "}
          <em className="text-orange-500">CRAFT</em> AND I THRIVE ON CHALLENGES
          THAT PUSH ME TO <em className="text-orange-500">GROW</em>. I BELIEVE
          THAT TAKING ON PROJECTS OUTSIDE OF MY COMFORT ZONE IS THE BEST WAY TO
          IMPROVE. THIS <em className="text-orange-500">MINDSET</em> ENCOURAGES
          ME TO THINK <em className="text-orange-500">CREATIVE</em>LY AND SOLVE
          PROBLEMS IN NEW WAYS, RESULTING IN MORE{" "}
          <em className="text-orange-500">EFFECTIVE</em> AND EN
          <em className="text-orange-500">JOY</em>ABLE USER EXPERIENCES.
        </p>
      </div>
      <h3 className="text-blue-500 grayscale-[60%] mt-10 font-bold text-center">
        SKILLS
      </h3>
      <div
        className="flex sm:flex sm:flex-col mt-10  text-blue-500 grayscale-[60%] leading-[4.5vw] "
        style={{ zIndex: -9999 }}
      >
        <ul className="flex flex-wrap justify-center text-[10vw] gap-5">
          <li>
            <SiHtml5 />
          </li>
          <li>
            <SiCss3 />
          </li>
          <li>
            <SiJavascript />
          </li>
          <li>
            <SiTypescript />
          </li>
          <li>
            <SiReact />
          </li>
          <li>
            <TbBrandNextjs />
          </li>
          <li>
            <SiNodedotjs />
          </li>
          <li>
            <SiExpress />
          </li>
          <li>
            <SiMongodb />
          </li>
          <li>
            <SiPostgresql />
          </li>
        </ul>
      </div>
    </section>
  );
}
