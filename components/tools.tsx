import MarqueeMobile from "./marqueeMobile";
import MarqueeDesktop from "./marqueeDesktop";

export default function Tools({ translate }: { translate: Function }) {
  return (
    <section className="pt-16 lg:pt-32 ">
      <div className="">
        <div className="flex place-items-center place-content-center gap-x-1 lg:mx-7 lg:px-80 ">
          <span className="text-xs font-bold">&lt;h2&gt; </span>
          <span className="border-t-2 w-20 lg:w-96 border-black"></span>
          <h2 className="font-bold lg:text-5xl text-3xl text-center">
            {translate("tools.title")}
          </h2>
          <span className="border-t-2 w-20 lg:w-96 border-black"></span>
          <span className="text-xs font-bold">&lt;h2/&gt;</span>
        </div>
        <div className="pt-12 lg:pb-28 lg:pt-16 lg:px-0">
          <p className="text-center text-xl lg:text-3xl font-[500] pb-16">
            What I use to do the work
          </p>
          <MarqueeMobile />
          <MarqueeDesktop />
        </div>
      </div>
    </section>
  );
}
