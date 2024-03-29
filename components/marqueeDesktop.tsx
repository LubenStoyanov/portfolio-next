import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import styled from "styled-components";
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

const TechItem = styled(motion.div)`
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

export default function MarqueeDesktop() {
  return (
    <div className="hidden md:block">
      <Marquee autoFill={true} className="select-none py-12">
        <TechItem
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="card-shadow rounded-md "
        >
          <div className=" flex justify-center">
            <Image className="" src={html} alt="html logo" />
          </div>
          <small className="text-sm">HTML5</small>
        </TechItem>
        <TechItem
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="card-shadow rounded-md"
        >
          <div className=" flex justify-center">
            <Image className="" src={css} alt="css logo" />
          </div>
          <small className="text-sm">CSS3</small>
        </TechItem>
        <TechItem
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="card-shadow rounded-md "
        >
          <div className=" flex justify-center ">
            <Image src={tailwind} alt="express logo" className="mt-3" />
          </div>
          <small className="text-sm">Tailwind</small>
        </TechItem>
        <TechItem
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="card-shadow rounded-md"
        >
          <div className=" flex justify-center">
            <Image className="" src={javascript} alt="javascript logo" />
          </div>
          <small className="text-sm">JavaScript</small>
        </TechItem>
        <TechItem
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="card-shadow rounded-md"
        >
          <div className=" flex justify-center">
            <Image className="" src={typescript} alt="typescript logo" />
          </div>
          <small className="text-sm">TypeScript</small>
        </TechItem>
        <TechItem
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="card-shadow rounded-md"
        >
          <div className=" flex justify-center">
            <Image className="" src={react} alt="react logo" />
          </div>
          <small className="text-sm">React</small>
        </TechItem>
        <TechItem
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="card-shadow rounded-md"
        >
          <div className=" flex justify-center">
            <Image className="" src={nextjs} alt="nextjs logo" />
          </div>
          <small className="text-sm">Next.js</small>
        </TechItem>
        <TechItem
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="hidden md:block card-shadow rounded-md"
        >
          <div className=" flex justify-center">
            <Image className="" src={node} alt="nodejs logo" />
          </div>
          <small className="text-sm">Node.js</small>
        </TechItem>
        <TechItem
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="hidden md:block card-shadow rounded-md"
        >
          <div className=" flex justify-center">
            <Image className="" src={mongodb} alt="mongodb logo" />
          </div>
          <small className="text-sm">MongoDB</small>
        </TechItem>
        <TechItem
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="hidden md:block card-shadow rounded-md"
        >
          <div className=" flex justify-center">
            <Image className="" src={postgresql} alt="postgresql logo" />
          </div>
          <small className="text-sm">Postgresql</small>
        </TechItem>
        <TechItem
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="hidden md:block card-shadow rounded-md"
        >
          <div className=" flex justify-center">
            <Image className="" src={git} alt="git logo" />
          </div>
          <small className="text-sm">Git</small>
        </TechItem>
      </Marquee>
    </div>
  );
}
