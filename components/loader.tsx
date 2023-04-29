import { useState, useEffect } from "react";
export default function Loader() {
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => setMounted(true), []);

  // if (!mounted) return <Loader />;

  return (
    <div className="animate-spin h-10 w-10 transition duration-150 ease-in-out">
      spinner
    </div>
  );
}
