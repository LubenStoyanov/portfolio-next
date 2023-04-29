import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";

export default function Works({ translate }: { translate: Function }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="works"
      className="flex flex-col min-h-screen sm:mt-5"
    >
      <div>
        <h2 className="font-bold sm:text-5xl mt-10 sm:mt-20 text-center">
          &lt;WORKS /&gt;
        </h2>
      </div>
      <div className="sm:flex mt-5 sm:mt-20 gap-x-5">
        <p className="  sm:max-w-[40ch] ">
          WHEN IT COMES TO MY <em className="text-orange-500">WORK</em>, I LIKE
          TO PLAY LEGO WITH <em className="text-orange-500">IDEAS</em> AND{" "}
          <em className="text-orange-500">CONCEPTS</em> IN PROGRAMMING. I LOVE{" "}
          <em className="text-orange-500">EXPLORING</em> NEW TECHNOLOGIES AND
          EXPERIMENTING WITH DIFFERENT APPROACHES TO FIND THE BEST SOLUTIONS FOR
          MY CLIENTS. BUT FOR ME, <em className="text-orange-500">BUILDING</em>{" "}
          A GREAT WEBSITE IS ABOUT MORE THAN JUST THE TECHNOLOGY. IT&apos;S
          ABOUT CREATING A JOYFUL EXPERIENCE FOR THE USERS OF THE WEBSITE.
          THAT&apos;S WHY I PUT A LOT OF{" "}
          <em className="text-orange-500">THOUGHT</em> INTO THE{" "}
          <em className="text-orange-500">USER EXPERIENCE</em>, MAKING SURE THAT
          EVERY WEBSITE I BUILD IS{" "}
          <em className="text-orange-500">INTUITIVE</em>, EASY TO USE, AND
          EXCITING TO <em className="text-orange-500">INTERACT</em> WITH.
        </p>
        <ul className="grid grid-cols-2 justify-items-center sm:grid-cols-none sm:flex sm:flex-col sm:gap-y-5 text- sm:text-[2vw] sm:leading-[2vw] my-5 sm:my-0 sm:border-l-2 sm:pl-5">
          <li className="">
            <a
              className="flex flex-row underline underline-offset-2 sm:underline-offset-4 text-blue-500"
              href="https://github.com/LubenStoyanov/speech-blender-frontend"
              target="_blank"
            >
              Speech Blender
              <SiGithub className="place-self-center ml-1 text-xl sm:text-xl" />
            </a>
          </li>
          <span className="hidden">/</span>
          <li>
            <a
              className="flex flex-row underline underline-offset-2 sm:underline-offset-4 text-blue-500"
              href="https://github.com/LubenStoyanov/fine-arts-express"
              target="_blank"
            >
              The Fine Art
              <SiGithub className="place-self-center ml-1 text-xl sm:text-xl" />
            </a>
          </li>
          <span className="hidden">/</span>
          <li>
            <a
              className="flex flex-row underline underline-offset-2 sm:underline-offset-4 text-blue-500"
              href="https://github.com/LubenStoyanov/drum-kit"
              target="_blank"
            >
              Drum Kit
              <SiGithub className="place-self-center ml-1 text-xl sm:text-xl" />
            </a>
          </li>
          <span className="hidden">/</span>
          <li>
            <a
              className="flex flex-row underline underline-offset-2 sm:underline-offset-4 text-blue-500"
              href="https://github.com/LubenStoyanov/pokefight-frontend"
              target="_blank"
            >
              Pokéfight
              <SiGithub className="place-self-center ml-1 text-xl sm:text-xl" />
            </a>
          </li>
          <span className="hidden">/</span>
        </ul>
      </div>
    </motion.section>
  );
}
