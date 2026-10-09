import { useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsQuestionCircle, BsWhatsapp } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FiMessageSquare, FiShoppingCart, FiUser } from "react-icons/fi";
import { Link } from "react-router";
import { accounts, options } from "~/data/navigates";

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

  const buttonStyle =
    "items-center flex relative ml-2 cursor-pointer hover:bg-soft p-1  rounded-lg ";
  return (
    <section className="flex">
      <main className={buttonStyle}>
        <button
          title="favorite"

          onClick={toggleAccountDetail}
          className={buttonStyle}
        >
          <FiUser className="text-2xl sm:text-1xl mx-2" />
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
                  className="p-2 my-2 flex cursor-pointer hover:bg-soft rounded-lg  items-center"
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
          <FaHeart className="text-2xl mx-2 sm:text-1xl" />
        </button>
        <section
          className={`absolute top-10 w-50 shadow p-2 rounded-lg ${showHelpDetail ? "flex " : "hidden"}`}
        >
          <ul className="w-full p-2 my-2 rounded-lg bg-white">
            {options.map((option) => (
              <li
                key={option}
                className="p-2 flex cursor-pointer hover:bg-soft rounded-lg  items-center"
              >
                {option}
              </li>
            ))}
            <button className="primary w-full p-2 rounded-lg shadow my-2 flex justify-center items-center ">
              <FiMessageSquare />
              <span className="ml-2 ">Live Chat</span>
            </button>
            <button className="border-green-400 border w-full p-2 rounded-lg shadow flex text-green-400 justify-center items-center ">
              <BsWhatsapp />
              <span className="ml-2">Whatsapp</span>
            </button>
          </ul>
        </section>
      </main>
      <Link to="/cart" className={buttonStyle} title="favorite">
        <FiShoppingCart className="text-2xl mx-2 sm:text-1xl" />
      </Link>
    </section>
  );
}
