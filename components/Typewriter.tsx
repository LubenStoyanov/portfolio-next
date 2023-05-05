// import { useEffect, useRef } from "react";
// import Typewriter, { TypewriterClass } from "typewriter-effect";

// export default function TypewriterComponent({ hero }: { hero: string }) {
//   const typewriterRef = useRef<TypewriterClass | null>(null);
//   useEffect(() => {
//     const resetTypewriter = () => {
//       if (typewriterRef.current) {
//         typewriterRef.current.deleteAll();
//         hero.startsWith("I'm")
//           ? typewriterRef.current
//               .deleteAll()
//               .typeString("Welcome Traveler")
//               .pauseFor(500)
//           : typewriterRef.current
//               .deleteAll()
//               .typeString("Willkommen Reisender")
//               .pauseFor(500);
//         typewriterRef.current.deleteAll().typeString(hero);
//         typewriterRef.current.start();
//       }
//     };

//     resetTypewriter();
//   }, [hero]);

//   return (
//     <Typewriter
//       options={{
//         delay: 100,
//         autoStart: true,
//       }}
//       onInit={(typewriter) => {
//         typewriterRef.current = typewriter;
//         hero.startsWith("I'm")
//           ? typewriter.deleteAll().typeString("Welcome Traveler").pauseFor(500)
//           : typewriter
//               .deleteAll()
//               .typeString("Willkommen Reisender")
//               .pauseFor(500);
//         typewriter.deleteAll().typeString(hero);

//         if (typewriterRef.current) {
//           typewriterRef.current.start();
//         }
//       }}
//     />
//   );
// }
