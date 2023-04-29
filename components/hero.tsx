import { SlArrowDownCircle } from "react-icons/sl";
import TypewriterComponent from "./Typewriter";

export default function Hero({ translate }: { translate: Function }) {
  const hero: string = translate("hero");

  return (
    <section className="grid min-h-screen sm:min-h-screen ">
      <div className="pt-52 text-5xl sm:text-8xl  max-w-[22ch] scroll-smooth">
        <div>
          <TypewriterComponent hero={hero} />
          {/* <button className="text-sm font-bold border-2 px-2 border-gray-700 rounded-md animate-pulse">
            LEARN MORE
          </button> */}
        </div>
      </div>
      <div className="flex justify-self-center items-center  text-sm animate-bounce">
        <span className="text-2xl ">
          {" "}
          <SlArrowDownCircle />
        </span>{" "}
        <p className="mx-2">SCROLL DOWN</p>{" "}
        <span className="text-2xl ">
          {" "}
          <SlArrowDownCircle />
        </span>
      </div>
    </section>
  );
}

{
  /* <Typewriter
  options={{
    loop: true,
    delay: 100,
    autoStart: true,
  }}
  onInit={(typewriter) => {
    typewriterRef.current = typewriter;
    typewriter.typeString(hero).start();
  }}
/> */
}
// const { locale } = useRouter();

// // const hero: string = translate("hero");

// const [hero, setHero] = useState(translate("hero"));
// const typewriterRef = useRef<TypewriterClass | null>(null);

// useEffect(() => {
//   typewriterRef.current?.pauseFor(500).deleteAll().typeString(hero).start();
// }, [hero]);
// typewriter.typeString(hero).start();
// typewriterRef.current = typewriter;
// "1": "HELLO, I'M ",
// "luben": "LUBEN ",
// "2": ", A ",
// "webdeveloper": "WEB DEVELOPER ",

// "3": "WHO ENJOYS BUILDING ",
// "great": "GREAT",
// "4": "LOOKING  WEBSITES THAT PROVIDE A ",
// "meaningful": "MEANINGFUL ",
// "5": "EXPERIENCE FOR THEIR USER."

//  "hero": {
//     "1": "Hallo, ich bin ",
//     "luben": "Luben ",
//     "2": ", a ",
//     "webdeveloper": "Webentwickler ",
//     "3": "der es genießt, ",
//     "great": "großartige ",
//     "4": "aussehende Websites zu erstellen, die einen ",
//     "meaningful": "sinnvolle ",
//     "5": "Erlebnis für ihre Nutzer bieten."
//   },

// "hero": "HALLO, ICH BIN <em class='text-orange-500'>LUBEN</em> , EIN <em class='text-orange-500'>WEB ENTWICKLER</em> DER ES GENIESST, <em class='text-orange-500'>GROßARTIG</em> AUSSEHENDE WEBSEITEN ZU ERSTELLEN, DIE EIN <em class='text-orange-500'>BEDEUTSAMES</em> ERLEBNIS FÜR IHRE NUTZER BIETEN.",
// "hero": "HELLO, I'M<em class='text-orange-500'> LUBEN</em>, A <em class='text-orange-500'>WEB DEVELOPER</em> WHO EN<em class='text-orange-500 mr-1'>JOY</em>S BUILDING <em class='text-orange-500'>GREAT</em> LOOKING  WEBSITES THAT PROVIDE A <em class='text-orange-500 mr-1'>MEANING</em>FUL EXPERIENCE FOR THEIR USER.",
// "HELLO, I'M<em class='text-orange-500'> LUBEN</em>, A <em class='text-orange-500'>WEB DEVELOPER</em> WHO EN<em class='text-orange-500 mr-1'>JOY</em>S BUILDING WEBSITES THAT LOOK <em class='text-orange-500'>GREAT</em> AND PROVIDE A <em class='text-orange-500 mr-1'>MEANING</em>FUL EXPERIENCE FOR THEIR USER."
// "HELLO, I'M<em class='text-orange-500'> LUBEN</em>, A <em class='text-orange-500'>WEB DEVELOPER</em> WHO EN<em class='text-orange-500 mr-1'>JOY</em>S BUILDING <em class='text-orange-500'>GREAT</em> LOOKING  WEBSITES THAT PROVIDE A <em class='text-orange-500 mr-1'>MEANING</em>FUL EXPERIENCE FOR THEIR USER."
// "HELLO, I'M<em class='text-orange-500'> LUBEN</em>, A <em class='text-orange-500'>WEB DEVELOPER</em>."
