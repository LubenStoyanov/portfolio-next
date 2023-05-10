import Image from "next/image";
import { motion } from "framer-motion";
import profileImage from "../public/images/profile-white.png";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const BoldWord = styled(motion.b)`
  color: #c94900;
  opacity: 1;
`;

const NormalText = styled(motion.span)`
  /* animation-name: ${fadeIn};
  animation-duration: 3s;
  animation-timing-function: ease-in-out; */
`;

export default function Profile({ translate }: { translate: Function }) {
  return (
    <section id="about" className="flex flex-col py-16 mx-7 md:px-80 ">
      <motion.div
        initial={{ y: 200, opacity: 0, scale: 0.5 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex place-items-center place-content-center gap-x-1"
      >
        <span className="text-xs font-bold">&lt;h2&gt; </span>
        <span className="border-t-2 w-20 md:w-96 border-black"></span>
        <h2 className="font-bold md:text-5xl text-3xl text-center">
          {translate("about.title")}
        </h2>
        <span className="border-t-2 w-20 md:w-96 border-black"></span>
        <span className="text-xs font-bold">&lt;h2/&gt;</span>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0, scale: 0.5 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex flex-col md:flex-row md:justify-center pt-10"
      >
        <div>
          <p className=" max-w-[40ch]">
            <span className="text-xs font-semibold relative bottom-[2px]">
              &lt;p&gt;
            </span>{" "}
            <NormalText
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
            >
              {translate("about.1")}
            </NormalText>
            <BoldWord className="text-[#c94900]">
              {translate("about.enthusiastic")}
            </BoldWord>
            <NormalText
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
            >
              {translate("about.2")}
            </NormalText>
            <BoldWord className="text-[#c94900]">
              {translate("about.craft")}
            </BoldWord>
            <NormalText
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
            >
              {translate("about.3")}
            </NormalText>
            <BoldWord className="text-[#c94900]">
              {translate("about.grow")}
            </BoldWord>
            <NormalText
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
            >
              {translate("about.4")}
            </NormalText>
            <BoldWord className="text-[#c94900]">
              {translate("about.mindset")}
            </BoldWord>
            <NormalText
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
            >
              {translate("about.5")}
            </NormalText>
            <BoldWord className="text-[#c94900]">
              {translate("about.creative")}
            </BoldWord>
            <NormalText
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
            >
              {translate("about.6")}
            </NormalText>
            <BoldWord className="text-[#c94900]">
              {translate("about.effective")}
            </BoldWord>
            <NormalText
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
            >
              {translate("about.7")}
            </NormalText>
            <BoldWord className="text-[#c94900]">
              {translate("about.joy")}
            </BoldWord>
            <NormalText
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
            >
              {translate("about.8")}{" "}
            </NormalText>
            <span className="text-xs font-semibold relative bottom-[2px]">
              &lt;/p&gt;
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
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
          >
            <Image
              src={profileImage}
              alt="Profile picture of Luben Stoyanov"
              className="w-64 h-64 md:w-64 md:h-64 object-cover rounded-2xl grayscale "
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
