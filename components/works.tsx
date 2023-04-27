import { RxExternalLink } from "react-icons/rx";

export default function Works() {
  return (
    <section id="works" className="flex flex-col min-h-screen mt-5">
      <h2 className="mt-5 font-bold sm:text-[5vw]">Works</h2>
      <ul className="flex flex-col my-5 sm:my-10 sm:gap-y-4 text-[4.5vw] sm:text-[3vw]">
        <li>
          <a
            className="flex flex-row underline underline-offset-4 text-blue-500"
            href="https://github.com/LubenStoyanov/speech-blender-frontend"
            target="_blank"
          >
            Speech Blender
            <RxExternalLink className="place-self-center ml-1 " />
          </a>
        </li>
        <li>
          <a
            className="flex flex-row underline underline-offset-4 text-blue-500"
            href="https://github.com/LubenStoyanov/fine-arts-express"
            target="_blank"
          >
            The Fine Art
            <RxExternalLink className="place-self-center ml-1 " />
          </a>
        </li>
        <li>
          <a
            className="flex flex-row underline underline-offset-4 text-blue-500"
            href="https://github.com/LubenStoyanov/drum-kit"
            target="_blank"
          >
            Drum Kit
            <RxExternalLink className="place-self-center ml-1 " />
          </a>
        </li>
        <li>
          <a
            className="flex flex-row underline underline-offset-4 text-blue-500"
            href="https://github.com/LubenStoyanov/pokefight-frontend"
            target="_blank"
          >
            Pokéfight
            <RxExternalLink className="place-self-center ml-1 " />
          </a>
        </li>
        <li>
          <a
            className="flex flex-row underline underline-offset-4 text-blue-500"
            href="https://github.com/LubenStoyanov/hacker-news-replica"
            target="_blank"
          >
            Hacker News Replica
            <RxExternalLink className="place-self-center ml-1 " />
          </a>
        </li>
      </ul>
      <p className="mt-5">
        WHEN IT COMES TO MY <em className="text-orange-500">WORK</em>, I LIKE TO
        PLAY LEGO WITH <em className="text-orange-500">IDEAS</em> AND{" "}
        <em className="text-orange-500">CONCEPTS</em> IN PROGRAMMING. I LOVE{" "}
        <em className="text-orange-500">EXPLORING</em> NEW TECHNOLOGIES AND
        EXPERIMENTING WITH DIFFERENT APPROACHES TO FIND THE BEST SOLUTIONS FOR
        MY CLIENTS. BUT FOR ME, <em className="text-orange-500">BUILDING</em> A
        GREAT WEBSITE IS ABOUT MORE THAN JUST THE TECHNOLOGY. IT&apos;S ABOUT
        CREATING A JOYFUL EXPERIENCE FOR THE USERS OF THE WEBSITE. THAT&apos;S
        WHY I PUT A LOT OF <em className="text-orange-500">THOUGHT</em> INTO THE{" "}
        <em className="text-orange-500">USER EXPERIENCE</em>, MAKING SURE THAT
        EVERY WEBSITE I BUILD IS <em className="text-orange-500">INTUITIVE</em>,
        EASY TO USE, AND EXCITING TO{" "}
        <em className="text-orange-500">INTERACT</em> WITH.
      </p>
    </section>
  );
}
