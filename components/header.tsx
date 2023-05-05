import Navbar from "./navbar";

export default function Header({ translate }: { translate: Function }) {
  return (
    <header className="bg-[#F9FAFE] min-h-[5vh]">
      <Navbar translate={translate} />
    </header>
  );
}
