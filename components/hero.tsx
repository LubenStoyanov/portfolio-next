import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section className="min-h-screen sm:min-h-screen">
      <div className="pt-52 text-[10vw] leading-[10vw] sm:text-[4vw] sm:leading-[4vw] max-w-[20ch] scroll-smooth">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "HELLO, I'M <em class='text-orange-500'>LUBEN</em>, A <em class='text-orange-500'>WEB DEVELOPER</em> WHO EN<em class='text-orange-500'>JOY</em>S BUILDING WEBSITES THAT LOOK <em class='text-orange-500'>GREAT</em> AND PROVIDE A <em class='text-orange-500'>MEANING</em>FUL EXPERIENCE FOR THEIR USER."
              )
              .start();
          }}
        />
      </div>
    </section>
  );
}
