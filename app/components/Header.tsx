import { useEffect, useState } from "react";
import FreshAccount from "./FreshAccount";
import HeaderOption from "./HeaderOption";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Theme from "./Theme";
import { useCartStore } from "~/store/store";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Header() {
  type d = { data: any; error: any };

  const [user, setUser] = useState(null);

  const addUser = useCartStore((state) => state.addUser);
  const getUser = () => {
    return useQuery({
      queryKey: ["user"],
      queryFn: async function () {
        const url = import.meta.env.VITE_APIURL;
        const { data } = await axios.get(`${url}verify`, {
          withCredentials: true,
        });
        console.log(data.user);
        addUser({
          email: data.user.email,
          username: data.user.username,
          profilePic: data.user.profilePic,
        });
        return data;
      },
    });
  };
  const { data, isPending, error } = getUser();
  return (
    <div className="w-full">
      <header className="bg-[rgba(238, 236, 236, 0.5)] dark:text-white fixed  border-b dark:border-b-softD border-b-soft shadow glow z-100 py-2 lg:px-20 flex justify-between w-full md:py-4 items-center">
        <div className=" hidden md:flex">
          <Logo />
        </div>
        <Navigation />
        <Theme />
        <div className="hidden sm:flex">
          {isPending ? (
            "loading"
          ) : (
            <>{!error ? <HeaderOption /> : <FreshAccount />}</>
          )}
        </div>
      </header>
      <div className="w-full h-10 md:h-18"></div>
    </div>
  );
}
