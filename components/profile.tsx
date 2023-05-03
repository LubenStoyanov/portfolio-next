import Image from "next/image";
import profileImage from "../public/images/profile-white.png";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Profile({ translate }: { translate: Function }) {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) return;
  }, []);

  return (
    <section ref={ref} id="about" className="flex flex-col py-16 mx-7">
      <div className="flex place-items-center justify-between">
        <span className="text-xs font-bold">&lt;h2&gt; </span>
        <span className="border-t-2 w-20 border-black"></span>
        <h2 className="font-bold sm:text-5xl text-3xl text-center">
          {translate("about.title")}
        </h2>
        <span className="border-t-2 w-20 border-black"></span>
        <span className="text-sm font-bold">&lt;h2/&gt;</span>
      </div>
      <div className="flex flex-col sm:flex-row pt-10">
        <div className="justify-self-end sm:border-l-2">
          <p className=" max-w-[60ch]">
            <span className="text-xs font-semibold relative bottom-[2px]">
              &lt;p&gt;
            </span>{" "}
            {translate("about.1")}
            <b className="text-[#EF6706]">{translate("about.enthusiastic")}</b>
            {translate("about.2")}
            <b className="text-[#EF6706]">{translate("about.craft")}</b>
            {translate("about.3")}
            <b className="text-[#EF6706]">{translate("about.grow")}</b>
            {translate("about.4")}
            <b className="text-[#EF6706]">{translate("about.mindset")}</b>
            {translate("about.5")}
            <b className="text-[#EF6706]">{translate("about.creative")}</b>
            {translate("about.6")}
            <b className="text-[#EF6706]">{translate("about.effective")}</b>
            {translate("about.7")}
            <b className="text-[#EF6706]">{translate("about.joy")}</b>
            {translate("about.8")}{" "}
            <span className="text-xs font-semibold relative bottom-[2px]">
              &lt;/p&gt;
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center mt-10">
          <Image
            src={profileImage}
            alt="Profile picture of Luben Stoyanov"
            className="w-64 sm:w-96 h-64 sm:h-96 object-cover rounded-2xl grayscale "
            // style={{ zIndex: -999 }}
          />
        </div>
      </div>
    </section>
  );
}