import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { WindupChildren, CharWrapper, Pace } from "windups";
const LineBreaker = dynamic(() => import("./LineBreaker"), {
  ssr: false,
});

const wobble = keyframes`
    0%, 100% {
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
    }

    15% {
        -webkit-transform: translateX(-32px) rotate(-10deg);
        transform: translateX(-32px) rotate(-10deg);
    }

    30% {
        -webkit-transform: translateX(calc(32px / 2)) rotate(10deg);
        transform: translateX(calc(32px / 2)) rotate(10deg);
    }

    45% {
        -webkit-transform: translateX(calc(-32px / 2)) rotate(calc(-10deg / 1.8));
        transform: translateX(calc(-32px / 2)) rotate(calc(-10deg / 1.8));
    }

    60% {
        -webkit-transform: translateX(calc(32px / 3.3)) rotate(calc(10deg / 3));
        transform: translateX(calc(32px / 3.3)) rotate(calc(10deg / 3));
    }

    75% {
        -webkit-transform: translateX(calc(-32px / 5.5)) rotate(calc(-10deg / 5));
        transform: translateX(calc(-32px / 5.5)) rotate(calc(-10deg / 5));
    }
`;

const BoldSpan = styled.span`
  color: #ef6706;
  font-weight: 700;
  animation: ${wobble} 1s ease-in-out;
  transition: scale 0.3s cubic-bezier(0, 0.71, 0.2, 1.01);
  white-space: pre-wrap;

  &&:hover {
    scale: 1.5;
  }
`;

const SmallTextBoldSpan = styled(motion.span)`
  color: #c94900;
  font-weight: 700;
`;

const NormalSpan = styled.span``;

const Button = styled(motion.button)`
  &&:hover {
    border-color: #ef6804;
  }
`;

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

export default function Hero({ translate }: { translate: Function }) {
  const [windowWidth, setWindowWidth] = useState(0);
  const [showinfo, setShowInfo] = useState(false);
  const greetings: string = translate("hero.title.greetings");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    setShowInfo(false);
  }, [greetings]);

  return (
    <section className="relative text-4xl pb-16 min-h-[95vh] pt-6 mx-7 md:pt-24 md:px-20 lg:px-80">
      <div className="flex">
        <LineBreaker
          fontStyle={`${windowWidth < 1024 ? 36 : 96}px Inter`}
          width={windowWidth < 1024 ? 360 : 1600}
        >
          <div className="font-[500] md:text-7xl lg:text-8xl">
            <WindupChildren
              key={greetings}
              onFinished={() => setShowInfo(true)}
            >
              <Pace ms={75}>
                <br className="p-0 m-0" />
                <CharWrapper element={NormalSpan}>
                  {translate("hero.title.greetings")}
                </CharWrapper>
                <br className="p-0 m-0" />
                <div className="flex mb-0">
                  <CharWrapper element={NormalSpan}>
                    {translate("hero.title.1")}
                  </CharWrapper>
                  <CharWrapper element={BoldSpan}>
                    {translate("hero.title.luben")}
                  </CharWrapper>
                </div>
                <div className="flex mb-0">
                  <CharWrapper element={NormalSpan}>
                    {translate("hero.title.2")}
                  </CharWrapper>
                  <CharWrapper element={BoldSpan}>
                    {translate("hero.title.web_developer")}
                  </CharWrapper>
                </div>
              </Pace>
            </WindupChildren>
          </div>
        </LineBreaker>
      </div>
      {showinfo && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          className="mt-10 md:mt-10"
        >
          <motion.p
            variants={itemVariants}
            className="text-lg pt-5 pb-8 md:w-[40ch]"
          >
            {translate("hero.1")}
            <SmallTextBoldSpan>
              {translate("hero.industrious")}
            </SmallTextBoldSpan>
            {translate("hero.2")}
            <SmallTextBoldSpan>{translate("hero.talented")}</SmallTextBoldSpan>
            {translate("hero.3")}
            <SmallTextBoldSpan>{translate("hero.clean")}</SmallTextBoldSpan>
            {translate("hero.4")}{" "}
            <SmallTextBoldSpan>
              {translate("hero.performant")}
            </SmallTextBoldSpan>
            {translate("hero.5")}
            <SmallTextBoldSpan>
              {translate("hero.accessible")}
            </SmallTextBoldSpan>
            {translate("hero.6")}
            <SmallTextBoldSpan>{translate("hero.inovative")}</SmallTextBoldSpan>
            {translate("hero.7")}
          </motion.p>
          <Button
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="text-sm font-semibold border-2 md:border-[3px] border-black max-w-fit rounded-3xl px-5 py-3 md:px-10 md:py-4"
          >
            <a href="mailto:luben.stoyanov.ls@gmail.com?subject=Inquiry">
              {translate("hero.cat-button")}
            </a>
          </Button>
        </motion.div>
      )}
    </section>
  );
}
