import Link from "next/link";
const YEAR = new Date().getFullYear();

export default function Footer({ translate }: { translate: Function }) {
  return (
    <footer className="flex flex-col justify-center max-w-screen mb-10 sm:mb-0 mt-20 sm:text-[2vw]">
      <div className="flex justify-center border-b border-black w-full">
        <ul className="flex gap-x-5 mb-10 text-blue-500 grayscale-[50%]">
          <Link
            href="https://www.linkedin.com/in/luben-stoyanov/"
            target="_blank"
            className="underline underline-offset-4 decoration-2"
          >
            LinkedIn
          </Link>
          <span>/</span>
          <Link
            href="https://github.com/LubenStoyanov"
            target="_blank"
            className="underline underline-offset-4 decoration-2"
          >
            GitHub
          </Link>
          <span>/</span>
          <Link
            href="https://www.twitter.com/luben_stoyanov"
            target="_blank"
            className="underline underline-offset-4 decoration-2"
          >
            Twitter
          </Link>
        </ul>
      </div>
      <div className="flex justify-between leading-1 tracking-tighter sm:text- text-gray-400">
        <small className="my-5 pt-0">
          <time>{YEAR}</time> © Luben Stoyanov.
        </small>
        <small className="my-5 pt-0">
          Made with ❤ using{" "}
          <a
            href="https://www.nextjs.org"
            className="underline underline-offset-1"
            target="_blank"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://www.tailwindcss.com"
            className="underline underline-offset-1"
            target="_blank"
          >
            TailwindCSS
          </a>
          .
        </small>
      </div>
    </footer>
  );
}
