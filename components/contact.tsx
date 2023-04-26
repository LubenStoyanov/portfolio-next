export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col min-h-screen scroll-mt-20 md:scroll-mt-20 text-[7vw] md:text-[5vw] leading-[7vw] md:leading-[5vw]"
    >
      <h2>Contact</h2>
      <p className="mt-5">
        IF YOU&apos;RE LOOKING FOR A WEB DEVELOPER WHO&apos;S{" "}
        <em className="text-orange-500">PASSIONATE</em> ABOUT THEIR WORK AND
        COMMITTED TO PROVIDING <em className="text-orange-500">VALUABLE</em> AND
        DELIGHTFUL EXPERIENCES FOR USERS, THEN I&apos;D LOVE TO CHAT. LET&apos;S{" "}
        <em className="text-orange-500">WORK TOGETHER</em> TO BRING YOUR{" "}
        <em className="text-orange-500">VISION</em> TO LIFE!
      </p>
      <button>
        <a href="mailto:luben.stoyanov.ls@gmail.com?subject=Inquiry">
          Email Me
        </a>
      </button>
    </section>
  );
}
