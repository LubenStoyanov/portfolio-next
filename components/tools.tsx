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

export default function Tools({ translate }: { translate: Function }) {
  return (
    <section className="py-16">
      <div className="flex place-items-center place-content-center gap-x-1 ">
        <span className="text-sm font-bold">&lt;h2&gt; </span>
        <span className="border-t-2 w-16 border-black"></span>
        <h2 className="font-bold sm:text-5xl text-3xl text-center">
          {translate("tools.title")}
        </h2>
        <span className="border-t-2 w-16 border-black"></span>
        <span className="text-sm font-bold">&lt;h2/&gt;</span>
      </div>
      <div
        className="flex sm:flex flex-col text-blue-500 pt-10"
        style={{ zIndex: -9999 }}
      >
        <ul className="flex flex-wrap justify-center ">
          <li className="flex flex-col items-center">
            <SiHtml5 />
            <small className="">HTML5</small>
          </li>
          <li className="flex flex-col items-center">
            <SiCss3 />
            <small className="">CSS3</small>
          </li>
          <li className="flex flex-col items-center">
            <SiJavascript />
            <small className="">JavaScript</small>
          </li>
          <li className="flex flex-col items-center">
            <SiTypescript />
            <small className="">TypeScript</small>
          </li>
          <li className="flex flex-col items-center">
            <SiReact />
            <small className="">React</small>
          </li>
          <li className="flex flex-col items-center">
            <TbBrandNextjs />
            <small className="">Next.js</small>
          </li>
          <li className="flex flex-col items-center">
            <SiNodedotjs />
            <small className="">Node.js</small>
          </li>
          <li className="flex flex-col items-center">
            <SiExpress />
            <small className="">Express</small>
          </li>
          <li className="flex flex-col items-center">
            <SiMongodb />
            <small className="">MongoDB</small>
          </li>
          <li className="flex flex-col items-center">
            <SiPostgresql />
            <small className="">Postgresql</small>
          </li>
        </ul>
      </div>
    </section>
  );
}
