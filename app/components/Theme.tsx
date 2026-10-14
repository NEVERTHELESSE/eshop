import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Theme() {
  const [isLight, setIsLight] = useState(true);

  function changeTheme() {
    setIsLight(!isLight);
    document.body.classList.toggle("dark");
  }

  // window.matchMedia("(prefers-color-scheme: dark)").matches;
  return (
    <div>
      <button className="cursor-pointer ml-2 text-2xl" onClick={changeTheme}>
        {isLight ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
}
