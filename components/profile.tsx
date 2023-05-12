import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import profileImage from "../public/images/profile-white.png";
import styled, { keyframes } from "styled-components";

const BoldWord = styled(motion.b)`
  color: #c94900;
  opacity: 1;
`;

const NormalText = styled(motion.span)``;

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible,
};

export default function Profile({ translate }: { translate: Function }) {
  return (
    <section id="about" className="flex flex-col py-16 mx-7 lg:px-80 ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        viewport={{ amount: 0.5 }}
        className="flex flex-col lg:flex-row lg:justify-center items-center"
      >
        <motion.div>
          <motion.div
            variants={itemVariants}
            className="flex place-items-center place-content-center gap-x-1"
          >
            <h2 className="font-bold lg:text-5xl text-3xl text-center">
              {translate("about.title")}
            </h2>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col lg:flex-row lg:justify-center pt-10 gap-x-5"
          >
            <p className="max-w-[60ch]">
              <NormalText
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
              >
                {translate("about.1")}
              </NormalText>
              <BoldWord className="text-[#c94900]">
                {translate("about.joy")}
              </BoldWord>
              <NormalText
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
              >
                {translate("about.2")}
              </NormalText>
              <BoldWord className="text-[#c94900]">
                {translate("about.great")}
              </BoldWord>
              <NormalText
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
              >
                {translate("about.3")}
              </NormalText>
              <BoldWord className="text-[#c94900]">
                {translate("about.meaning")}
              </BoldWord>
              <NormalText
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
              >
                {translate("about.4")}
              </NormalText>
              <BoldWord className="text-[#c94900]">
                {translate("about.enthusiastic")}
              </BoldWord>
              <NormalText
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
              >
                {translate("about.5")}
              </NormalText>
              <BoldWord className="text-[#c94900]">
                {translate("about.craft")}
              </BoldWord>
              <NormalText
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
              >
                {translate("about.6")}
              </NormalText>
              <BoldWord className="text-[#c94900]">
                {translate("about.grow")}
              </BoldWord>
              <NormalText
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
              >
                {translate("about.7")}
              </NormalText>
              <BoldWord className="text-[#c94900]">
                {translate("about.mindset")}
              </BoldWord>
              <NormalText
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
              >
                {translate("about.8")}{" "}
              </NormalText>
              <BoldWord className="text-[#c94900]">
                {translate("about.creative")}
              </BoldWord>
              <NormalText
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
              >
                {translate("about.9")}{" "}
              </NormalText>
              <BoldWord className="text-[#c94900]">
                {translate("about.effective")}
              </BoldWord>
              <NormalText
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
              >
                {translate("about.10")}{" "}
              </NormalText>
              <BoldWord className="text-[#c94900]">
                {translate("about.enjoyable")}
              </BoldWord>
              <NormalText
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
              >
                {translate("about.11")}{" "}
              </NormalText>
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, scale: 0.75 }}
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
          className="self-center lg:self-end mt-10 md:mt-0"
        >
          <Image
            src={profileImage}
            alt="Profile picture of Luben Stoyanov"
            className="w-64 h-64 md:w-64 md:h-64 object-cover rounded-2xl grayscale"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
