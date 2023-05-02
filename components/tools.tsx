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
import express from "../public/images/tools/html.png";
import node from "../public/images/tools/node.png";
import mongodb from "../public/images/tools/mongodb.png";
import postgresql from "../public/images/tools/postgresql.png";
import nextjs from "../public/images/tools/nextjs.png";
import git from "../public/images/tools/git.png";

const TechItem = styled.div`
  margin: 0 1rem;
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
        <TechItem className="card-shadow rounded-3xl">
          <div className="flex justify-center">
            <Image src={html} alt="html logo" />
          </div>
          <small className="">HTML5</small>
        </TechItem>
        <TechItem className="card-shadow rounded-3xl">
          <div className="flex justify-center">
            <Image src={css} alt="css logo" />
          </div>
          <small className="">CSS3</small>
        </TechItem>
        <TechItem className="card-shadow rounded-3xl">
          <div className="flex justify-center">
            <Image src={javascript} alt="javascript logo" />
          </div>
          <small className="">JavaScript</small>
        </TechItem>
        <TechItem className="card-shadow rounded-3xl">
          <div className="flex justify-center">
            <Image src={typescript} alt="typescript logo" />
          </div>
          <small className="">TypeScript</small>
        </TechItem>
        <TechItem className="card-shadow rounded-3xl">
          <div className="flex justify-center">
            <Image src={react} alt="react logo" />
          </div>
          <small className="">React</small>
        </TechItem>
        <TechItem className="card-shadow rounded-3xl">
          <div className="flex justify-center">
            <Image src={nextjs} alt="nextjs logo" />
          </div>
          <small className="">Next.js</small>
        </TechItem>
      </Marquee>
      <Marquee className="select-none text-[48px] py-10">
        <TechItem className="card-shadow rounded-3xl">
          <div className="flex justify-center">
            <Image src={node} alt="nodejs logo" />
          </div>
          <small className="">Node.js</small>
        </TechItem>
        <TechItem className="card-shadow rounded-3xl">
          <div className="flex justify-center">
            <Image src={express} alt="express logo" />
          </div>
          <small className="">Express</small>
        </TechItem>
        <TechItem className="card-shadow rounded-3xl">
          <div className="flex justify-center">
            <Image src={mongodb} alt="mongodb logo" />
          </div>
          <small className="">MongoDB</small>
        </TechItem>
        <TechItem className="card-shadow rounded-3xl">
          <div className="flex justify-center">
            <Image src={postgresql} alt="postgresql logo" />
          </div>
          <small className="">Postgresql</small>
        </TechItem>
      </Marquee>
    </section>
  );
}
