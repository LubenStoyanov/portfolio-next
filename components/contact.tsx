import Image from "next/image";
import emailImage from "../public/images/email-image.png";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col mt-10 md:mt-56">
      <h2 className="mt-5 font-bold">Contact</h2>
      <p className="mt-5 text-[5vw] sm:text-[3vw]">
        IF YOU&apos;RE LOOKING FOR A WEB DEVELOPER WHO&apos;S{" "}
        <em className="text-orange-500">PASSIONATE</em> ABOUT THEIR WORK AND
        COMMITTED TO PROVIDING <em className="text-orange-500">VALUABLE</em> AND
        DELIGHTFUL EXPERIENCES FOR USERS, THEN I&apos;D LOVE TO CHAT. LET&apos;S{" "}
        <em className="text-orange-500">WORK TOGETHER</em> TO BRING YOUR{" "}
        <em className="text-orange-500">VISION</em> TO LIFE!
      </p>
      <button className="btn mt-10 sm:my-20 max-w-fit text-[5vw] font-bold">
        <p className="text-blue-500 text-left sm:mb-5 text-[3.5vw] sm:text-[2.5vw]">
          Connect anytime :)
        </p>
        <a
          href="mailto:luben.stoyanov.ls@gmail.com?subject=Inquiry"
          className="flex underline underline-offset-2 text-blue-500"
        >
          <Image
            src={emailImage}
            alt="Mail couvert"
            className="w-8 sm:w-24 self-center mr-1 border border-gray-300 rounded sm shadow-lg"
          />
          <span className="place-self-center">luben.stoyanov.ls@gmail.com</span>
        </a>
      </button>
    </section>
  );
}
