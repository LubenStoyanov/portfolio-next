import TypewriterComponent from "./Typewriter";
import styled, { keyframes } from "styled-components";

const Button = styled.button`
  transition: 0.3s ease-in-out 100ms;
`;

export default function Hero({ translate }: { translate: Function }) {
  const hero: string = translate("hero.title");

  return (
    <section className="min-h-[240px] text-5xl pb-16 pt-6 mx-7">
      <div className="min-h-[240px]">
        <span className="text-xs font-semibold">&lt;h1&gt;</span>
        <TypewriterComponent hero={hero} />
        <span className="text-xs font-semibold relative bottom-6">
          &lt;/h1&gt;
        </span>
      </div>
      <p className="text-lg pt-5 pb-8">
        <span className="text-xs font-semibold relative bottom-[2px]">
          &lt;p&gt;
        </span>
        {translate("hero.1")}
        <em className="text-orange-500 mr-1">{translate("hero.joy")}</em>
        {translate("hero.2")}
        <em className="text-orange-500">{translate("hero.great")}</em>
        {translate("hero.3")}
        <em className="text-orange-500 mr-1">
          {translate("hero.meaning")}
        </em>{" "}
        {translate("hero.4")}
        <span className="text-xs font-semibold relative bottom-[2px]">
          &lt;/p&gt;
        </span>
      </p>
      <Button className="text-sm font-semibold border-2 border-black hover:border-orange-500 rounded-3xl px-5 py-3">
        {translate("hero.cat-button")}
      </Button>
    </section>
  );
}
