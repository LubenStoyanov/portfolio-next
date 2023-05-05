// import TypewriterComponent from "./Typewriter";
import styled from "styled-components";

const Button = styled.button`
  transition: 0.3s ease-in-out 100ms;
  accent-color: black;

  &&:hover {
    border-color: #ef6706;
  }
`;

export default function Hero({ translate }: { translate: Function }) {
  const hero: string = translate("hero.title");

  return (
    <section className="min-h-[240px] text-5xl pb-16 lg:min-h-[100vh] pt-6 mx-7 lg:px-48">
      <div className="min-h-[240px] lg:min-h-[500px] lg:px-48 lg:pt-36">
        <div className="lg:min-h-[300px]">
          <span className="text-xs lg:text-xs font-semibold">&lt;h1&gt;</span>
          <span className="lg:text-7xl">
            {/* <TypewriterComponent hero={hero} /> */}
          </span>
          <span className="text-xs lg:text-xs font-semibold relative bottom-6">
            &lt;/h1&gt;
          </span>
        </div>
        <p className="text-lg pt-5 pb-8 lg:w-[40ch]">
          <span className="text-xs font-semibold relative bottom-[2px]">
            &lt;p&gt;
          </span>{" "}
          {translate("hero.1")}
          <b className="text-[#EF6706] font-semibold">
            {translate("hero.joy")}
          </b>
          {translate("hero.2")}
          <b className="text-[#EF6706] font-semibold">
            {translate("hero.great")}
          </b>
          {translate("hero.3")}
          <b className="text-[#EF6706] font-semibold ">
            {translate("hero.meaning")}
          </b>
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
      </div>
    </section>
  );
}
