import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { WindupChildren, CharWrapper, Pace } from "windups";

interface Paragraph {
  display: boolean;
}

interface ScrollDown {
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

const pulse = keyframes`
  from {
    opacity: 0;
  }

  75% {
    opacity: 0.75;
  }

  to {
    opacity: 0;
  }
`;

const BoldWords = styled.span`
  color: #ef6706;
  font-weight: 700;
  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-iteration-count: 1;
`;

const Button = styled.button`
  transition: 0.3s ease-in-out 100ms;
  accent-color: black;

  &&:hover {
    border-color: #ef6804;
  }
`;

const Info = styled.div<Paragraph>`
  display: ${(props) => (props.display ? "block" : "none")};
  animation-name: ${fadeIn};
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
`;

const ScrollDown = styled.div<ScrollDown>`
  animation-name: ${pulse};
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

export default function Hero({ translate }: { translate: Function }) {
  const [display, setDisplay] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 1) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const greetings: string = translate("hero.title.greetings");
  const one: string = translate("hero.title.1");
  const luben: string = translate("hero.title.luben");
  const two: string = translate("hero.title.2");
  const webDeveloper: string = translate("hero.title.webDeveloper");

  return (
    <section className="relative text-4xl pb-16 min-h-[95vh] pt-6 mx-7 lg:px-48">
      <div className="lg:px-48 lg:pt-36">
        <div className="flex mt-10 max-w-[40ch]">
          <WindupChildren onFinished={() => setDisplay(true)}>
            <div className="lg:text-7xl">
              <Pace ms={100}>
                <span className="text-xs lg:text-sm font-semibold  relative bottom-2 lg:bottom-4">
                  &lt;h1&gt;
                </span>{" "}
                {greetings}, {one}
                <CharWrapper element={BoldWords}>{luben}</CharWrapper>
                {two}
                <CharWrapper element={BoldWords}>
                  {webDeveloper}
                </CharWrapper>{" "}
                <span className="text-xs text-[#0D0E13] lg:text-sm font-semibold relative bottom-2 lg:bottom-4">
                  &lt;/h1&gt;
                </span>
              </Pace>
            </div>
          </WindupChildren>
        </div>
        <Info display={display} className="mt-20">
          <p className="text-lg pt-5 pb-8 lg:w-[40ch]">
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
          <Button className="text-sm font-semibold border-2 lg:border-[3px] border-black max-w-fit rounded-3xl px-5 py-3 lg:px-10 lg:py-4">
            <a href="mailto:luben.stoyanov.ls@gmail.com?subject=Inquiry">
              {translate("hero.cat-button")}
            </a>
          </Button>
          <ScrollDown
            visible={visible}
            className="absolute bottom-6 lg:bottom-12 right-0 text-sm animate-pulse"
          >
            Scroll Down
          </ScrollDown>
        </Info>
      </div>
    </section>
  );
}
