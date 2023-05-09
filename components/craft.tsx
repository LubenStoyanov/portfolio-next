import Projects from "./projects";

export default function Works({ translate }: { translate: Function }) {
  return (
    <section id="works" className="flex flex-col">
      <div className=" md:px-80  md:mx-0 bg-[#15141a]">
        <div className=" text-white pt-16 ">
          <div className="flex place-items-center place-content-center gap-x-1 ">
            <span className="text-xs font-bold ml-7">&lt;h2&gt; </span>
            <span className="border-t-2 w-[100%] md:w-96 border-white"></span>
            <h2 className="font-bold md:text-5xl text-3xl text-center">
              {translate("craft.title")}
            </h2>
            <span className="border-t-2 w-[100%] md:w-96 border-white"></span>
            <span className="text-xs font-bold mr-7">&lt;h2/&gt;</span>
          </div>
          <div className="md:flex justify-center gap-x-5 pt-10">
            <div className="mx-7 pb-16">
              <p className="  md:max-w-[60ch] ">
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
      <div className="py-8 bg-[#F9FAFE]">
        <h2 className=" text-lg md:text text-center ">Works</h2>
        <p className="font-[500] text-center text-2xl md:text-4xl ">
          Some of the good stuff
        </p>
      </div>
      <div className="flex flex-col items-center bg-[#F9FAFE] mb-16 ">
        <Projects />
      </div>
    </section>
  );
}
