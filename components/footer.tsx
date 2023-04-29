import Link from "next/link";
const YEAR = new Date().getFullYear();

export default function Footer({ translate }: { translate: Function }) {
  return (
    <footer className="flex flex-col justify-center ">
      <div className="flex justify-center pt-10">
        <ul className="flex gap-x-2 text-blue-500 grayscale-[50%]">
          <Link
            href="https://www.linkedin.com/in/luben-stoyanov/"
            target="_blank"
            className="underline underline-offset-2 decoration-2"
          >
            LinkedIn
          </Link>
          <span>/</span>
          <Link
            href="https://github.com/LubenStoyanov"
            target="_blank"
            className="underline underline-offset-2 decoration-2"
          >
            GitHub
          </Link>
          <span>/</span>
          <Link
            href="https://www.twitter.com/luben_stoyanov"
            target="_blank"
            className="underline underline-offset-2 decoration-2"
          >
            Twitter
          </Link>
        </ul>
      </div>
      <div className="flex flex-col place-items-center text-gray-400 pt-20 pb-[20%] sm:pb-[1%]">
        <small className="">
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
        <small className="">
          <time>{YEAR}</time> © Luben Stoyanov.
        </small>
      </div>
    </footer>
  );
}
