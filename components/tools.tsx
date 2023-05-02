import styled, { keyframes } from "styled-components";
import Marquee from "react-fast-marquee";
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
import Image from "next/image";
import html from "../public/images/tools/html.png";
import css from "../public/images/tools/css.png";
import javascript from "../public/images/tools/javascript.png";
import typescript from "../public/images/tools/typescript.png";
import react from "../public/images/tools/react.png";
import tailwind from "../public/images/tools/tailwind.png";
import node from "../public/images/tools/node.png";
import mongodb from "../public/images/tools/mongodb.png";
import postgresql from "../public/images/tools/postgresql.png";
import nextjs from "../public/images/tools/nextjs.png";
import git from "../public/images/tools/git.png";

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 1rem;
  min-height: 84px;
  padding: 0 6px;
  box-shadow: rgba(21, 20, 26, 0.1) 0px 30px 60px -12px,
    rgba(21, 20, 26, 0.2) 0px 18px 36px -18px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Tools({ translate }: { translate: Function }) {
  return (
    <section className="pt-16 ">
      <div className="flex place-items-center place-content-center gap-x-1 ">
        <span className="text-sm font-bold">&lt;h2&gt; </span>
        <span className="border-t-2 w-16 border-black"></span>
        <h2 className="font-bold sm:text-5xl text-3xl text-center">
          {translate("tools.title")}
        </h2>
        <span className="border-t-2 w-16 border-black"></span>
        <span className="text-sm font-bold">&lt;h2/&gt;</span>
      </div>
      <Marquee
        style={{ overflow: "visible" }}
        className="select-none text-[48px] py-10"
      >
        <TechItem className="card-shadow rounded-md">
          <div className="flex justify-center">
            <Image src={html} alt="html logo" />
          </div>
          <small className="text-sm">HTML5</small>
        </TechItem>
        <TechItem className="card-shadow rounded-md">
          <div className="flex justify-center">
            <Image src={css} alt="css logo" />
          </div>
          <small className="text-sm">CSS3</small>
        </TechItem>
        <TechItem className="card-shadow rounded-md ">
          <div className="flex justify-center ">
            <Image src={tailwind} alt="express logo" className="mt-3" />
          </div>
          <small className="text-sm">Tailwind</small>
        </TechItem>
        <TechItem className="card-shadow rounded-md">
          <div className="flex justify-center">
            <Image src={javascript} alt="javascript logo" />
          </div>
          <small className="text-sm">JavaScript</small>
        </TechItem>
        <TechItem className="card-shadow rounded-md">
          <div className="flex justify-center">
            <Image src={typescript} alt="typescript logo" />
          </div>
          <small className="text-sm">TypeScript</small>
        </TechItem>
        <TechItem className="card-shadow rounded-md">
          <div className="flex justify-center">
            <Image src={react} alt="react logo" />
          </div>
          <small className="text-sm">React</small>
        </TechItem>
        <TechItem className="card-shadow rounded-md">
          <div className="flex justify-center">
            <Image src={nextjs} alt="nextjs logo" />
          </div>
          <small className="text-sm">Next.js</small>
        </TechItem>
      </Marquee>
      <Marquee direction="right" className="select-none text-[48px] py-10">
        <TechItem className="card-shadow rounded-md">
          <div className="flex justify-center">
            <Image src={node} alt="nodejs logo" />
          </div>
          <small className="text-sm">Node.js</small>
        </TechItem>
        <TechItem className="card-shadow rounded-md">
          <div className="flex justify-center">
            <Image src={mongodb} alt="mongodb logo" />
          </div>
          <small className="text-sm">MongoDB</small>
        </TechItem>
        <TechItem className="card-shadow rounded-md">
          <div className="flex justify-center">
            <Image src={postgresql} alt="postgresql logo" />
          </div>
          <small className="text-sm">Postgresql</small>
        </TechItem>
        <TechItem className="card-shadow rounded-md">
          <div className="flex justify-center">
            <Image src={git} alt="git logo" />
          </div>
          <small className="text-sm">Git</small>
        </TechItem>
      </Marquee>
    </section>
  );
}
