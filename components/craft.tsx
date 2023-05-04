import SwiperComponent from "./swiper";

export default function Works({ translate }: { translate: Function }) {
  return (
    <section id="works" className="flex flex-col">
      <div className=" lg:px-80  lg:mx-0 bg-[#15141a]">
        <div className=" text-white pt-16 ">
          <div className="flex place-items-center place-content-center gap-x-1 ">
            <span className="text-xs font-bold ml-7">&lt;h2&gt; </span>
            <span className="border-t-2 w-[100%] lg:w-96 border-white"></span>
            <h2 className="font-bold lg:text-5xl text-3xl text-center">
              {translate("craft.title")}
            </h2>
            <span className="border-t-2 w-[100%] lg:w-96 border-white"></span>
            <span className="text-xs font-bold mr-7">&lt;h2/&gt;</span>
          </div>
          <div className="lg:flex justify-center gap-x-5 pt-10">
            <div className="mx-7 pb-16">
              <p className="  lg:max-w-[60ch] ">
                <span className="text-xs font-semibold relative bottom-[2px]">
                  &lt;p&gt;
                </span>{" "}
                {translate("craft.1")}
                <b className="text-[#EF6706]">{translate("craft.work")}</b>
                {translate("craft.2")}
                <b className="text-[#EF6706]">{translate("craft.ideas")}</b>
                {translate("craft.3")}
                <b className="text-[#EF6706]">{translate("craft.concepts")}</b>
                {translate("craft.4")}
                <b className="text-[#EF6706]">{translate("craft.exploring")}</b>
                {translate("craft.5")}
                <b className="text-[#EF6706]">{translate("craft.learning")}</b>
                {translate("craft.6")}
                <b className="text-[#EF6706]">{translate("craft.building")}</b>
                {translate("craft.7")}
                <b className="text-[#EF6706]">{translate("craft.creating")}</b>
                {translate("craft.8")}
                <b className="text-[#EF6706]">{translate("craft.thought")}</b>
                {translate("craft.9")}
                <b className="text-[#EF6706]">{translate("craft.ux")}</b>
                {translate("craft.10")}
                <b className="text-[#EF6706]">{translate("craft.intuitive")}</b>
                {translate("craft.11")}{" "}
                <span className="text-xs font-semibold relative bottom-[2px]">
                  &lt;/p&gt;
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ zIndex: 100 }} className="pt-16 text-black">
        <h2 className=" text-lg lg:text text-center ">Works</h2>
        <p className="font-[500] text-center text-2xl lg:text-4xl lg:pb-16">
          Some of the good stuff
        </p>
        <SwiperComponent />
      </div>
    </section>
  );
}
