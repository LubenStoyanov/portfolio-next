import Link from "next/link";
const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="flex  flex-col items-center mx-4">
      <div className="border-b border-black">
        <ul className="flex  gap-x-5 mb-10">
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
      <small className="my-5 pt-0">
        <time>{YEAR}</time> © Luben Stoyanov.
      </small>
    </footer>
  );
}
