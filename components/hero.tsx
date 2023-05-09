import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { WindupChildren, CharWrapper, Pace } from "windups";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
const LineBreaker = dynamic(() => import("./LineBreaker"), {
  ssr: false,
});

interface InfoI {
  showInfo: boolean;
}

interface ScrollDownI {
  visible: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const bubble = keyframes`
  from {
    scale: 1;
  }

  to {
    scale: 1.2;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const BoldSpan = styled.span`
  color: #ef6706;
  font-weight: 700;
  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-iteration-count: 1;
  transition: scale 0.1s ease-in-out;
  /* transform: rotate(0deg); */

  &:hover {
    scale: 1.2;
    animation: ${spin} 1s linear infinite;
  }
`;

const NormalSpan = styled.span``;

const Button = styled(motion.button)`
  &&:hover {
    border-color: #ef6804;
  }
`;

const Info = styled(motion.div)<InfoI>`
  display: ${({ showInfo }) => (showInfo ? "block" : "none")};
  animation-name: ${fadeIn};
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
`;

const ScrollDown = styled.div<ScrollDownI>`
  letter-spacing: 0em;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;

export default function Hero({ translate }: { translate: Function }) {
  const [windowWidth, setWindowWidth] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [visible, setVisible] = useState(true);
  const greetings: string = translate("hero.title.greetings");
  const one: string = translate("hero.title.1");
  const luben: string = translate("hero.title.luben");
  const two: string = translate("hero.title.2");
  const webDeveloper: string = translate("hero.title.webDeveloper");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 1) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      setWindowWidth(window.innerWidth);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [showInfo]);

  useEffect(() => {
    setShowInfo(false);
  }, [greetings]);

  return (
    <section className="relative text-4xl pb-16 min-h-[95vh] pt-6 mx-7 md:pt-24 lg:px-80">
      <div className="flex mt-10 max-w-[40ch]">
        <LineBreaker
          fontStyle={`${windowWidth < 900 ? 36 : 72}px Inter`}
          width={windowWidth < 900 ? 390 : 900}
        >
          <div className="font-[500] md:text-7xl">
            <WindupChildren
              key={greetings}
              onFinished={() => setShowInfo(true)}
            >
              <Pace ms={100}>
                <span className="text-xs md:text-sm font-semibold relative bottom-2">
                  &lt;h1&gt;
                </span>
                <br className="p-0 m-0" />
                <CharWrapper element={NormalSpan}>{greetings},</CharWrapper>
                <br className="p-0 m-0" />
                <div className="flex mb-0">
                  <CharWrapper element={NormalSpan}>{one}</CharWrapper>
                  <CharWrapper element={BoldSpan}>{luben}</CharWrapper>
                </div>
                <div className="flex mb-0">
                  <CharWrapper element={NormalSpan}>{two}</CharWrapper>
                  <CharWrapper element={BoldSpan}>{webDeveloper}</CharWrapper>
                </div>
                <div className="text-xs text-[#0D0E13] md:text-sm font-semibold relative top-1 md:top-4">
                  &lt;/h1&gt;
                </div>
              </Pace>
            </WindupChildren>
          </div>
        </LineBreaker>
      </div>
      <Info showInfo={showInfo} className="mt-20">
        <p className="text-lg pt-5 pb-8 md:w-[40ch]">
          <span className="text-xs font-semibold relative bottom-[2px]">
            &lt;p&gt;
          </span>{" "}
          {translate("hero.1")}
          <span className="text-[#c94900] font-bold">
            {translate("hero.joy")}
          </span>
          {translate("hero.2")}
          <span className="text-[#c94900] font-bold">
            {translate("hero.great")}
          </span>
          {translate("hero.3")}
          <span className="text-[#c94900] font-bold ">
            {translate("hero.meaning")}
          </span>
          {translate("hero.4")}{" "}
          <span className="text-xs font-semibold relative bottom-[2px]">
            &lt;/p&gt;
          </span>
        </p>
        <Button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="text-sm font-semibold border-2 md:border-[3px] border-black max-w-fit rounded-3xl px-5 py-3 md:px-10 md:py-4"
        >
          <a href="mailto:luben.stoyanov.ls@gmail.com?subject=Inquiry">
            {translate("hero.cat-button")}
          </a>
        </Button>
      </Info>
      <ScrollDown
        visible={visible}
        className="absolute bottom-1 md:bottom-8 -right-5 md:right-0 text-sm animate-bounce"
      >
        <span style={{ writingMode: "vertical-rl" }}> scroll down</span>
        <HiOutlineArrowNarrowDown />
      </ScrollDown>
      <ScrollDown
        visible={visible}
        className="absolute bottom-1 md:bottom-8 -left-5 md:left-0 text-sm animate-bounce"
      >
        <span style={{ writingMode: "vertical-rl" }}> scroll down</span>
        <HiOutlineArrowNarrowDown />
      </ScrollDown>
    </section>
  );
}
