import Link from "next/link";
const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="flex  flex-col items-center">
      <ul className="flex  gap-x-5">
        <Link
          href="https://www.linkedin.com/in/luben-stoyanov/"
          target="_blank"
          className="underline underline-offset-2"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/LubenStoyanov"
          target="_blank"
          className="underline underline-offset-2"
        >
          GitHub
        </Link>
        <Link
          href="https://www.twitter.com/luben_stoyanov"
          target="_blank"
          className="underline underline-offset-2"
        >
          Twitter
        </Link>
      </ul>
      <small className="my-5 block">
        <time>{YEAR}</time> © Luben Stoyanov.
      </small>
    </footer>
  );
}
