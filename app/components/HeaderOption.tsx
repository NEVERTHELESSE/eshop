import { useState } from "react";
import { useCartStore } from "../store/store";

import {
  FiBell,
  FiHeart,
  FiMessageSquare,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";
import { Link } from "react-router";
import { accounts, options } from "~/data/navigates";
import HelpDetail from "./HelpDetail";

export default function HeaderOption() {
  const [showAccountDetail, setShowAccountDetail] = useState(false);
  const [showHelpDetail, setShowHelpDetail] = useState(false);

  function toggleAccountDetail() {
    setShowAccountDetail(!showAccountDetail);
    setShowHelpDetail(showHelpDetail && !showHelpDetail);
  }

  function toggleHelpDetails() {
    setShowHelpDetail(!showHelpDetail);
    setShowAccountDetail(showAccountDetail && !showAccountDetail);
  }

  const count = useCartStore((state) => state.count);

  const buttonStyle =
    "items-center flex relative ml-2 relative cursor-pointer hover:bg-soft p-1  rounded-lg ";
  return (
    <section className="flex">
      <main className={buttonStyle}>
        <button
          title="favorite"

          onClick={toggleAccountDetail}
          className={buttonStyle}
        >
          <FiUser className="text-2xl lg:mx-8  mx-2" />
        </button>

        <section
          className={`absolute   bg-white top-10 w-50 shadow p-2 rounded-lg ${showAccountDetail ? "flex " : "hidden"}`}
        >
          <div className="w-full ">
            <Link
              to="/login"
              className="primary flex w-full p-2 rounded-lg shadow "
            >
              Sign In
            </Link>
            <ul>
              {accounts.map(({ id, title, icon }) => (
                <li
                  key={id}
                  className="p-2 my-2  flex cursor-pointer hover:bg-soft rounded-lg  items-center"
                >
                  <span className=" mr-3">{icon}</span>
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <main className={buttonStyle}>
        <button
          onClick={toggleHelpDetails}
          className=" items-center hidden sm:flex cursor-pointer"
          title="favorite"
        >
          <FiHeart className="text-2xl  lg:mx-4 mx-2 sm:text-1xl" />
        </button>
        <HelpDetail showHelpDetail={showHelpDetail} />
      </main>
      <Link to="/cart" className={buttonStyle} title="favorite">
        {count != 0 && (
          <div className="absolute rounded-full size-5 top-0 right-0 flex justify-center items-center text-white font-bold bg-red-500">
            <p>{count}</p>
          </div>
        )}
        <FiShoppingCart className="text-2xl lg:mx-4 mx-2 sm:text-1xl" />
      </Link>
      <Link to="/cart" className={buttonStyle} title="favorite">
        <FiBell className="text-2xl lg:mx-4 mx-2 sm:text-1xl" />
      </Link>
    </section>
  );
}
