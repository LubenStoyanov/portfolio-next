export default function Contact() {
  return (
    <section id="contact" className="flex flex-col min-h-screen mt-10">
      <h2 className="mt-5">Contact</h2>
      <p className="mt-5">
        IF YOU&apos;RE LOOKING FOR A WEB DEVELOPER WHO&apos;S{" "}
        <em className="text-orange-500">PASSIONATE</em> ABOUT THEIR WORK AND
        COMMITTED TO PROVIDING <em className="text-orange-500">VALUABLE</em> AND
        DELIGHTFUL EXPERIENCES FOR USERS, THEN I&apos;D LOVE TO CHAT. LET&apos;S{" "}
        <em className="text-orange-500">WORK TOGETHER</em> TO BRING YOUR{" "}
        <em className="text-orange-500">VISION</em> TO LIFE!
      </p>
      <button className="btn mt-10 border-4 border-orange-500 max-w-fit rounded-lg md:rounded-xl hover:bg-orange-500 hover:text-white">
        <a href="mailto:luben.stoyanov.ls@gmail.com?subject=Inquiry">
          Email Me
        </a>
      </button>
    </section>
  );
}
