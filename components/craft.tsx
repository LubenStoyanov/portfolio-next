import { SiGithub } from "react-icons/si";

export default function Works({ translate }: { translate: Function }) {
  return (
    <section id="works" className="flex flex-col py-16">
      <div className="flex place-items-center place-content-center gap-x-1">
        <span className="text-sm font-bold">&lt;h2&gt; </span>
        <span className="border-t-2 w-16 border-black"></span>
        <h2 className="font-bold sm:text-5xl text-3xl text-center">
          {translate("works.title")}
        </h2>
        <span className="border-t-2 w-16 border-black"></span>
        <span className="text-sm font-bold">&lt;h2/&gt;</span>
      </div>
      <div className="sm:flex gap-x-5 pt-10">
        <p className="  sm:max-w-[40ch] ">
          When it comes to my <em className="text-orange-500">work</em>, I like
          to play lego with <em className="text-orange-500">ideas</em> and{" "}
          <em className="text-orange-500">concepts</em> in programming. I love{" "}
          <em className="text-orange-500">exploring</em> new tools and
          experimenting with different approaches to find the best solutions for
          my clients. But for me, <em className="text-orange-500">building</em>{" "}
          a great website is about more than just the technology. it&apos;s
          about creating a joyful experience for the users of the website.
          That&apos;s why i put a lot of{" "}
          <em className="text-orange-500">thought</em> into the{" "}
          <em className="text-orange-500">user experience</em>, making sure that
          every website i build is{" "}
          <em className="text-orange-500">intuitive</em>, easy to use, and
          exciting to <em className="text-orange-500">interact</em> with.
        </p>
        <div className="pt-10">
          <ul className="grid grid-cols-1 place-items-center sm:grid-cols-none sm:flex sm:flex-col sm:border-l-2">
            <li className="">
              <a
                className="flex flex-row underline underline-offset-2 sm:underline-offset-4 text-blue-500"
                href="https://github.com/LubenStoyanov/speech-blender-frontend"
                target="_blank"
              >
                Speech Blender
                <SiGithub className="place-self-center" />
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
                <SiGithub className="place-self-center" />
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
                <SiGithub className="place-self-center" />
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
                <SiGithub className="place-self-center" />
              </a>
            </li>
            <span className="hidden">/</span>
          </ul>
        </div>
      </div>
    </section>
  );
}
