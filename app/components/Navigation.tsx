import { FaSearch } from "react-icons/fa";
import Logo from "./Logo";
import HeaderOption from "./HeaderOption";
import Search from "./Search";
import { supabase } from "../lib/supabase";
import { useEffect, useState, type ChangeEvent } from "react";
import FreshAccount from "./FreshAccount";
import { FiSearch } from "react-icons/fi";

export default function Navigation() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    const { data, error } = await supabase.from("user").select("*");
    if (error) {
      console.log(error);
      return;
    }
    // console.log(data);
  }

  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  function loadSearch(e: ChangeEvent<HTMLInputElement>) {
    e.target.value.length > 2 && setShowSearch(true);
    setSearchText(e.target.value);
  }

  return (
    <section className="px-2  mx-2 md:p-0 w-full md:w-[50vw] ">
      <form
        action=""
        className="bg-soft dark:bg-softD relative z-70 w-full mx-2 p-2 flex items-center pl-2 sm:pl-4 rounded-full"
      >
        <FaSearch className="text-gray-500 hidden sm:flex " />
        <input
          type="text"
          placeholder="Search products, brands and categories"
          onChange={loadSearch}
          className=" sm:p-2 text w-full z-10 focus:outline-none "
        />
        <button
          type="submit"
          className="rounded-full absolute right-1 sm:right-2 items-center p-1 primary sm:py-2 sm:px-4 "
        >
          <span className="sm:flex hidden">Search</span>
          <span className="sm:hidden flex">
            <FiSearch />
          </span>
        </button>
        {showSearch && <Search />}
      </form>
    </section>
  );
}
