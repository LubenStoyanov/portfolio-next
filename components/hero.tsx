import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section className="min-h-screen sm:min-h-screen">
      <div className="pt-52 text-[9.3vw] leading-[9.3vw] sm:text-[4vw] sm:leading-[4vw] max-w-[22ch] scroll-smooth">
        <Typewriter
          options={{
            loop: true,
            delay: 100,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                // "HELLO, I'M<em class='text-orange-500'> LUBEN</em>, A <em class='text-orange-500'>WEB DEVELOPER</em> WHO EN<em class='text-orange-500 mr-1'>JOY</em>S BUILDING WEBSITES THAT LOOK <em class='text-orange-500'>GREAT</em> AND PROVIDE A <em class='text-orange-500 mr-1'>MEANING</em>FUL EXPERIENCE FOR THEIR USER."
                "HELLO, I'M<em class='text-orange-500'> LUBEN</em>, A <em class='text-orange-500'>WEB DEVELOPER</em> WHO EN<em class='text-orange-500 mr-1'>JOY</em>S BUILDING <em class='text-orange-500'>GREAT</em> LOOKING  WEBSITES THAT PROVIDE A <em class='text-orange-500 mr-1'>MEANING</em>FUL EXPERIENCE FOR THEIR USER."
              )
              .start();
          }}
        />
      </div>
    </section>
  );
}
