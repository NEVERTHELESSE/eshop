import { useEffect, useState } from "react";
import FreshAccount from "./FreshAccount";
import HeaderOption from "./HeaderOption";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Theme from "./Theme";
import { supabase } from "~/lib/supabase";
import { useCartStore } from "~/store/store";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Header() {
  type d = { data: any; error: any };

  const [user, setUser] = useState(null);

  const [account, setAccount] = useState(true);
  const email = useCartStore((store) => store.user.email);
  const getUser = () => {
    return useQuery({
      queryKey: ["user"],
      queryFn: async function () {
        const url = import.meta.env.VITE_APIURL;
        const { data } = await axios.get(`${url}verify`, {
          withCredentials: true,
        });
        return data;
      },
    });
  };
  const { data, isPending, error } = getUser();
  return (
    <div className="w-full">
      <header className="bg-[rgba(238, 236, 236, 0.5)] dark:text-white fixed  border-b dark:border-b-softD border-b-soft shadow glow z-100 py-2 lg:px-20 flex justify-between w-full md:py-4 items-center">
        <div className=" hidden sm:flex">
          <Logo />
        </div>
        <Navigation />
        <Theme />
        {isPending ? (
          "loading"
        ) : (
          <>{!error ? <HeaderOption /> : <FreshAccount />}</>
        )}
      </header>
      <div className="w-full h-10 md:h-18"></div>
    </div>
  );
}
