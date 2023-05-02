import Image from "next/image";
import profileImage from "../public/images/profile-white.png";

export default function Profile({ translate }: { translate: Function }) {
  return (
    <section id="about" className="flex flex-col py-16 mx-7">
      <div className="flex place-items-center place-content-center gap-x-1">
        <span className="text-sm font-bold">&lt;h2&gt; </span>
        <span className="border-t-2 w-16 border-black"></span>
        <h2 className="font-bold sm:text-5xl text-3xl text-center">
          {translate("about.title")}
        </h2>
        <span className="border-t-2 w-16 border-black"></span>
        <span className="text-sm font-bold">&lt;h2/&gt;</span>
      </div>
      <div className="flex flex-col sm:flex-row pt-10">
        <div className="justify-self-end sm:border-l-2">
          <p className=" max-w-[60ch]">
            {translate("about.1")}
            <em className="text-orange-500">
              {translate("about.enthusiastic")}
            </em>
            {translate("about.2")}
            <em className="text-orange-500">{translate("about.craft")}</em>
            {translate("about.3")}
            <em className="text-orange-500">{translate("about.grow")}</em>
            {translate("about.4")}
            <em className="text-orange-500">{translate("about.mindset")}</em>
            {translate("about.5")}
            <em className="text-orange-500">{translate("about.creative")}</em>
            {translate("about.6")}
            <em className="text-orange-500">{translate("about.effective")}</em>
            {translate("about.7")}
            <em className="text-orange-500">{translate("about.joy")}</em>
            {translate("about.8")}
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
