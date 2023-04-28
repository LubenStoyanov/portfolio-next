import { TypeAnimation } from "react-type-animation";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section className="min-h-screen sm:min-h-screen">
      {/* <h1 className="pt-52  text-[10vw] leading-[10vw] sm:text-[5vw] sm:leading-[5vw]">
        HELLO, I&apos;M{" "}
        <a href="#about">
          <motion.em
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-orange-500"
          >
          LUBEN
          </motion.em>
          </a>{" "}
          , A <em className="text-orange-500">WEB DEVELOPER</em> WHO EN
          <em className="text-orange-500 ">JOY</em>S BUILDING WEBSITES THAT LOOK{" "}
          <em className="text-orange-500">GREAT</em> AND PROVIDE A{" "}
          <em className="text-orange-500">MEANING</em>FUL EXPERIENCE FOR THEIR
          USERS.
        </h1> */}
      {/* <TypeAnimation
        className="pt-52  text-[10vw] leading-[10vw] sm:text-[5vw] sm:leading-[5vw]"
        sequence={[
          "HELLO, I'M LUBEN, A WEB DEVELOPER WHO ENJOYS BUILDING WEBSITES THAT LOOK GREAT AND PROVIDE A MEANINGFUL EXPERIENCE FOR THEIR USERS.",
          () => {
            console.log("Sequence completed"); // Place optional callbacks anywhere in the array
          },
        ]}
        wrapper="h1"
        cursor={false}
      /> */}
      {/* <TypeAnimation
        key={123}
        className="pt-52 text-[10vw] leading-[10vw] sm:text-[5vw] sm:leading-[5vw]"
        sequence={[
          "HELLO, I'M LUBEN, A WEB DEVELOPER WHO ENJOYS BUILDING WEBSITES THAT LOOK GREAT AND PROVIDE A MEANINGFUL EXPERIENCE FOR THEIR USER.",
        ]}
        wrapper="h1"
        cursor={false}
      /> */}

      <div className="pt-52 text-[10vw] leading-[10vw] sm:text-[5vw] sm:leading-[5vw]">
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

//max-w-[20ch]

`HELLO, I&apos;M{" "}


            LUBEN

        , A <em className="text-orange-500">WEB DEVELOPER</em> WHO EN
        <em className="text-orange-500 ">JOY</em>S BUILDING WEBSITES THAT LOOK{" "}
        <em className="text-orange-500">GREAT</em> AND PROVIDE A{" "}
        <em className="text-orange-500">MEANING</em>FUL EXPERIENCE FOR THEIR
        USERS.`;
