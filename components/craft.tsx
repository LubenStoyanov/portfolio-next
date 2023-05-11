import { motion } from "framer-motion";
import Projects from "./projects";
import styled from "styled-components";

const NormalText = styled(motion.span)``;

export default function Works({ translate }: { translate: Function }) {
  return (
    <section id="works" className="flex flex-col">
      <div className=" md:px-80  md:mx-0 bg-[#15141a]">
        <div className=" text-white pt-16 ">
          <div className="flex place-items-center place-content-center gap-x-1 ">
            <h2 className="font-bold md:text-5xl text-3xl text-center">
              {translate("craft.title")}
            </h2>
          </div>
          <div className="md:flex justify-center gap-x-5 pt-10">
            <div className="mx-7 pb-16">
              <p className="md:max-w-[60ch] ">
                <NormalText
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
                >
                  {translate("craft.1")}
                </NormalText>
                <b className="text-[#EF6706]">{translate("craft.work")}</b>
                <NormalText
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
                >
                  {translate("craft.2")}
                </NormalText>
                <b className="text-[#EF6706]">{translate("craft.ideas")}</b>
                <NormalText
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
                >
                  {translate("craft.3")}{" "}
                </NormalText>
                <b className="text-[#EF6706]">{translate("craft.concepts")}</b>
                <NormalText
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
                >
                  {translate("craft.4")}
                </NormalText>
                <b className="text-[#EF6706]">{translate("craft.exploring")}</b>
                <NormalText
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
                >
                  {translate("craft.5")}
                </NormalText>
                <b className="text-[#EF6706]">{translate("craft.learning")}</b>
                <NormalText
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
                >
                  {translate("craft.6")}
                </NormalText>
                <b className="text-[#EF6706]">{translate("craft.building")}</b>
                <NormalText
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
                >
                  {translate("craft.7")}
                </NormalText>
                <b className="text-[#EF6706]">{translate("craft.creating")}</b>
                <NormalText
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
                >
                  {translate("craft.8")}
                </NormalText>
                <b className="text-[#EF6706]">{translate("craft.thought")}</b>
                <NormalText
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
                >
                  {translate("craft.9")}
                </NormalText>
                <b className="text-[#EF6706]">{translate("craft.ux")}</b>
                <NormalText
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
                >
                  {translate("craft.10")}
                </NormalText>
                <b className="text-[#EF6706]">{translate("craft.intuitive")}</b>
                <NormalText
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
                >
                  {translate("craft.11")}{" "}
                </NormalText>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 bg-[#F9FAFE]">
        <h2 className=" text-lg md:text text-center ">Works</h2>
        <p className="font-[500] text-center text-2xl md:text-4xl ">
          Some of the good stuff
        </p>
      </div>
      <div className="flex flex-col items-center bg-[#F9FAFE] mb-16 ">
        <Projects />
      </div>
    </section>
  );
}
