import Navbar from "./navbar";

export default function Header({ translate }: { translate: Function }) {
  return (
    // <header className="fixed  sm:top-0 left-0 right-0 text-lg">
    <header className="mx-7 bg-[#F9FAFE]">
      <Navbar translate={translate} />
    </header>
  );
}
