import { useState } from "react";
import FreshAccount from "./FreshAccount";
import HeaderOption from "./HeaderOption";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Theme from "./Theme";

export default function Header() {
  const [account, setAccount] = useState(true);

  return (
    <div className="w-full">
      <header className="bg-[rgba(238, 236, 236, 0.5)] fixed   shadow glow z-100 py-2 lg:px-20 flex justify-between w-full md:py-4 items-center">
        <div className=" hidden sm:flex">
          <Logo />
        </div>
        <Navigation />
        <Theme />
        {account ? <HeaderOption /> : <FreshAccount />}
      </header>
      <div className="w-full h-10 md:h-18"></div>
    </div>
  );
}
