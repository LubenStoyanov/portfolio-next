import Image from "next/image";
import emailImage from "../public/images/email-image.png";

export default function Contact({ translate }: { translate: Function }) {
  return (
    <section
      id="contact"
      className="flex flex-col py-16 text-white bg-[#0D0E13]"
    >
      <div className=" mx-7 lg:px-80 ">
        <div className="flex place-items-center place-content-center gap-x-1 lg:px-20">
          <span className="text-xs font-bold">&lt;h2&gt; </span>
          <span className="border-t-2 w-20 lg:w-4/12 border-white"></span>
          <h2 className="font-bold lg:text-5xl text-3xl text-center">
            {translate("contact.title")}
          </h2>
          <span className="border-t-2 w-20 lg:w-4/12 border-white"></span>
          <span className="text-xs font-bold">&lt;h2/&gt;</span>
        </div>
        <div className="lg:flex lg:flex-col lg:items-center">
          <p className="pt-10  lg:max-w-[60ch]">
            <span className="text-xs font-semibold relative bottom-[2px]">
              &lt;p&gt;
            </span>{" "}
            {translate("contact.1")}
            <b className="text-[#EF6706]">{translate("contact.passionate")}</b>
            {translate("contact.2")}
            <b className="text-[#EF6706]">{translate("contact.valuable")}</b>
            {translate("contact.3")}
            <b className="text-[#EF6706]">
              {translate("contact.workTogether")}
            </b>
            {translate("contact.4")}
            <b className="text-[#EF6706]">{translate("contact.vision")}</b>
            {translate("contact.5")}{" "}
            <span className="text-xs font-semibold relative bottom-[2px]">
              &lt;/p&gt;
            </span>
          </p>
          <button className="max-w-fit font-bold mt-10">
            <a
              href="mailto:luben.stoyanov.ls@gmail.com?subject=Inquiry"
              className="no-underline"
            >
              <div className="flex">
                <Image
                  src={emailImage}
                  alt="Mail couvert"
                  className="w-8  self-center mr-1 shadow-lg transition delay-150 duration-300 ease-in-out hover:rotate-360 animate-pulse"
                />
                <span className="place-self-center italic  text-white">
                  luben.stoyanov.ls@gmail.com
                </span>
              </div>
            </a>
          </button>
        </div>
        {/* <p className="text-left text-base text-white font-bold mt-10">
          {translate("contact.connect")}
        </p> */}
      </div>
    </section>
  );
}
