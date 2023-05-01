import Image from "next/image";
import emailImage from "../public/images/email-image.png";

export default function Contact({ translate }: { translate: Function }) {
  return (
    <section id="contact" className="flex flex-col py-16">
      <div className="flex place-items-center place-content-center gap-x-1">
        <span className="text-sm font-bold">&lt;h2&gt; </span>
        <span className="border-t-2 w-16 border-black"></span>
        <h2 className="font-bold sm:text-5xl text-3xl text-center">
          {translate("contact.title")}
        </h2>
        <span className="border-t-2 w-16 border-black"></span>
        <span className="text-sm font-bold">&lt;h2/&gt;</span>
      </div>
      <p className="pt-10 max-w-[40ch]">
        If you&apos;re looking for a web developer who&apos;s{" "}
        <em className="text-orange-500">passionate</em> about their work and
        committed to providing <em className="text-orange-500">valuable</em> and
        delightful experiences for users, then I&apos;d love to chat. Let&apos;s{" "}
        <em className="text-orange-500">work together</em> to bring your{" "}
        <em className="text-orange-500">vision</em> to life!
      </p>
      <a
        href="mailto:luben.stoyanov.ls@gmail.com?subject=Inquiry"
        className="underline underline-offset-2 text-blue-500"
      >
        <button className="pt-5 max-w-fit font-bold">
          <p className="text-blue-500 text-left text-base">
            Connect anytime :&#41;
          </p>
          <div className="flex">
            <Image
              src={emailImage}
              alt="Mail couvert"
              className="w-8 self-center mr-1 shadow-lg transition delay-150 duration-300 ease-in-out hover:rotate-360 animate-pulse"
            />
            <span className="place-self-center italic">
              luben.stoyanov.ls@gmail.com
            </span>
          </div>
        </button>
      </a>
    </section>
  );
}
