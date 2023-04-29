import Navbar from "./navbar";

export default function Header({ translate }: { translate: Function }) {
  return (
    <header className="fixed bottom-0 sm:top-0 left-0 right-0  text-gray-800 z-50 text-lg">
      <Navbar translate={translate} />
    </header>
  );
}
