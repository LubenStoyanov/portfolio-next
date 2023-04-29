import Image from "next/image";
import { motion } from "framer-motion";
import profileImage from "../public/images/profile-white.png";

export default function Profile({ translate }: { translate: Function }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="flex flex-col"
    >
      <div className="flex place-items-center place-content-center gap-x-1 pt-20">
        <span className="text-sm font-bold">&lt;h2&gt; </span>
        <span className="border-t-2 w-16 border-black"></span>
        <h2 className="font-bold sm:text-5xl text-3xl text-center">
          {translate("about.title")}
        </h2>
        <span className="border-t-2 w-16 border-black"></span>
        <span className="text-sm font-bold">&lt;h2/&gt;</span>
      </div>
      <div className="flex flex-col sm:flex-row pt-10">
        <div className="flex flex-col items-center ">
          <Image
            src={profileImage}
            alt="Profile picture of Luben Stoyanov"
            className="w-64 sm:w-96 h-64 sm:h-96 object-cover rounded-2xl grayscale-[100%]"
            style={{ zIndex: -999 }}
          />
        </div>
        <div className="justify-self-end sm:border-l-2 pt-10">
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
      </div>
    </motion.section>
  );
}
