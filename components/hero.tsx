import TypewriterComponent from "./typewriter";

export default function Hero({ translate }: { translate: Function }) {
  const hero: string = translate("hero");

  return (
    <section className="min-h-[240px] text-5xl py-16">
      <div className="min-h-[240px]">
        <span className="text-xs font-semibold">&lt;h1&gt;</span>{" "}
        <TypewriterComponent hero={hero} />
        <span className="text-xs font-semibold relative bottom-6">
          &lt;/h1&gt;
        </span>
      </div>
      <p className="text-lg pt-5">
        <span className="text-xs font-semibold relative bottom-[2px]">
          &lt;p&gt;
        </span>
        I en
        <em className="text-orange-500 mr-1">joy</em> building{" "}
        <em className="text-orange-500">great</em> looking websites that provide
        a <em className="text-orange-500 mr-1">meaning</em>ful experience for
        their user.
        <span className="text-xs font-semibold relative bottom-[2px]">
          &lt;/p&gt;
        </span>
      </p>
      <button className="text-sm font-bold border-2 border-black hover:border-2 hover:border-orange-500 rounded-3xl px-5 py-3">
        GET IN TOUCH
      </button>
    </section>
  );
}
